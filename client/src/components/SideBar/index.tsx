import { ReactComponent as Logo } from '@svg/bookmark.svg';
import { MenuItemContainer } from './MenuItemContainer/MenuItemContainer';
import SideBarStyles from './SideBarStyles.styles';
import { LogoContainer } from './LogoContainer/LogoContainer';



export const SideBar = ({ className }: { className?: string; }) => {
    return (
        <SideBarStyles as='aside' className={className} >
            <ul className='aside__list'>
                <LogoContainer />
                <MenuItemContainer icon={Logo} text='dashboard' path='/dashboard' />
                <MenuItemContainer icon={Logo} text='history' path='/history' />
                <MenuItemContainer icon={Logo} text='stats' path='/history' />
                <MenuItemContainer icon={Logo} text='bookmarks' path='/history' />
                <MenuItemContainer icon={Logo} text='settings' path='/history' />
            </ul>
        </SideBarStyles>

    );
};
