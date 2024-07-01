import { AvatarProps, AvatarAppearance } from './Avatar.props';
import styles from './Avatar.module.css';
import cn from 'classnames';
import Image from 'next/image';

export const Avatar = ({className, appearance, photoSrc}: AvatarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.avatar, {
            [styles.small]: appearance === AvatarAppearance.small,
            [styles.mid]: appearance === AvatarAppearance.mid,
            [styles.big]: appearance === AvatarAppearance.big,
        })}>
            <Image className={styles.photo} src={photoSrc} width={appearance} height={appearance} alt={''} /> 
        </div>
    );
} 