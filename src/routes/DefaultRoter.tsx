import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';

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
        path: 'login',
        element: <ProtectedRoute authentication={false} component={<LoginPage />} />,
      },
      { path: '*', element: <div>없는 페이지</div> },
    ],
  },
]);

export default router;
