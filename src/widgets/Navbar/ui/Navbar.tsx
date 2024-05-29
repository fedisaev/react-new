import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { MyButton, MyButtonTheme } from 'shared/ui/MyButton';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <MyButton
                theme={MyButtonTheme.CLEAR}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Login')}
            </MyButton>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet atque culpa deleniti
                deserunt eius in magni nam obcaecati, placeat provident qui. Fugiat laborum numquam perferendis?
                Accusamus ad aliquam aliquid commodi consequatur delectus et eum harum illo incidunt, itaque labore
                libero maxime neque odio odit, perferendis, provident quidem ullam vitae?
            </Modal>
        </div>
    );
};
