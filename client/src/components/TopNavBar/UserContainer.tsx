import { theme } from '@/src/theme';
import { FC } from 'react';
import UserContainerStyles from './UserContainer.styles';

interface IUserData {
    userId: string,

}



//dummyData for now
export const UserContainer: FC<IUserData> = ({ userId }) => {
    return (
        <UserContainerStyles color={theme.colors.black}>
            <h1 className="">{userId}</h1>
        </UserContainerStyles>
    );
};
