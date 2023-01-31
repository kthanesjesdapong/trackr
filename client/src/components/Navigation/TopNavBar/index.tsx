import { FC } from 'react';
import TopNavBarStyles from './TopNavBar.styles';
import { UserContainer } from './MenuItemContainer/UserContainer';
import { LogoContainer } from './MenuItemContainer/LogoContainer';


//User Containing is currently rendering dummyData
export const TopNavBar: FC = () => {
    return (
        <TopNavBarStyles>
            <LogoContainer />
            <UserContainer userId='testing@gmail.com' />
        </TopNavBarStyles>
    );
};


