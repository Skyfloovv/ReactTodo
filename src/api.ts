import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});
