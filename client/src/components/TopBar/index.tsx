import { FC } from 'react';
import TopBarStyles from './TopBarStyles.styles';
import { UserContainer } from './MenuItemContainer/UserContainer';


//User Containing is currently rendering dummyData
export const TopBar: FC = () => {
    return (
        <TopBarStyles className='header'>
            <UserContainer userId='testing@gmail.com' />
        </TopBarStyles>
    );
};


