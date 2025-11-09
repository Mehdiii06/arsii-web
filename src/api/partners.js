import http from "./http";

export async function fetchPartners(params = {}) {
  const { data } = await http.get("/partners", { params });
  return data;
}

export async function fetchPartner(id) {
  const { data } = await http.get(`/partners/${id}`);
  return data;
}
