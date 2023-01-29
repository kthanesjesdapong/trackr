
import { ReactComponent as Bookmark } from '@svg/bookmark.svg';
import IconContainerStyles from './IconContainer.styles';

//ReactNode is Icon
export const IconContainer = ({ ReactNode }: { ReactNode: typeof Bookmark; }) => {
    return (
        <IconContainerStyles>
            <ReactNode className='icon' />
        </IconContainerStyles>
    );
    ;
};