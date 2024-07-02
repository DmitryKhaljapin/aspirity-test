import { IEmployee } from '@/../interfaces';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProfileCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    employeeData: IEmployee;
}