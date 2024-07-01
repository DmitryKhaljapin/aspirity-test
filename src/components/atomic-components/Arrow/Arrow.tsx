import { ArrowProps } from './Arrow.props';
import styles from './Arrow.module.css';
import cn from 'classnames';

export const Arrow = ({className, direction}: ArrowProps): JSX.Element => {
    return (
        <div className={cn(className, {
            [styles.down]: direction === 'down',
            [styles.left]: direction === 'left'
        })}></div>
    );
}