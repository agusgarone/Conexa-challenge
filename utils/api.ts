import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("error:", error);
    return Promise.reject(error);
  }
);

export default api;
