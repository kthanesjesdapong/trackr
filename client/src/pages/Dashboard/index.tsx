import { FC } from 'react';
import { TopNavBar } from '@/src/components/TopNavBar/TopNavBar';
import { DashboardStyles } from './Dashboard.styles';

export const Dashboard: FC = () => {

    return (
        <DashboardStyles>
            <TopNavBar />
        </DashboardStyles>

    );
};


export default Dashboard;