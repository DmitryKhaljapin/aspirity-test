import { ButtonProps, ButtonAppearance } from './Button.props';
import styles  from './Button.module.css';
import cn from 'classnames';
import Image from 'next/image'; 

export const Button = ({appearance = ButtonAppearance.default, children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button 
            className= {cn(className, styles.button, {
                [styles['icon-only']]: appearance === ButtonAppearance.IconOnly
            })}
            {...props}
        >   {(appearance === ButtonAppearance.withLeftIcon) && <Image className={'inline-block mr-2'} src={'/img/icons/plus.svg'} width={16} height={16} alt='' />}
            {children && (appearance !== ButtonAppearance.IconOnly) && children}
            {appearance === ButtonAppearance.IconOnly && <Image className={'inline-block'} src={'/img/icons/plus.svg'} width={16} height={16} alt='' />}
            {(appearance === ButtonAppearance.withRightIcon) && <Image className={'inline-block ml-2'} src={'/img/icons/plus.svg'} width={16} height={16} alt='' />}
        </button>
    );
}