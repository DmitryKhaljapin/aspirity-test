import { TransparentButton, Arrow } from "../atomic-components";
import styles from './ReturnButtonLine.module.css';

export const ReturnButtonLine = (): JSX.Element => {
    return (
        <div className={styles.line}>
            <TransparentButton>
                <Arrow direction='left' />
                <span className={styles.title}>Вернуться к сотрудникам</span>
            </TransparentButton>
        </div>
    );
}