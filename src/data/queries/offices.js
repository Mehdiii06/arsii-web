import { useQuery } from "@tanstack/react-query";
import { fetchOffices, fetchOffice } from "../../api/offices";

export function useOffices(filters = {}, options = {}) {
  return useQuery({
    queryKey: ["offices", filters],
    queryFn: () => fetchOffices(filters),
    ...options,
  });
}

export function useOffice(id, options = {}) {
  return useQuery({
    queryKey: ["office", id],
    queryFn: () => fetchOffice(id),
    enabled: !!id,
    ...options,
  });
}
