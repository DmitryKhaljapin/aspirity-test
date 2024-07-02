import { IEmployeeShort } from "./employee";

export interface IProject {
    title: string;
    type: string;
    responsibleEmployee: IEmployeeShort;
    team: IEmployeeShort[];
    startDate: Date;
    endDate: Date;
}