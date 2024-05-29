import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MyButton.module.scss';

export enum MyButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum MyButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',

}
interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: MyButtonTheme;
    square?: boolean;
    size?: MyButtonSize;
}

export const MyButton: FC<MyButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = MyButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.MyButton, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
