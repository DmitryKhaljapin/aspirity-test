import { InfoProps } from './Info.props';
import styles from './Info.module.css';
import cn from 'classnames';

export const Info = ({className, label, value}: InfoProps): JSX.Element => {
    return (
        <div className={cn(className, styles.container)}> 
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
        </div>
    );
}