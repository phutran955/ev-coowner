import axiosClient from "./axiosClient";

const userApi = {

  // 🧾 Đăng ký người dùng mới
  register(data) {
    const url = "/user"; // resource trên MockAPI
    return axiosClient.post(url, data);
  },

  // 🧩 Login (sẽ xử lý sau nếu cần)
  login(data) {
    const url = "/user";
    return axiosClient.post(url, data);
  },
  
};

export default userApi;
