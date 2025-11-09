import { useQuery } from "@tanstack/react-query";
import { fetchPartners, fetchPartner } from "../../api/partners";

// Fetch list of partners
export function usePartners(filters = {}, options = {}) {
  return useQuery({
    queryKey: ["partners", filters],
    queryFn: () => fetchPartners(filters),
    ...options,
  });
}

// Fetch single partner
export function usePartner(id, options = {}) {
  return useQuery({
    queryKey: ["partner", id],
    queryFn: () => fetchPartner(id),
    enabled: !!id,
    ...options,
  });
}
