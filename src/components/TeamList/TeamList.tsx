'use client'
import { useState, useEffect, useRef } from 'react';
import { TeamListProps } from './TeamList.props';
import { Avatar } from '../atomic-components';
import { AvatarAppearance } from '../atomic-components/Avatar/Avatar.props';
import { TeamModalList } from '../TeamModalList/TeamModalList'; 
import styles from './TeamList.module.css';
import cn from 'classnames';

export const TeamList = ({className, employeesData}: TeamListProps): JSX.Element => {
    const [isModalTeamListOpened, setModalTeamListOpened] = useState<boolean>(false);
    const [windowWindth, setWindowWidth] = useState(0);
    const [employeesCountLength, setEmployeesCountLenght ] = useState(7);

    const list = useRef<HTMLUListElement>(null);

    useEffect(() => {
        function resizeHandler() {
            setWindowWidth(window.innerWidth);
        }

        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', resizeHandler);

        const listWidth = list.current?.clientWidth;

        if (!listWidth) return;

        if (listWidth < 265 && listWidth > 235) {
            setEmployeesCountLenght(6);
        }
        else if (listWidth < 235 && listWidth > 195) {
            setEmployeesCountLenght(5);
        }
        else if (listWidth < 195) {
            setEmployeesCountLenght(4);
        }
        else {
            setEmployeesCountLenght(7);
        }

        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, [windowWindth]); 

    return (
        <>
            <ul ref={list} className={cn(className, styles.list)}>
                {employeesData.slice(0, employeesCountLength).map(employee => <li key={employee.surname + employee.name}>
                    <Avatar className={styles.avatar} appearance={AvatarAppearance.mid} photoSrc={employee.photoSrc} />
                </li>)}
                {(employeesData.length > employeesCountLength) && <span className={styles.rest} onClick={() => setModalTeamListOpened(true)}>+{employeesData.length - employeesCountLength}</span>}
            </ul>
            {isModalTeamListOpened && <TeamModalList employeesData={employeesData} closeHandler={() => setModalTeamListOpened(false)} />}
        </>
    );
}