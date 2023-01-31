import { App } from '@src/App';
import { createBrowserRouter } from 'react-router-dom';
import Navigation from '@src/components/Navigation';
import History from '@src/pages/History/index';
import Dashboard from '@src/pages/Dashboard';


// Creater Browser Router supports Data APIS
const router = createBrowserRouter([
    // This will eventually be the landing page
    //Have users sign in through web-app authenicated by cognito
    //Cognito sends back info about users -> 
    {
        element: <Navigation />,
        path: '/',
        // Loaders are functions to provide data to the route element before it's rendered.
        // loader: () => {
        //     return { Navigation };
        // },
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/history',
                element: <History />
            },
        ]
    }
]);


export default router;
