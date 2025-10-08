import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://68da9e8423ebc87faa30c4d4.mockapi.io", // MockAPI base url
  headers: {
    "Content-Type": "application/json",
  },
});

// response interceptor: lấy luôn data
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default axiosClient;
