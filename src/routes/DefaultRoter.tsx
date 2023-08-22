import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import RegisterPage from '../pages/RegisterPage';
import EmailLoginPage from '../pages/EmailLoginPage';
import LogPage from '../pages/LogPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <ProtectedRoute authentication={true} component={<MainPage />} />,
      },
      {
        path: 'log',
        element: <ProtectedRoute authentication={true} component={<LogPage />} />,
      },
      {
        path: 'login',
        element: <ProtectedRoute authentication={false} component={<LoginPage />} />,
      },
      {
        path: 'email-login',
        element: <ProtectedRoute authentication={false} component={<EmailLoginPage />} />,
      },
      {
        path: 'register',
        element: <ProtectedRoute authentication={false} component={<RegisterPage />} />,
      },
      { path: '*', element: <div>없는 페이지</div> },
    ],
  },
]);

export default router;
