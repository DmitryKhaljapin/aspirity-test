import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    children: ReactNode;
}