import { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum AvatarAppearance {
    small = 24,
    mid = 48,
    big = 160,
}

export interface AvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    appearance: AvatarAppearance;
    photoSrc: string; 
}