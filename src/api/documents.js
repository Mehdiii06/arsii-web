import http from "./http";

export async function fetchDocuments(params = {}) {
  const { data } = await http.get("/documents", { params }); // kind, year, search...
  return data;
}
export async function fetchDocument(id) {
  const { data } = await http.get(`/documents/${id}`);
  return data;
}
