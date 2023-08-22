import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import GlobalStyle from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { darkTheme, lightTheme } from './styles/themes';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkModeState } from './store/darkMode';
import Header from './components/Header';

export default function App() {
  const isDarkMode = useRecoilValue(darkModeState);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        <Header />
        <Outlet />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}
