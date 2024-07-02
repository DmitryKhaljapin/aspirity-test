import { withLayout } from '@/layout/Layout/Layout';

import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import { PersonalInfo } from '@/components/PersonalInfo/PersonalInfo';
import { currentEmployeeData } from '../../dummy_data/current_employee_data';
import { TeamList } from '@/components/TeamList/TeamList';
import { teamData } from '@/../dummy_data/team_data';

function Home() {
  return (
    <>
      <ProfileCard employeeData={currentEmployeeData}/>
      <PersonalInfo employeeData={currentEmployeeData} />
      <TeamList employeesData={teamData}/>
    </>
  );
}


export default withLayout(Home);