import React from 'react';
import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const StyleDecorator = (StoryComponent: StoryFn) => (
    <div>
        <StoryComponent />
    </div>
);
