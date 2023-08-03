import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../../store/darkMode';
import HeaderMenu from '../HeaderMenu';
import { userState } from '../../store/user';
import { BiUser } from 'react-icons/bi';
import useToggle from '../../hooks/useToggle';
import { useMutation } from '@tanstack/react-query';
import { logOutAPI } from '../../api/user';
import { ACCESS_TOKEN } from '../../utils/constant';

export default function Header() {
  const navigate = useNavigate();
  const [isVisible, toggleMenu] = useToggle(false);
  const [user, setUser] = useRecoilState(userState);
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
  const { mutate: logOutMutate } = useMutation(() => logOutAPI(), {
    onSuccess: () => {
      navigate('/');
      localStorage.removeItem(ACCESS_TOKEN);
      setUser(null);
    },
  });

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogOutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    logOutMutate();
  };

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
            <St.Button onClick={handleDarkModeClick}>
              {isDarkMode ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} />}
            </St.Button>
          </St.NavbarItem>
          {user && (
            <St.NavbarItem>
              <St.Button onClick={toggleMenu}>
                <BiUser size={24} />
              </St.Button>
            </St.NavbarItem>
          )}
        </St.NavbarMenu>
        {user && (
          <HeaderMenu onClose={toggleMenu} onLogOut={handleLogOutClick} isVisible={isVisible} />
        )}
      </St.ContainerInner>
    </St.Container>
  );
}

const St = {
  Container: styled.header`
    position: fixed;
    height: 60px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bgElement1};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border1};
  `,

  ContainerInner: styled.div`
    position: relative;
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
    color: ${({ theme }) => theme.colors.text1};
    font-size: inherit;
    font-weight: inherit;

    &:hover {
      color: ${({ theme }) => theme.colors.primary1};
      background-color: ${({ theme }) => theme.colors.slightLayer};
      border-radius: 8px;
    }
  `,
};
