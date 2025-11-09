import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { login, logout, me } from "../../api/auth";

export function useLogin() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: ({ user }) => qc.setQueryData(["me"], user),
  });
}

export function useLogout() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => qc.removeQueries(),
  });
}

export function useMe(options = {}) {
  return useQuery({ queryKey: ["me"], queryFn: me, ...options });
}
