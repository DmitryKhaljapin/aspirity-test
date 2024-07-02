import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IEmployeeExtended } from '../../../interfaces';

export interface PersonalInfoEditerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    employee: IEmployeeExtended;
    closeHandler: () => void;
}