import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { MdOutlineLightMode } from 'react-icons/md';

export default function Header() {
  return (
    <St.Container>
      <St.ContainerInner>
        <St.LogoContainer>
          <Link to={'/'}>
            <St.Logo src={process.env.PUBLIC_URL + '/logo.svg'} alt='logo' />
          </Link>
        </St.LogoContainer>
        <St.NavbarMenu>
          <St.NavbarItem>
            <St.Button>
              <MdOutlineLightMode size={24} />
            </St.Button>
          </St.NavbarItem>
          <St.NavbarItem>
            <St.Button>로그인</St.Button>
          </St.NavbarItem>
        </St.NavbarMenu>
      </St.ContainerInner>
    </St.Container>
  );
}

const St = {
  Container: styled.header`
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid rgba(0, 27, 55, 0.1);
  `,

  ContainerInner: styled.div`
    margin: 0 auto;
    padding: 0 16px;
    height: 100%;
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  LogoContainer: styled.div`
    width: 110px;
    height: 100%;
  `,

  Logo: styled.img`
    width: 100%;
    height: 100%;
  `,

  NavbarMenu: styled.ul`
    display: flex;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  `,

  NavbarItem: styled.li`
    display: flex;
    align-items: center;
    padding-left: 8px;
  `,

  Button: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 10px;
    font-size: inherit;
    font-weight: inherit;

    &:hover {
      color: #c07343;
      background-color: rgba(2, 32, 71, 0.05);
      border-radius: 8px;
    }
  `,
};
