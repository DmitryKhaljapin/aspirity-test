import { IProject } from "../interfaces/project";
import { teamData } from './team_data';

export const projectData: IProject = {
    title: 'MedPoint 24',
    type: 'Коммерческий',
    responsibleEmployee: teamData[3],
    team: teamData,
    startDate: new Date('2023-03-03'),
    endDate: new Date('2023-03-23'),
}