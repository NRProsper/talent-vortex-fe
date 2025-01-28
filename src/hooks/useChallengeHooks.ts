import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createChallenge, updateChallenge, getChallenges, deleteChallenge } from "@/services/challengeService";
import type { CreateChallengeRequest, UpdateChallengeRequest, QueryChallengeRequest } from "@/types";

export const useCreateChallenge = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateChallengeRequest) => createChallenge(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["challenges"] });
      toast.success("Challenge created successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to create challenge: ${error.message}`);
    },
  });
};

export const useUpdateChallenge = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateChallengeRequest; }) => updateChallenge(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["challenges"] });
      toast.success("Challenge updated successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to update challenge: ${error.message}`);
    },
  });
};

export const useGetChallenges = (params?: QueryChallengeRequest) => {
  return useQuery({
    queryKey: ["challenges", params],
    queryFn: () => getChallenges(params),
  });
};

export const useDeleteChallenge = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteChallenge(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["challenges"] });
      toast.success("Challenge deleted successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to delete challenge: ${error.message}`);
    },
  });
}

