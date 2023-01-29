import React, { FC, SVGProps, ReactSVGElement } from 'react';
import { IconContainer } from './IconContainer';
import { TextContainer } from './TextContainer';
import MenuItemStyles from './MenuItem.styles';
import { ReactComponent as Logo } from '@svg/bookmark.svg';




export const MenuItemContainer = ({ icon, text }: { icon: typeof Logo, text: string; }) => {

    return (
        <MenuItemStyles>
            <IconContainer ReactNode={icon} />
            <TextContainer text={text} />
        </MenuItemStyles>
    );
};
