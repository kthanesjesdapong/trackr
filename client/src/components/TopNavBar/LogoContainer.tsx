import { FC } from 'react';
import LogoContainerStyles from './LogoContainer.styles';

export const LogoContainer: FC = () => {
    return (
        <LogoContainerStyles>
            <h1 className="logo__text">Trackr</h1>
        </LogoContainerStyles>
    );
};