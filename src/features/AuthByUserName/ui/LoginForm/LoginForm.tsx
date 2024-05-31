import React, {
    FC, memo, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { MyButton, MyButtonTheme } from 'shared/ui/MyButton';
import { MyInput } from 'shared/ui/MyInput';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import i18n from 'shared/config/i18n/i18n';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
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
                {error && (
                    <Text
                        text={i18n.t('You entered wrong username or password')}
                        theme={TextTheme.ERROR}
                    />
                )}
                <MyInput
                    placeholder={t('Enter username')}
                    autofocus
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
