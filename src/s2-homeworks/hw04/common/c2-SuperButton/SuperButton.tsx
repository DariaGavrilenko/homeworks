import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = s.button
        // + (disabled
        //         ? ...
        //         : xType === 'red'
        //             ? ...
        + (disabled ? ' ' + s.disabled : xType === 'red' ? ' ' + s.red : xType === 'secondary' ? ' ' + s.secondary : ' ' + s.default)

        + (className ? ' ' + className : '') // задачка на смешивание классов

    const getClassName = () => {
        if (disabled) {
            return ' ' + s.disabled
        }

        if (xType === 'red') {
            return ' ' + s.red
        }

        if (xType === 'secondary') {
            return ' ' + s.secondary
        }

        return ' ' + s.default
    }

    //    const getClassName = () => {
    //     if (disabled){
    //         return ' ' + s.disabled
    //     }

    //     if(xType){
    //         return ' ' + s[xType]
    //     }

    //     return ' ' + s.default
    //    }



    return (
        <button
            disabled={disabled}
            className={s.button + getClassName()}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
