import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createForm, updateForm, deleteForm } from "@/services/formService";
import type { CreateFormRequest, UpdateFormRequest } from "@/types";

export const useCreateForm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateFormRequest) => createForm(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["forms"] });
      toast.success("Form created successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to create form: ${error.message}`);
    },
  });
};

export const useUpdateForm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateFormRequest; }) => updateForm(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["forms"] });
      toast.success("Form updated successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to update form: ${error.message}`);
    },
  });
};

export const useDeleteForm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteForm(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["forms"] });
      toast.success("Form deleted successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to delete form: ${error.message}`);
    },
  });
}

