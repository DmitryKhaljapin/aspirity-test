import { TeamListProps } from './TeamList.props';
import { Avatar } from '../atomic-components';
import { AvatarAppearance } from '../atomic-components/Avatar/Avatar.props'; 
import styles from './TeamList.module.css';
import cn from 'classnames';

export const TeamList = ({className, employeesData}: TeamListProps): JSX.Element => {
    return (
        <ul className={cn(className, styles.list)}>
            {employeesData.slice(0, 7).map(employee => <li key={employee.surname + employee.name}>
                <Avatar className={styles.avatar} appearance={AvatarAppearance.mid} photoSrc={employee.photoSrc} />
            </li>)}
            {(employeesData.length > 7) && <span className={styles.rest}>+{employeesData.length - 7}</span>}
        </ul>
    );
}