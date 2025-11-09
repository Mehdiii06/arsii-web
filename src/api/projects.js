import http from "./http";

export async function fetchProjects(params = {}) {
  const { data } = await http.get("/projects", { params });
  return data;
}
export async function fetchProject(id) {
  const { data } = await http.get(`/projects/${id}`);
  return data;
}
