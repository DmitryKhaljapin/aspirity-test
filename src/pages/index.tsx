import { withLayout } from '@/layout/Layout/Layout';
import { EmployeeProfile } from '@/components';

function Home() {
  return (
    <>
      <EmployeeProfile/>
    </>
  );
}


export default withLayout(Home);