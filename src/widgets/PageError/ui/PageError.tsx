import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { MyButton } from 'shared/ui/MyButton';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();
    // eslint-disable-next-line no-restricted-globals
    const reloadPage = () => location.reload();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <MyButton onClick={reloadPage}>
                {t('Обновить страницу')}
            </MyButton>
        </div>
    );
};
