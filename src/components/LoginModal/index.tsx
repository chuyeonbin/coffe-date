import { styled } from 'styled-components';
import LoginForm from '../LoginForm';

export default function LoginModal() {
  return (
    <St.Container>
      <St.Left>
        <St.Title>Daily Coffee</St.Title>
        <St.LogoContainer>
          <St.Logo src={process.env.PUBLIC_URL + '/welcome.svg'} alt='welcome' />
        </St.LogoContainer>
        <St.WelcomeText>환영합니다!</St.WelcomeText>
      </St.Left>
      <St.Right>
        <St.LoginText>로그인</St.LoginText>
        <LoginForm />
      </St.Right>
    </St.Container>
  );
}

const St = {
  Container: styled.div`
    display: flex;
    width: 600px;
    height: 530px;
    background-color: ${({ theme }) => theme.colors.bgElement1};
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.colors.elementShadow};
  `,

  Left: styled.div`
    width: 40%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.bgElement2};
  `,

  Right: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    width: 60%;
  `,

  LoginText: styled.h2`
    margin-bottom: 24px;
    font-size: ${({ theme }) => theme.fontSizes.xxx1};
    color: ${({ theme }) => theme.colors.text2};
  `,

  Title: styled.h1`
    font-size: 28px;
    color: ${({ theme }) => theme.colors.primary1};
  `,

  LogoContainer: styled.div`
    margin: 16px 0;
  `,

  Logo: styled.img`
    width: 100%;
    height: 100%;
  `,

  WelcomeText: styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.xxx1};
    color: ${({ theme }) => theme.colors.text1};
  `,
};
