import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet atque culpa deleniti
            deserunt eius in magni nam obcaecati, placeat provident qui. Fugiat laborum numquam perferendis?
            Accusamus ad aliquam aliquid commodi consequatur delectus et eum harum illo incidunt, itaque labore
            libero maxime neque odio odit, perferendis, provident quidem ullam vitae?`,
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet atque culpa deleniti
            deserunt eius in magni nam obcaecati, placeat provident qui. Fugiat laborum numquam perferendis?
            Accusamus ad aliquam aliquid commodi consequatur delectus et eum harum illo incidunt, itaque labore
            libero maxime neque odio odit, perferendis, provident quidem ullam vitae?`,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
