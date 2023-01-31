import TextContainerStyles from './TextContainer.styles';
import { Link } from 'react-router-dom';

//Link is providing functionality to route to different pages
export const TextContainer = ({ text, path }: { text: string, path: string; }) => {
    return (
        <TextContainerStyles>
            <a>
                <Link to={path}>
                    {text}
                </Link>
            </a>
        </TextContainerStyles>
    );
};