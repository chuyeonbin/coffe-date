import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { emailLoginAPI } from '../../api/auth';
import Loading from '../../components/Loading';
import { ACCESS_TOKEN } from '../../utils/constant';
import { userState } from '../../store/user';
import { useSetRecoilState } from 'recoil';

export default function EmailLoginPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');
  const setUser = useSetRecoilState(userState);

  const { data, isLoading } = useQuery(['email-login'], () => emailLoginAPI(code), {
    enabled: !!code,
  });

  useEffect(() => {
    if (data) {
      if (data.user) {
        localStorage.setItem(ACCESS_TOKEN, data.access_token);

        const { email, nickname } = data.user;
        setUser({ email, nickname });
      }
      navigate('/');
    }
  }, [isLoading]);

  if (!code) return <Navigate to='/login' />;

  return <Loading />;
}
