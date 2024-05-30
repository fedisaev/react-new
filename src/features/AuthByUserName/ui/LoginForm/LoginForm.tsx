import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { MyButton } from 'shared/ui/MyButton';
import { MyInput } from 'shared/ui/MyInput';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <MyInput placeholder={t('Enter username')} autofocus />
            <MyInput placeholder={t('Enter password')} />
            <MyButton className={cls.inputBtn}>
                {t('Enter')}
            </MyButton>
        </div>
    );
};
