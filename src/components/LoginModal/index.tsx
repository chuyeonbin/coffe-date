import { styled } from 'styled-components';
import LoginForm, { FormInputs } from '../LoginForm';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

export default function LoginModal() {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: SubmitHandler<FormInputs> = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsMessageVisible(true);
    }, 2000);
  };

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
        {!isMessageVisible ? (
          <LoginForm onSubmit={handleSubmit} loading={isLoading} />
        ) : (
          <St.EmailSendMessage>이메일로 로그인 링크를 전송 했습니다!</St.EmailSendMessage>
        )}
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

  EmailSendMessage: styled.div`
    padding: 16px;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: #ffffff;
    background-color: #ffb689;
    border-radius: 8px;
    border: 1px solid #ff8630;
  `,
};
