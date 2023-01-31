import TextContainerStyles from './TextContainer.styles';
import { Link } from 'react-router-dom';

export const TextContainer = ({ text, path }: { text: string, path: string; }) => {
    return (
        <TextContainerStyles>
            <li>
                <Link to={path}>
                    {text}
                </Link>
            </li>
        </TextContainerStyles>
    );
};