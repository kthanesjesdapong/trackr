import CardStyles from "./Card.styled";
import { FC } from 'react';

export const Card: FC = () => {
    return (
        <CardStyles className='main__card'>
            <div className="card">Card</div>
            <div className="card">Card2</div>
            <div className="card">Card3</div>
        </CardStyles>
    );
};
