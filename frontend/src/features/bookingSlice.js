import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBookings, createBooking } from "../api/bookingApi";

export const fetchBookings = createAsyncThunk("bookings/fetch", async () => {
  const data = await getBookings();
  return data;
});

export const addBooking = createAsyncThunk("bookings/add", async (booking) => {
  const data = await createBooking(booking);
  return data;
});

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => { state.status = "loading"; })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default bookingsSlice.reducer;
