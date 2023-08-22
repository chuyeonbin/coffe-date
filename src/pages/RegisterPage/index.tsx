import { styled } from 'styled-components';
import RegisterModal from '../../components/RegisterModal';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { checkCodeAPI } from '../../api/auth';
import Loading from '../../components/Loading';
import { useEffect } from 'react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { data, isLoading, isError } = useQuery(['resgiter-code'], () => checkCodeAPI(code), {
    enabled: !!code,
  });

  useEffect(() => {
    if (data) {
      if (!data.email) {
        navigate('/login');
      }
    }
  }, [data]);

  if (!code || isError) return <Navigate to='/login' />;

  if (isLoading) return <Loading />;

  return <St.Container>{<RegisterModal registerEmail={data.email} />}</St.Container>;
}

const St = {
  Container: styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `,
};
