import OverviewStyles from './Overview.styles';
import { OvCard } from './OvCards/OvCards';
import { FC } from 'react';


//layout for main content overview and its cards
export const Overview: FC = () => {
    return (
        <OverviewStyles className='main__overview'>
            <OvCard
                subHeader="01.30.2023 - 02.05.2023"
                header='This Week'
                amount={20}
                percentage={22}
            />
            <OvCard
                subHeader="<from created at>"
                header='Total'
                amount={9000}
                percentage={22}
            />
            <OvCard
                subHeader="<today's date>"
                header='Today'
                amount={5}
            // percentage={22}
            />
            <OvCard
                subHeader="<success rate in percentages>"
                header='AC'
                amount={65}
                percentage={22}
            />
        </OverviewStyles>
    );
};