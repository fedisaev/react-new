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
    disabled?: boolean;
}

export const MyButton: FC<MyButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        disabled,
        size = MyButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.MyButton, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
