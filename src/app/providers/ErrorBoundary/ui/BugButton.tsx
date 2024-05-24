import { FC, useEffect, useState } from 'react';
import { MyButton } from 'shared/ui/MyButton';
import { useTranslation } from 'react-i18next';

export const BugButton: FC = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <MyButton onClick={onThrow}>
            {t('Брось ошибку')}
        </MyButton>
    );
};
