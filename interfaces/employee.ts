export interface IEmployeeShort {
    name: string;
    surname: string;
    position: string;
    photoSrc: string;
}

export interface IEmployee extends IEmployeeShort {
    patronymic: string;
    country: string;
    city: string 
};

export interface IEmployeeExtended extends IEmployee {
    birthDate: Date;
    employmentDate: Date;
    email: string; 
}