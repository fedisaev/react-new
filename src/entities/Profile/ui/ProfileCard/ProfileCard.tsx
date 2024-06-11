import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { MyButton, MyButtonTheme } from 'shared/ui/MyButton';
import { MyInput } from 'shared/ui/MyInput';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <MyButton
                    theme={MyButtonTheme.OUTLINE}
                    className={cls.editBtn}
                >
                    {t('Edit')}
                </MyButton>
            </div>
            <div className={cls.data}>
                <MyInput
                    value={data?.first}
                    placeholder={t('Your name')}
                />
                <MyInput
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                />
            </div>
        </div>
    );
};
