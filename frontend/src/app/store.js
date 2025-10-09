import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import bookingsReducer from '../features/bookingSlice';

const rootReducer = {
  user: userReducer,
  bookings: bookingsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
