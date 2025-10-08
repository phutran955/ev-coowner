import axios from "axios";
import StorageKeys from "../constants/storage-key";

const axiosClient = axios.create({
  baseURL: "https://68da9e8423ebc87faa30c4d4.mockapi.io", // 👈 sau này chỉ cần đổi lại domain backend
  headers: {
    "Content-Type": "application/json",
  },
});

// 🧩 Request Interceptor: tự động thêm token
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(StorageKeys.TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🧩 Response Interceptor: lấy data hoặc lỗi
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default axiosClient;
