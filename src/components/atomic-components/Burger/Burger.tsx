import { useState } from 'react';
import { BurgerProps } from './Burger.props';
import styles from './Burger.module.css';
import cn from 'classnames';

export const Burger = ({className, ...props}: BurgerProps): JSX.Element => {

    const [opened, setOpened] = useState<boolean>(false);

    return (
        <div className={cn(className, styles.burger)} onClick={() => setOpened(prevState => !prevState)}>
            <div className={cn({
                [styles.closed]: !opened,
                [styles.opened]: opened
            })}></div>
        </div>
    );
}