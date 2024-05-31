import React, { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, onClose, isOpen } = props;
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    );
};
