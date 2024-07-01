import { Button } from '@/components/atominc-components/Button/Button';
import { ButtonAppearance } from '@/components/atominc-components/Button/Button.props';

export default function Home() {
  return (
    <main>
        <Button appearance={ButtonAppearance.IconOnly}>BUTTON</Button>
    </main>
  );
}
