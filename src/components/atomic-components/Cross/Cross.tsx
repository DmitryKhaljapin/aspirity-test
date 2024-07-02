import { CrossProps } from './Cross.props';
import styles from './Cross.module.css';
import Image from 'next/image';
import cn from 'classnames';

export const Cross = ({className, ...props}: CrossProps): JSX.Element => {
    return (
        <div className={cn(className, styles.cross)}>
            <Image src='/img/icons/cross.svg' width={14} height={14} alt='close' />
        </div>
    );
}