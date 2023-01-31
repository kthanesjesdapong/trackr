import { FC } from 'react';
import { ReactComponent as Logo } from '@svg/bookmark.svg';
import { MenuItemContainer } from './MenuItemContainer/MenuItemContainer';
import SideNavStyles from './SideNav.styles';

export const SideNavBar: FC = () => {
    return (
        <SideNavStyles>
            <MenuItemContainer icon={Logo} text='dashboard' path='/dashboard' />
            <MenuItemContainer icon={Logo} text='history' path='/history' />
            <MenuItemContainer icon={Logo} text='history' path='/history' />
            <MenuItemContainer icon={Logo} text='history' path='/history' />
            {/* <MenuItemContainer icon={Logo} text='stats' />
            <MenuItemContainer icon={Logo} text='bookmarks' /> */}
        </SideNavStyles>
    );
};
