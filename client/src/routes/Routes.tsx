import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '@src/pages/Dashboard';
import History from '@src/pages/History/index';
import App from '@src/App';



// Creater Browser Router supports Data APIS
// Where is this being called? main.tsx
//createrBrowserRouter is wrapping around our App
const routes = [
    // Root Layout will reflect only the layout when the user is logged in
    // When the user logs in it sends a req to cognito,
    // use the res to identity the logged in users
    {
        element: <App />,
        path: '/',
        // Loaders are functions to provide data to the route element before it's rendered.
        // loader: () => {
        //     return { Navigation };
        // },
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/history',
                element: <History />
            }
        ]
    },

];


//Prefix your routes with the basename
const routerOpts = {
    basename: '/loggedin'
};

const router = createBrowserRouter(routes, routerOpts);





export default router;
