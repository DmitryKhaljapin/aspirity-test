import { ArrowProps } from './Arrow.props';
import styles from './Arrow.module.css';
import Image from 'next/image';
import cn from 'classnames';

export const Arrow = ({className, direction}: ArrowProps): JSX.Element => {
    return (
        <div className={cn(className, styles.arrow)}>
            {direction === 'down' && <Image src='/img/icons/arrow-down.svg' width={14} height={8} alt='' />}
            {direction === 'left' && <Image src='/img/icons/arrow-left.svg' width={8} height={14} alt='<' />}
        </div>
    );
}