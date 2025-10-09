import axiosClient from "./axiosClient";

export const getBookings = () => axiosClient.get("/bookings");

export const createBooking = (booking) => axiosClient.post("/bookings", booking);
