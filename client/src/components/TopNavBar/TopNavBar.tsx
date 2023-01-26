import { FC } from 'react';
import TopNavBarStyles from './TopNavBar.styles';
import { UserContainer } from './UserContainer';
import { LogoContainer } from './LogoContainer';

//dummyData

export const TopNavBar: FC = () => {
    return (
        <TopNavBarStyles>
            <LogoContainer />
            <UserContainer userId='Kavin T' />
        </TopNavBarStyles>
    );
};


