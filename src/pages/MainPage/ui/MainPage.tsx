import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = memo(() => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;
