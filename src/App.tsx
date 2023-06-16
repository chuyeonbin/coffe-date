import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/themes';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkModeState } from './store/darkMode';
import Header from './components/Header';

export default function App() {
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
