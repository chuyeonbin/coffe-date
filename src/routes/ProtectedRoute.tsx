import { useRecoilState } from 'recoil';
import { userState } from '../store/user';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserAPI } from '../api/user';
import { ACCESS_TOKEN } from '../utils/constant';

interface ProtectedRouteProps {
  component: JSX.Element;
  authentication: boolean;
}

export default function ProtectedRoute({
  component: Component,
  authentication,
}: ProtectedRouteProps) {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      getUserAPI()
        .then((data) => {
          if (data) {
            setUser((currValue) => ({ ...currValue, email: data.email, nickname: data.nickname }));
            return;
          }
        })
        .catch((err) => {
          setUser(null);
          localStorage.removeItem(ACCESS_TOKEN);
          console.error(err);
        });
      return;
    }
    setUser(null);
    localStorage.removeItem(ACCESS_TOKEN);
  }, []);

  if (authentication) {
    return user ? <>{Component}</> : <Navigate to={'login'} />;
  }

  return user ? <Navigate to={'/'} /> : <>{Component}</>;
}
