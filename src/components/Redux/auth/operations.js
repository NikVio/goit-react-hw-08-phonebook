import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  clearAuthHeader,
  loginUser,
  logOutUser,
  registerUser,
  reloadPage,
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
    const { token } = thunkAPI.getState().auth;
    if (!token) return thunkAPI.rejectWithValue('Not valid token');
    setAuthHeader(token);
    try {
      const refUs = await reloadPage();
      return refUs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
