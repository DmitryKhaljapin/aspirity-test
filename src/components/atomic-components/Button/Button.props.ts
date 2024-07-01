import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export enum ButtonAppearance  {
    default = 'DEFAULT',
    withRightIcon = 'WITHRIGHTICON',
    withLeftIcon = 'WITHLEFTICON',
    IconOnly = 'ICONONLY'
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance?: ButtonAppearance,
    children?: string;
}