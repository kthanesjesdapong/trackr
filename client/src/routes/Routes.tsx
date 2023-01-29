import { FC } from 'react';
import { History } from '@src/pages/History/index';
import { App } from '@src/App';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'History',
                element: <History />
            }
        ]
    }
]);

export default router;
