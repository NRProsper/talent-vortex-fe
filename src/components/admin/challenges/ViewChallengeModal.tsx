import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useGetSingleChallenge } from "@/hooks/useChallengeHooks";
import LoadingSpinner from "@/components/global/LoadingSpinner";
import { Prize } from "@/types";

interface ViewChallengeModalProps {
  challengeId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ViewChallengeModal({ challengeId, isOpen, onClose }: ViewChallengeModalProps) {
  const { data: challenge, isLoading, isError } = useGetSingleChallenge(challengeId);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error fetching challenge details</div>;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{challenge.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            <strong>Description:</strong> {challenge.description}
          </p>
          <p>
            <strong>Email:</strong> {challenge.email}
          </p>
          <p>
            <strong>Start Date:</strong> {new Date(challenge.startDate).toLocaleDateString()}
          </p>
          <p>
            <strong>End Date:</strong> {new Date(challenge.endDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Status:</strong> {challenge.status}
          </p>
          <p>
            <strong>Category:</strong> {challenge.category}
          </p>
          <p>
            <strong>Skills Needed:</strong> {challenge.skillsNeeded.join(", ")}
          </p>
          <p>
            <strong>Juniority Level:</strong> {challenge.juniorityLevel}
          </p>
          <p>
            <strong>Prizes:</strong>
          </p>
          <ul>
            {challenge.prizes.map((prize: Prize, index: number) => (
              <li key={index}>
                {prize.place}: ${prize.minValue} - ${prize.maxValue}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}

