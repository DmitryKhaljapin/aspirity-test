import { withLayout } from '@/layout/Layout/Layout';

import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import { PersonalInfo } from '@/components/PersonalInfo/PersonalInfo';
import { currentEmployeeData } from '../../dummy_data/current_employee_data';
import { ProjectInfo } from '@/components';
import { projectData } from '../../dummy_data/project_data';


function Home() {
  return (
    <>
      <ProfileCard employeeData={currentEmployeeData}/>
      <PersonalInfo employeeData={currentEmployeeData} />
      <ProjectInfo projectData={projectData}/>
    </>
  );
}


export default withLayout(Home);