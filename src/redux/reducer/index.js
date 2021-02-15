import React from 'react';
import { LOADFORECAST, ERRORS } from '../actions/action_types';
import { initialState } from '../actions/constants';

export const AppState = (state= initialState, action) => {
    switch(action.type) {
        case LOADFORECAST:
            return {
                ...state,
                forecast: action.payload
            }
        case ERRORS:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}