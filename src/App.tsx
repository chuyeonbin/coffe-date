import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme } from './styles/themes';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
