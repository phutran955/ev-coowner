import axiosClient from "./axiosClient";

const userApi = {

  // 🧾 Đăng ký người dùng mới
  register(data) {
    const url = "/user"; // resource trên MockAPI   //const url = "/auth/register";
    return axiosClient.post(url, data);
  },

  // 🧩 Login 
  login(data) {
    const url = "/user";
    return axiosClient.post(url, data);
  },

  // 🧠 Lấy thông tin user hiện tại (sau khi login)
  /*getProfile() {
    const url = "/auth/me"; // backend thật thường có /me hoặc /profile
    return axiosClient.get(url);
  },*/

};

export default userApi;
