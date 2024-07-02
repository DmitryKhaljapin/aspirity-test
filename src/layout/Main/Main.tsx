import { MainProps } from './Main.props';
import styles from './Main.module.css';

export const Main = ({children}: MainProps): JSX.Element => {
    return (
        <main className={styles.main}>{children}</main>
    );
}