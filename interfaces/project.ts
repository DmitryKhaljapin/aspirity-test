import { IEmployeeShort } from "./employee";

export interface IProjec {
    title: string;
    type: string;
    responsibleEmployee: string;
    team: IEmployeeShort[];
    startData: Date;
    endData: Date;
}