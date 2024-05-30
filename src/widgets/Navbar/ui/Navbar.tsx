import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { MyButton, MyButtonTheme } from 'shared/ui/MyButton';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <MyButton
                theme={MyButtonTheme.CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Login')}
            </MyButton>
            <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
        </div>
    );
};
