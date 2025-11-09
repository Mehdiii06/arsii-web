import { useQuery } from "@tanstack/react-query";
import { fetchDocuments, fetchDocument } from "../../api/documents";

export function useDocuments(filters = {}, options = {}) {
  return useQuery({
    queryKey: ["documents", filters],
    queryFn: () => fetchDocuments(filters),
    ...options,
  });
}

export function useDocument(id, options = {}) {
  return useQuery({
    queryKey: ["document", id],
    queryFn: () => fetchDocument(id),
    enabled: !!id,
    ...options,
  });
}
