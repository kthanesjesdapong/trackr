import CardStyles from "./Card.styled";
import { FC } from 'react';
import { RecentTable } from "./RecentTable/RecentTable";

export const Card: FC = () => {
    return (
        <CardStyles className='main__card'>
            <RecentTable />
            {/* <div className="card">Card</div> */}
            <div className="card">
                <RecentTable />
            </div>
            <div className="card">Card3</div>
        </CardStyles>
    );
};
