import { ProfileCardProps } from './ProfileCard.props';
import { Card, Avatar, TransparentButton } from '../atomic-components';
import styles from './ProfileCard.module.css';

import { AvatarAppearance } from '../atomic-components/Avatar/Avatar.props';

export const ProfileCard = ({employeeData}: ProfileCardProps): JSX.Element => {
    return (
        <Card className={styles.card   }>
            <div className={styles.info}>
                <Avatar className={styles.avatar} appearance={AvatarAppearance.big} photoSrc={employeeData.photoSrc} />
                <p className={styles.surname}>{employeeData.surname}</p>
                <p className={styles.name}>{employeeData.name} {employeeData.patronymic}</p>
                <p className={styles.position}>{employeeData.position}</p>
                <p className={styles.location}>{employeeData.country}, {employeeData.city}</p>
            </div>
            <div className={styles.buttons}>
                <TransparentButton appearance='underlined' active={true}>Основная информация</TransparentButton>
                <TransparentButton appearance='underlined'>Отпуск</TransparentButton>
            </div>
        </Card>
    );
}