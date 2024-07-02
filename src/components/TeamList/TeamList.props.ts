import { IEmployeeShort } from '@/../interfaces'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TeamListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    employeesData: IEmployeeShort[];
}