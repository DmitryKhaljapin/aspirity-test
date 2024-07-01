import { TransparentButtonProps } from './TransparentButton.props';
import styles from './TransparentButton.module.css';
import cn from 'classnames';

export const TransparentButton = ({className, children, appearance = 'default', active = false, ...props}: TransparentButtonProps): JSX.Element => {
    return (
        <button className={cn(className, styles.button, {
            [styles.active]: appearance === 'underlined' && active,
            [styles.passive]: appearance === 'underlined' && !active
        })}>{children}</button>
    );
}
