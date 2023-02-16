import { FC } from 'react';
import { DashboardStyles } from './Dashboard.styles';
import { Overview } from '@src/components/Overview/index';
import { Card } from '@/src/components/Card';

export const Dashboard: FC = () => {
    return (
        <DashboardStyles className='dashboard'>
            <Overview />
            <Card />
            <div className="footer">
                footer stuff coming from dashboard component
            </div>
        </DashboardStyles>
    );
};
export default Dashboard;
