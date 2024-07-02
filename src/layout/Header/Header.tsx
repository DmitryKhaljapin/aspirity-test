import { HeaderProps } from './Header.props';
import { Logo } from '@/components/Logo/Logo';
import { UserTab } from '@/components/UserTab/UserTab';
import { Burger } from '@/components/atomic-components/Burger/Burger';
import styles from './Header.module.css';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
    return (
        <header className={styles.header} {...props}>
            <Logo className={styles.logo} />
            <UserTab  className={styles.tab} />
            <Burger className={styles.burger} />
        </header>
    );
}