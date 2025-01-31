import { ReactNode, DetailedHTMLProps, LabelHTMLAttributes } from 'react';

export interface InputProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    validation?: 'success' | 'error';
    label: string;
    children: ReactNode
}