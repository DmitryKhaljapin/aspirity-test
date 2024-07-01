import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    tag: 'h4' | 'h5' ;
    children: ReactNode; 
}