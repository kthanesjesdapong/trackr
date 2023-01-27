import { FC } from 'react';
import { ReactComponent as Logo } from '@svg/bookmark.svg';
import { MenuItemContainer } from './MenuItemContainer/MenuItemContainer';
import SideNavStyles from './SideNav.styles';
export const SideNavBar: FC = () => {
    return (
        <div>
            <MenuItemContainer />
        </div>
    );
};
