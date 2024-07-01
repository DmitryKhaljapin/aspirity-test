import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import cn from 'classnames';

export const Htag = ({className, tag, children}: HtagProps): JSX.Element => {
    switch (tag) {
        case 'h4': {
            return (
                <h4 className={cn(className, styles.h4)}>{children}</h4>
        );
        }
        case 'h5': {
            return (
                <h5 className={cn(className, styles.h5)}>{children}</h5>
            ); 
        }
        default: {
            return <></>;
        }
    }
}