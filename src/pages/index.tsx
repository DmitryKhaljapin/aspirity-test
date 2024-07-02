import { withLayout } from '@/layout/Layout/Layout';
import { ReturnButtonLine, EmployeeProfile } from '@/components';

function Home() {
  return (
    <>
      <ReturnButtonLine />
      <EmployeeProfile/>
    </>
  );
}


export default withLayout(Home);