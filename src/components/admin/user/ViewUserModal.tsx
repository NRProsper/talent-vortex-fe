import LoadingSpinner from "@/components/global/LoadingSpinner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useGetSingleUser } from "@/hooks/useUserHooks";

interface ViewUserModalProps {
  userId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ViewUserModal({ userId, isOpen, onClose }: ViewUserModalProps) {
  const { data: user, isLoading, isError } = useGetSingleUser(userId);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error fetching user details</div>;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <strong>First Name:</strong> {user.firstName}
          </div>
          <div>
            <strong>Last Name:</strong> {user.lastName}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <div>
            <strong>Role:</strong> {user.role}
          </div>
          <div>
            <strong>Created At:</strong> {new Date(user.createdAt).toLocaleString()}
          </div>
          <div>
            <strong>Updated At:</strong> {new Date(user.updatedAt).toLocaleString()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

