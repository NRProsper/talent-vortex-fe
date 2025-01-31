"use client";

import { Share2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import type React from "react"; // Added import for React

type Challenge = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  slug: string;
  skillsNeeded: string[];
  prizes: Array<{
    place: string;
    minValue: number;
    maxValue: number;
  }>;
};

type ShareButtonProps = {
  challenge: Challenge;
};

const ShareButton: React.FC<ShareButtonProps> = ({ challenge }) => {
  const handleShareClick = async () => {
    if (!challenge) {
      toast.error("No challenge details available.");
      return;
    }

    const shareText = `
${challenge.title}

${challenge.description}

🏆 Prizes:
${challenge.prizes
        .map((prize) => `${prize.place}: $${prize.minValue.toLocaleString()} - $${prize.maxValue.toLocaleString()}`)
        .join("\n")}

📅 Timeline:
Start: ${new Date(challenge.startDate).toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
End: ${new Date(challenge.endDate).toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}

🔧 Skills Needed:
${challenge.skillsNeeded.join(", ")}

Join the challenge here: ${`${process.env.NEXT_PUBLIC_APP_URL}/challenges/${challenge.slug}`}
    `.trim();

    if (navigator.share) {
      try {
        await navigator.share({
          title: challenge.title,
          text: shareText,
          url: `${process.env.NEXT_PUBLIC_APP_URL}/challenges/${challenge.slug}`,
        });
        toast.success("Challenge details have been shared.");
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          toast.error("Failed to share challenge details.");
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        toast.success("Challenge details copied to clipboard!");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Failed to copy challenge details.");
      }
    }
  };

  return (
    <Button variant="outline" className="w-full" onClick={handleShareClick}>
      <Share2Icon className="mr-2 h-4 w-4" />
      Share Challenge
    </Button>
  );
};

export default ShareButton

