import { createSlice } from '@reduxjs/toolkit';
import {
  authentication, setData, setError, logout,
} from './user.reducer';
import { User, UserStateName } from './user.type';

export const initialState: User = {
  data: {},
  error: [''],
};

const userSlice = createSlice({
  name: UserStateName,
  reducers: {
    authentication, setData, setError, logout,
  },
  initialState,
});

export const { reducer: userReducer, actions: userAction } = userSlice;
