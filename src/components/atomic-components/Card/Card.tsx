import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ children, className }: CardProps): JSX.Element => {
    return (
        <div className={cn(className, styles.card)}>
            {children}
        </div>
    );
}