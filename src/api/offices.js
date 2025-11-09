import http from "./http";

export async function fetchOffices(params = {}) {
  const { data } = await http.get("/offices", { params });
  return data; // usually simple list
}
export async function fetchOffice(id) {
  const { data } = await http.get(`/offices/${id}`);
  return data;
}
