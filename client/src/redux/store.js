import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth-slice/auth.js';

export const store  = configureStore({
    // this is global reducer
    reducer:{
        auth:authReducer
    }
})