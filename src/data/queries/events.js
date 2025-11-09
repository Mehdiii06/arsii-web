import { useQuery } from "@tanstack/react-query";
import { fetchEvents, fetchEvent } from "../../api/events";

// Fetch list of events
export function useEvents(filters = {}, options = {}) {
  const res = useQuery({
    queryKey: ["events", filters],
    queryFn: () => fetchEvents(filters),
    ...options,
  });
  console.log("dd======res", res);
  return res;
}

// Fetch single event
export function useEvent(id, options = {}) {
  return useQuery({
    queryKey: ["event", id],
    queryFn: () => fetchEvent(id),
    enabled: !!id,
    ...options,
  });
}
