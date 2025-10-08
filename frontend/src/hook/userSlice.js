import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../api/userApi';

// 🧠 Async thunk: REGISTER
export const register = createAsyncThunk('user/register', async (payload) => {
  // Gọi API MockAPI để tạo user
  const data = await userApi.register(payload);

  localStorage.setItem('user', JSON.stringify(data));
  // save data to local storage
  //localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  //localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data;
});

// 🧠 Async thunk: LOGIN
export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await userApi.login(payload);

  localStorage.setItem('user', JSON.stringify(data));
  // save data to local storage
  //localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  //localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data;
});

// 📦 Slice: Quản lý user
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},   // user hiện tại
    settings: {},  // tùy chỉnh khác
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.current = action.payload;
      });
  }
});

const { reducer } = userSlice;
export default reducer;
