import { UserTabProps } from './UserTab.props';
import { Avatar, Arrow } from '../atomic-components';
import { AvatarAppearance } from '../atomic-components/Avatar/Avatar.props';
import styles from './UserTab.module.css';
import cn from 'classnames' 

export const UserTab = ({className, ...props}: UserTabProps): JSX.Element => {
    return (
        <div className={cn(className, styles.tab)}>
            <Avatar appearance={AvatarAppearance.small} photoSrc='/img/main-ava.png' />
            <Arrow direction='down' />
        </div>
    );
} 