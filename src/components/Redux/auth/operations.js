import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  clearAuthHeader,
  loginUser,
  logOutUser,
  registerUser,
  reloadUser,
  setAuthHeader,
} from 'components/Services/axios';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const regUs = await registerUser(credentials);
      setAuthHeader(regUs.token);
      return regUs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const logUs = await loginUser(credentials);
      setAuthHeader(logUs.token);
      return logUs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logOutUser();
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    console.log('refresh');

    try {
      setAuthHeader(persistedToken);
      const refUs = await reloadUser();
      return refUs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
