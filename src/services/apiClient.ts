import axios from "axios";

export const apiBaseURL =
  import.meta.env.VITE_API_BASE_URL || "https://fe-task-api.mainstack.io";

export const apiClient = axios.create({
  baseURL: apiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    const err = error ?? new Error("Network error");
    return Promise.reject(err);
  }
);

export default apiClient;