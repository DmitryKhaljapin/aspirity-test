import { ProfileCard, PersonalInfo, ProjectInfo } from '../';
import { currentEmployeeData, projectData } from '@/../dummy_data';
import styles from './EmployeeProfile.module.css';

export const EmployeeProfile = (): JSX.Element => {
    return (
        <div className={styles.profile}>
            <ProfileCard className={styles['profile-card']} employeeData={currentEmployeeData} />
            <PersonalInfo employeeData={currentEmployeeData} />
            <ProjectInfo projectData={projectData} />
        </div>
    );
}