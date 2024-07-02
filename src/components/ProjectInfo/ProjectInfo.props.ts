import { IProject } from '@/../interfaces';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProjectInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    projectData: IProject;
}