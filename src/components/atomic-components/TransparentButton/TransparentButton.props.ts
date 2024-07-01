import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface TransparentButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance?: 'default' | 'underlined';
    active?: boolean;
    children: ReactNode;
}