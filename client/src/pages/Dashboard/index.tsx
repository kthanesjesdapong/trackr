import { FC } from 'react';
import { TopNavBar } from '@/src/components/TopNavBar/TopNavBar';
import { DashboardStyles } from './Dashboard.styles';
import { SideNavBar } from '@/src/components/SideNavBar';

export const Dashboard: FC = () => {

    return (
        <DashboardStyles>
            <TopNavBar />
            <SideNavBar />
        </DashboardStyles>

    );
};


export default Dashboard;