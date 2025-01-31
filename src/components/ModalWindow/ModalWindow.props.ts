import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ModalWindowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}