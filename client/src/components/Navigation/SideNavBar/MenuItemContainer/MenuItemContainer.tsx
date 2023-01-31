import { IconContainer } from './IconContainer';
import { TextContainer } from './TextContainer';
import MenuItemStyles from './MenuItem.styles';
import { ReactComponent as Logo } from '@svg/bookmark.svg';


export const MenuItemContainer = ({ icon, text, path }: { icon: typeof Logo, text: string, path: string; }) => {

    return (
        <MenuItemStyles>
            <IconContainer ReactNode={icon} />
            <TextContainer text={text} path={path} />
        </MenuItemStyles>
    );
};
