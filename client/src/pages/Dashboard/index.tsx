import { FC } from 'react';
import { DashboardStyles } from './Dashboard.styles';
import { Card } from '@src/components/Cards/index';
import { vp } from '@src/utils/viewport';
import { media } from '@src/utils/media';

export const Dashboard: FC = () => {
    console.log(vp);

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


/*
obj = {
    mobile: '40em',
    tablet: '60em',
    laptop: '80em'
    
}

*/