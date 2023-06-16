import { useRecoilValue } from 'recoil';
import { userState } from '../store/user';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  component: JSX.Element;
  authentication: boolean;
}

export default function ProtectedRoute({
  component: Component,
  authentication,
}: ProtectedRouteProps) {
  const user = useRecoilValue(userState);

  if (authentication) {
    return user ? <>{Component}</> : <Navigate to={'login'} />;
  }

  return user ? <Navigate to={'/'} /> : <>{Component}</>;
}
