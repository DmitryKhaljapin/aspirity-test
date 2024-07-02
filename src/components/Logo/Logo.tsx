import { LogoProps } from './Logo.props';
import Image from 'next/image';

export const Logo = ({className, ...prop}: LogoProps): JSX.Element => {
    return (
        <Image className={className} src='/img/logo.svg' width={180} height={40} alt="Aspitity" />
    );
}