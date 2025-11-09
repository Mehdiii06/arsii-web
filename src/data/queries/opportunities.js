import { useQuery } from "@tanstack/react-query";
import { fetchOpportunities, fetchOpportunity } from "../../api/opportunities";

export function useOpportunities(filters = {}, options = {}) {
  return useQuery({
    queryKey: ["opportunities", filters],
    queryFn: () => fetchOpportunities(filters),
    keepPreviousData: true,
    ...options,
  });
}

export function useOpportunity(id, options = {}) {
  return useQuery({
    queryKey: ["opportunity", id],
    queryFn: () => fetchOpportunity(id),
    enabled: !!id,
    ...options,
  });
}
