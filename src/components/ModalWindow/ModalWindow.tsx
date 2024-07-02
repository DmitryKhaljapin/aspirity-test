import { createPortal } from 'react-dom'
import { ModalWindowProps } from './ModalWindow.props';
import { Card } from '../atomic-components';

import stlyes from './ModalWindow.module.css';

export const ModalWindow = ({children,}:ModalWindowProps) => {
    const modal = document.getElementById('modal')

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
