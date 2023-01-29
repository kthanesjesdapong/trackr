import FC from 'react';
import TextContainerStyles from './TextContainer.styles';

export const TextContainer = ({ text }: { text: string; }) => {
    return (
        <TextContainerStyles>
            <p>{text}</p>
        </TextContainerStyles>
    );
};