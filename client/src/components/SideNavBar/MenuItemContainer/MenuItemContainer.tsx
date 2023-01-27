import { FC } from 'react';
import { IconContainer } from './IconContainer';
import { TextContainer } from './TextContainer';
import { ReactComponent as Logo } from '@svg/bookmark.svg';

export const MenuItemContainer = () => {
    return (
        <div>
            MenuItemContainer
            hi
            <IconContainer />
            <TextContainer />
        </div>
    );
};
// This comp will be the container for both items and text