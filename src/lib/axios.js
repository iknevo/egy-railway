import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
});

// Add request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const lang = localStorage.getItem("brodalTeacherLang");
//     if (lang) {
//       config.headers["Accept-Language"] = lang;
//     }

//     const token = localStorage.getItem("teacherToken");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     if (config.data instanceof FormData) {
//       config.headers["Content-Type"] = "multipart/form-data";
//     }

//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.data.message === "Unauthenticated.") {
//       localStorage.removeItem("teacherToken");
//     }
//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
