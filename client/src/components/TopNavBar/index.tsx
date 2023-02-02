import { FC } from 'react';
import TopNavBarStyles from './TopNavBar.styles';
import { UserContainer } from './MenuItemContainer/UserContainer';


//User Containing is currently rendering dummyData
export const TopNavBar: FC = () => {
    return (
        <TopNavBarStyles className='header'>
            <UserContainer userId='testing@gmail.com' />
        </TopNavBarStyles>
    );
};


