import { FC } from 'react';
import { DashboardStyles } from './Dashboard.styles';
import { Card } from '@src/components/Cards/index';

export const Dashboard: FC = () => {
    return (
        <DashboardStyles>
            <h1>
                HELLO FROM DASH BOARD
            </h1>
            <Card />
        </DashboardStyles>

    );
};
export default Dashboard;
