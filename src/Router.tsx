import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './page/Login/Login';
import AuthProvider from './utils/AuthContext';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider><App /></AuthProvider>,
        children: [

        ]
    }, {
        path: '/login',
        element: <Login />
    }
]) 