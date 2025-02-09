import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateChallenge } from "@/hooks/useChallengeHooks";
import type { CreateChallengeRequest } from "@/types";

interface AddChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddChallengeModal({ isOpen, onClose }: AddChallengeModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateChallengeRequest>();
  const createChallenge = useCreateChallenge();

  const onSubmit = (data: CreateChallengeRequest) => {
    createChallenge.mutate(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Challenge</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input {...register("title", { required: "Title is required" })} placeholder="Title" />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}

          <Textarea {...register("description", { required: "Description is required" })} placeholder="Description" />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}

          <Input
            {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
            placeholder="Email"
            type="email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <Input
            {...register("startDate", { required: "Start date is required" })}
            placeholder="Start Date"
            type="date"
          />
          {errors.startDate && <p className="text-red-500">{errors.startDate.message}</p>}

          <Input {...register("endDate", { required: "End date is required" })} placeholder="End Date" type="date" />
          {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>}

          <Button type="submit" disabled={createChallenge.isPending}>
            {createChallenge.isPending ? "Creating..." : "Create Challenge"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

