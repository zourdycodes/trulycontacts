import axios from "axios";

const headers = {};

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
