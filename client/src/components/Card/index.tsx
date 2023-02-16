import CardStyles from "./Card.styled";
import { FC } from 'react';
import { RecentTable } from "./RecentTable/RecentTable";
import { JsxElement } from "typescript";

export const Card: FC = () => {
    return (
        <CardStyles className='main__card'>
            <RecentTable />
            {/* <div className="card">Card</div> */}
            <div className="card">Card2</div>
            <div className="card">Card3</div>
        </CardStyles>
    );
};
