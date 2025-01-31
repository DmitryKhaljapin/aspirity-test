import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ArrowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    direction: 'down' | 'left';
}