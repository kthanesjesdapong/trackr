import { TopNavBar } from '@/src/components/Navigation/TopNavBar';
import { SideNavBar } from '@/src/components/Navigation/SideNavBar';
import NavigationStyles from './Navigation.styles';
import { Outlet } from 'react-router-dom';


const Navigation = () => {
    return (
        <NavigationStyles>
            <SideNavBar />
            <TopNavBar />
            <Outlet />
        </NavigationStyles>
    );
};

export default Navigation;
