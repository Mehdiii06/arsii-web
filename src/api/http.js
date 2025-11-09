import axios from "axios";
import { getCurrentLocale } from "../lib/I18nProvider";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false, // for httpOnly refresh cookie, if you use it
});

console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);

// simple in-memory access token (safer than localStorage)
let accessToken = null;
export const setAccessToken = (t) => (accessToken = t);
export const clearAccessToken = () => (accessToken = null);

// attach Authorization header
http.interceptors.request.use((config) => {
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  config.headers["Accept-Language"] = getCurrentLocale();
  return config;
});

// refresh on 401 once, then retry the original request
let refreshing = null;
http.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { config, response } = error;
    if (!response) throw error; // network error / timeout

    // only handle first 401 attempt
    if (response.status !== 401 || config.__isRetry) throw error;

    try {
      // single-flight refresh (reuse the same promise)
      refreshing =
        refreshing ||
        axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

      const { data } = await refreshing; // { accessToken }
      setAccessToken(data.accessToken);
      refreshing = null;

      config.__isRetry = true;
      config.headers.Authorization = `Bearer ${data.accessToken}`;
      return http(config); // retry original
    } catch (e) {
      refreshing = null;
      clearAccessToken();
      throw error; // let caller redirect to /signin
    }
  }
);

export default http;
