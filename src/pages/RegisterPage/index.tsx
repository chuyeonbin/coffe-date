import { styled } from 'styled-components';
import RegisterModal from '../../components/RegisterModal';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { checkCodeAPI } from '../../api/auth';

export default function RegisterPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');

  const { data, isLoading } = useQuery(['resgiter-code'], () => checkCodeAPI(code), {
    enabled: !!code,
  });

  useEffect(() => {
    if (data) {
      if (!data.checked) {
        navigate('/login');
      }
    }
  }, [data, isLoading]);

  if (!code) return <Navigate to='/login' />;

  return (
    <St.Container>
      {!isLoading && !!data && <RegisterModal registerEmail={data.email} />}
    </St.Container>
  );
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
