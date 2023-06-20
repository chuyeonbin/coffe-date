import styled from 'styled-components';

export default function ModalLeft() {
  return (
    <St.Container>
      <St.Title>Daily Coffee</St.Title>
      <St.LogoContainer>
        <St.Logo src={process.env.PUBLIC_URL + '/welcome.svg'} alt='welcome' />
      </St.LogoContainer>
      <St.WelcomeText>환영합니다!</St.WelcomeText>
    </St.Container>
  );
}

const St = {
  Container: styled.div`
    width: 40%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.bgElement2};
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
