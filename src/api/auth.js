import http, { setAccessToken, clearAccessToken } from "./http";
import store from "../store";
import { getCurrentLocale } from "../lib/I18nProvider";

export async function login({ email, password }) {
  const locale = getCurrentLocale(store); // "en" or "fr"
  const { data } = await http.post(
    "/auth/login",
    { email, password },
    { headers: { "Accept-Language": locale } }
  );
  setAccessToken(data.accessToken);
  return data;
}

export async function logout() {
  try {
    await http.post("/auth/logout");
  } catch {}
  clearAccessToken();
}

export async function me() {
  const { data } = await http.get("/auth/me");
  return data;
}

export async function testProtected() {
  const { data } = await http.get("/test-protected");
  return data;
}
