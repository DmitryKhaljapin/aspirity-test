import { IEmployeeExtended } from '@/../interfaces';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PersonalInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    employeeData: IEmployeeExtended;
}