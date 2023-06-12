import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme } from './styles/themes';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}
