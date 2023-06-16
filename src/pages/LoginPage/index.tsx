import { styled } from 'styled-components';
import LoginModal from '../../components/LoginModal';

export default function LoginPage() {
  return (
    <St.Container>
      <LoginModal />
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
