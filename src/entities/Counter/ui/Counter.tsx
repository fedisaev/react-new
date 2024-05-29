import { FC } from 'react';
import { MyButton } from 'shared/ui/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { useTranslation } from 'react-i18next';

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <MyButton
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('increment')}
            </MyButton>
            <MyButton
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </MyButton>
        </div>
    );
};
