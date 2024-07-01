import { CrossProps } from './Cross.props';
import styles from './Cross.module.css';
import cn from 'classnames';

export const Cross = ({className, ...props}: CrossProps): JSX.Element => {
    return (
        <div className={cn(className, styles.cross)}></div>
    );
}