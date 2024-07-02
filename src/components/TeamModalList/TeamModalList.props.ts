import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IEmployeeShort } from '../../../interfaces';

export interface TeamModalListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    employeesData: IEmployeeShort[];
    closeHandler: () => void;
}