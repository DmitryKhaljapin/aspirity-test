import { PersonalInfoProps } from './PersonalInfo.props';
import { Htag, Info, Card } from '../atomic-components';
import styles from './PersonalInfo.module.css';

export const PersonalInfo = ({ employeeData }: PersonalInfoProps): JSX.Element => {

    const dateFormater = new Intl.DateTimeFormat('ru');

    return (
        <Card className={styles.card}>
            <div className={styles.header}>
                <Htag tag='h5'>Персональная информация</Htag>
                <button className={styles['edit-button']}>Изменить</button>
            </div>
            <div className={styles.info}>
                <Info label='Имя' value={employeeData.name} />
                <Info label='Фамилия' value={employeeData.surname} />
                <Info className={styles.patronymic} label='Отчество' value={employeeData.patronymic} />
                <Info label='Дата рождения' value={dateFormater.format(employeeData.birthDate)} />
                <Info label='Дата трудоустройства' value={dateFormater.format(employeeData.employmentDate)} />
                <Info label='Страна' value={employeeData.country} />
                <Info label='Город' value={employeeData.city} />
                <Info label='Должность' value={employeeData.position} />
                <Info label='Электронная почта' value={employeeData.email} />
            </div>
        </Card>
    );
}