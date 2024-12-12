import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signUp = async (data: {
  email: string;
  name: string;
  password: string;
}) => {
  return api.post("/auth/signup", data);
};

export const signIn = async (data: { email: string; password: string }) => {
  return api.post("/auth/signin", data);
};

export const getProfile = async () => {
  return api.get("/auth/profile");
};
