import { useEffect } from 'react';
import { createPortal } from 'react-dom'
import { ModalWindowProps } from './ModalWindow.props';
import { Card } from '../atomic-components';

import stlyes from './ModalWindow.module.css';

export const ModalWindow = ({children,}:ModalWindowProps) => {
    const modal = document.getElementById('modal');

    useEffect(() => {
        if (!modal) return;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        return () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'
        };
    }) 

    return (
        <>
            {modal &&  createPortal(
                <div className={stlyes.modal} > 
                    <Card className={stlyes.content} >
                        {children}
                    </Card>
                </div>,
                modal
            )}
        </>
    );
}
