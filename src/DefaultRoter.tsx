import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './pages/main';
import LoginPage from './pages/main/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      { path: 'login', element: <LoginPage /> },
      { path: '*', element: <div>없는 페이지</div> },
    ],
  },
]);

export default router;
