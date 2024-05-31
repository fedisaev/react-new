import React from 'react';
import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={defaultAsyncReducers}>
        <StoryComponent />
    </StoreProvider>
);
