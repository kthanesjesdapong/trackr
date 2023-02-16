import { ReactElement } from 'react';
import TopBarStyles from './TopBarStyles.styles';
import { UserContainer } from './MenuItemContainer/UserContainer';


//User Containing is currently rendering dummyData
export const TopBar = ({ className }: { className?: string; }): ReactElement => {
    return (
        <TopBarStyles as='header' className={className}>
            <UserContainer userId='testing@gmail.com' />
        </TopBarStyles>
    );
};


