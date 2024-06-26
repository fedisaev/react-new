import React, {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
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
    children?: ReactNode;
}

export const MyButton: FC<MyButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = MyButtonTheme.OUTLINE,
        square,
        disabled,
        size = MyButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
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
});
