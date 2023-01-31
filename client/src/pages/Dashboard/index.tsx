import { FC } from 'react';
import { DashboardStyles } from './Dashboard.styles';
import { Card } from '@src/components/Cards/index';
import { vp } from '@src/utils/viewport';
import { media } from '@src/utils/media';


export const Dashboard: FC = () => {
    // console.log(vp({
    //     mobile: '@media (min-width: 640px) {background-color: black;}',
    // }
    // ));

    const vpObj = vp({
        mobile: media.min('mobile'),
        tablet: media.min('tablet'),
        laptop: media.min('laptop'),
        desktop: media.min('desktop')
    });

    const tablet = vpObj[2];

    console.log(vpObj);
    // console.log(media.min('mobile'));
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

*/