import { styled } from 'styled-components';
import RegisterModal from '../../components/RegisterModal';

export default function RegisterPage() {
  return (
    <St.Container>
      <RegisterModal />
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
