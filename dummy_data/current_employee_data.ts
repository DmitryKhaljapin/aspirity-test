import { IEmployeeExtended } from "../interfaces";

export const currentEmployeeData: IEmployeeExtended = {
    surname: 'Иванов',
    name: 'Иван',
    partonymic: 'Иванович',
    position: 'UI/UX designer',
    country: 'Россия',
    city: 'Красноярск',
    birthDate: new Date('2014-01-06'),
    employmentDate: new Date('2020-05-15'),
    email: 'test@gmail.com',
    photoSrc: '/img/main-ava.png',
}