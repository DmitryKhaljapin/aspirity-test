import { SubmitHandler, useForm } from 'react-hook-form';
import { PersonalInfoEditerProps } from './PersonalInfoEidter.props';
import { Input, Cross, Htag, Button } from '../atomic-components';
import { IEmployeeExtended } from '../../../interfaces';
import { ModalWindow } from '../';
import styles from './PersonalInfoEditer.module.css';

export const PersonalInfoEidter = ({employee, closeHandler}: PersonalInfoEditerProps) => {
    const { register, handleSubmit, formState } = useForm<Record<string, string>>({
        mode: 'onChange',
        defaultValues: {
           'name': employee.name,
           'surname': employee.surname,
           'patronymic': employee.patronymic,
           'birthDate': employee.birthDate.toISOString().split('T')[0],
           'employmentDate': employee.employmentDate.toISOString().split('T')[0],
           'country': employee.country,
           'city': employee.city,
           'position': employee.position,
           'email': employee.email 
        }
    });

    const onSubmit:SubmitHandler<Record<string, string>> = (data) => {

        Object.keys(employee).forEach((key: string) => {
            //@ts-ignore
            employee[key] = data[key];
        });
        closeHandler();
    }

    return (
        <ModalWindow>
            <div className={styles.header}>
                <Htag tag='h4'>Персональная информация</Htag>
                <Cross onClick={closeHandler} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.info}>
                <Input label='Имя' validation={formState.errors['name'] ? 'error' : 'success'}>
                    <input className={styles.input} {...register('name', {
                        minLength: 2
                }   )} />
                </Input>
                <Input label='Фамилия' validation={formState.errors['surname'] ? 'error' : 'success'}>
                    <input className={styles.input} {...register('surname', {
                        minLength: 2
                    })} />
                </Input>
                <Input className={styles.patronymic} label='Отчество'>
                    <input className={styles.input} {...register('patronymic')} />
                </Input>
                <Input label='Дата рождения'><input className={styles.input} type='date' {...register('birthDate', {
                    valueAsDate: true
                })} /></Input>
                <Input label='Дата трудоустройства'><input className={styles.input} type='date' {...register('employmentDate', {
                    valueAsDate: true
                })} /></Input>
                <Input label='Страна' validation={formState.errors['country'] ? 'error' : 'success'}>
                <input className={styles.input} {...register('country', {
                    minLength: 2
                })} />
                </Input>
                <Input label='Город' validation={formState.errors['city'] ? 'error' : 'success'}>
                    <input className={styles.input} {...register('city', {
                        minLength: 2
                    })} />
                </Input>
                <Input label='Должность' validation={formState.errors['position'] ? 'error' : 'success'}>
                    <input className={styles.input} {...register('position', {
                        minLength: 3
                    })}/>
                </Input>
                <Input label='Электронная почта' validation={formState.errors['email'] ? 'error' : 'success'}>
                    <input className={styles.input} {...register('email', {
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: ''
                    }
                })} /></Input>

                <Button className={styles.button} type='submit'>СОХРАНИТЬ</Button>
            </form>
        </ModalWindow>
    );
}