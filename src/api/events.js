import http from "./http";

export async function fetchEvents(params = {}) {
  const { data } = await http.get("/events", { params });
  return {
    items: data?.data ?? [],
    total: data?.data?.length ?? 0,
  };
}
export async function fetchEvent(id) {
  const { data } = await http.get(`/events/${id}`);
  return data; // event
}
