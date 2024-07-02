import { ProjectInfoProps } from './ProjectInfo.props';
import { Card, Htag, LoadingIndicator, Button, Avatar } from '../atomic-components';
import { TeamList } from '../';
import { AvatarAppearance } from '../atomic-components/Avatar/Avatar.props';
import styles from './ProjectInfo.module.css';
import Image from 'next/image';
import cn from 'classnames'

export const ProjectInfo = ({projectData}: ProjectInfoProps): JSX.Element => {

    const dateFormater = new Intl.DateTimeFormat('ru');

    return (
        <Card className={styles.card}>
            <div className={styles.header}>
                <Htag tag='h5'>Загрузка сотрудника</Htag>
                <LoadingIndicator dataSize={100} downloadedDataSize={100} />
            </div>
            <dl className={styles.info}>
                <div>
                    <dt className={styles.label}>Название проекта</dt>
                    <dd className={styles.value}>{projectData.title}</dd>
                </div>
                <div>
                    <dt className={styles.label}>Тип проекта</dt>
                    <dd className={styles.value}>{projectData.type}</dd>
                </div>
                <div>
                    <dt className={styles.label}>Ответственный</dt>
                    <dd className={cn(styles.value, styles.responsible)}>
                        <Avatar className='mr-2' appearance={AvatarAppearance.mid} photoSrc={projectData.responsibleEmployee.photoSrc} />
                        <span>{projectData.responsibleEmployee.name} {projectData.responsibleEmployee.surname}</span>
                    </dd>
                </div>
                <div>
                    <dt className={styles.label}>Команда</dt>
                    <dd className={styles.value}>
                        <TeamList employeesData={projectData.team}/>
                    </dd>
                </div>
                <div className={styles.date}>
                    <dt className={styles.label}>Сроки работы</dt>
                    <dd className={cn(styles.value, styles['date-value'])}>
                        <span className='mr-2'>{dateFormater.format(projectData.startDate)}</span>
                        <Image className='mr-2' src='/img/icons/arrow-right.svg' width={18} height={14} alt='->' />
                        <span>{dateFormater.format(projectData.endDate)}</span>
                    </dd>
                </div>
            </dl>
            <Button>Посмотреть всю загрузку</Button>
        </Card>
    );
}