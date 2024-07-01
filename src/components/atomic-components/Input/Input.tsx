import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({label, value, validation, disabled = false, placeHolder = '', className, ...props}: InputProps): JSX.Element => {
    return (
        <label className={cn(className, styles.label, {
            [styles.error]: validation === 'error',
            [styles.success]: validation === 'success'
        })}>
            <span className={styles.title}>{label}</span>
            <input className={styles.input} value={value} placeholder={placeHolder} disabled={disabled} />
        </label>
    );
}