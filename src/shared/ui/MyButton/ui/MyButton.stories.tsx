import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MyButton, MyButtonSize, MyButtonTheme } from './MyButton';

const meta: Meta<typeof MyButton> = {
    title: 'shared/Button',
    component: MyButton,
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: MyButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'Text',
        theme: MyButtonTheme.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: MyButtonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: MyButtonTheme.OUTLINE,
        size: MyButtonSize.L,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: MyButtonTheme.OUTLINE,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: MyButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Text',
        theme: MyButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: MyButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: MyButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: MyButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: MyButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: MyButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: MyButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: MyButtonSize.XL,
    },
};
