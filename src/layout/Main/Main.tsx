import { MainProps } from './Main.props';
import styles from './Mian.module.css';

export const Main = ({children}: MainProps): JSX.Element => {
    return (
        <main className={styles.mian}>{children}</main>
    );
}