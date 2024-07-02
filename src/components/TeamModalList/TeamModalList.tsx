import { TeamModalListProps } from './TeamModalList.props';
import { ModalWindow } from '../'
import { Avatar, Cross, Htag } from '../atomic-components';
import styles from './TeamModalList.module.css';
import { AvatarAppearance } from '../atomic-components/Avatar/Avatar.props';

export const TeamModalList = ({employeesData, closeHandler}: TeamModalListProps): JSX.Element => {
   return (
    <ModalWindow>
        <div className={styles.header}>
            <Htag tag='h4'>Команда</Htag>
            <Cross onClick={closeHandler} />
        </div>
        <ul className={styles.list}>
            {employeesData.map(employee => <li key={employee.surname + employee.name} className={styles.item}>
                <Avatar className={styles.avatar} appearance={AvatarAppearance.mid} photoSrc={employee.photoSrc} />
                <span className={styles.name}>{employee.name} {employee.surname}</span>
                <span className={styles.position}>{employee.position}</span>
            </li>)}
        </ul>
    </ModalWindow>
   );
}