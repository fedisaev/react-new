import type { Meta, StoryObj } from '@storybook/react';
import { MyInput } from './MyInput';

const meta: Meta<typeof MyInput> = {
    title: 'shared/MyInput',
    component: MyInput,
};

export default meta;
type Story = StoryObj<typeof MyInput>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
};
