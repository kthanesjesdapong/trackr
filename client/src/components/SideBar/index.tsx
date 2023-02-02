import { FC } from 'react';
import { ReactComponent as Logo } from '@svg/bookmark.svg';
import { MenuItemContainer } from './MenuItemContainer/MenuItemContainer';
import SideBarStyles from './SideBarStyles.styles';
import { LogoContainer } from './LogoContainer/LogoContainer';

export const SideBar: FC = () => {
    return (
        <SideBarStyles className='aside'>
            <LogoContainer />
            <div className='list__container'>
                <MenuItemContainer icon={Logo} text='dashboard' path='/dashboard' />
                <MenuItemContainer icon={Logo} text='history' path='/history' />
                <MenuItemContainer icon={Logo} text='stats' path='/history' />
                <MenuItemContainer icon={Logo} text='bookmarks' path='/history' />
                <MenuItemContainer icon={Logo} text='settings' path='/history' />
            </div>
        </SideBarStyles>

    );
};
