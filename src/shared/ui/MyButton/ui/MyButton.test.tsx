import { render, screen } from '@testing-library/react';
import { MyButton, ThemeButton } from 'shared/ui/MyButton';

describe('Component MyButton', () => {
    test('my button', () => {
        render(<MyButton>TEST</MyButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('have class', () => {
        render(<MyButton theme={ThemeButton.CLEAR}>TEST</MyButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
