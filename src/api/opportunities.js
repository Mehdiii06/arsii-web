import http from "./http";

export async function fetchOpportunities(params = {}) {
  const { data } = await http.get("/opportunities", { params }); // type, status, page, limit
  return data;
}
export async function fetchOpportunity(id) {
  const { data } = await http.get(`/opportunities/${id}`);
  return data;
}
