import { useQuery } from "@tanstack/react-query";
import { fetchProjects, fetchProject } from "../../api/projects";

// Fetch list of projects
export function useProjects(filters = {}, options = {}) {
  return useQuery({
    queryKey: ["projects", filters],
    queryFn: () => fetchProjects(filters),
    ...options,
  });
}

// Fetch single project
export function useProject(id, options = {}) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => fetchProject(id),
    enabled: !!id,
    ...options,
  });
}
