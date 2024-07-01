import { useState } from 'react'
import { AvatarProps, AvatarAppearance } from './Avatar.props';
import styles from './Avatar.module.css';
import cn from 'classnames';
import Image from 'next/image';

export const Avatar = ({className, appearance, photoSrc}: AvatarProps): JSX.Element => {

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div 
            className={cn(className, styles.avatar, {
                [styles.small]: appearance === AvatarAppearance.small,
                [styles.mid]: appearance === AvatarAppearance.mid,
                [styles.big]: appearance === AvatarAppearance.big,
            })}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && appearance !== AvatarAppearance.small &&
                <div className={styles.blur}>
                    <Image src='/img/icons/photo.png' width={24} height={24} alt='' />
                </div>
            }
            <Image className={styles.photo} src={photoSrc} width={appearance} height={appearance} alt={''} /> 
        </div>
    );
} 