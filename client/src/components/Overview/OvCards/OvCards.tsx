import OvCardStyles from './OvCard.styles';
import { ReactComponent as Calendar } from '@svg/calendar-2.svg';

interface IOvCards {
    subHeader?: string;
    header: string;
    amount: number;
    percentage?: number;
}

export const OvCard = ({ subHeader, header, amount, percentage }: IOvCards) => {
    return (
        <OvCardStyles className='overview__cards'>
            <div className='subHeader__container'>
                <Calendar />
                <h4>{subHeader}</h4>
            </div>
            <div className='header__container'>
                <h2>{header}</h2>
            </div>
            <div
                className='amount__percentage__container'>
                <div className='amount__container'>
                    <h3>{amount} </h3>
                    <br />
                    <p>&nbsp;+</p>
                    <h4>{percentage}%</h4>
                </div>
                <div className='percentage__container'>

                </div>
            </div>
        </OvCardStyles>
    );
};
