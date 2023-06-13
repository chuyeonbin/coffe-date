import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

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
