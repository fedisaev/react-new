import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import React, { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { MyInput } from 'shared/ui/MyInput';
import { MyButton, MyButtonTheme } from 'shared/ui/MyButton';
import { Text, TextTheme } from 'shared/ui/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Authorization form')} />
                {error && <Text text={t('You entered wrong username or password')} theme={TextTheme.ERROR} />}
                <MyInput
                    autofocus
                    placeholder={t('Enter username')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <MyInput
                    placeholder={t('Enter password')}
                    onChange={onChangePassword}
                    value={password}
                />
                <MyButton
                    theme={MyButtonTheme.OUTLINE}
                    className={cls.inputBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Enter')}
                </MyButton>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
