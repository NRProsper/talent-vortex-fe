"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { UserPlus, Share2 } from "lucide-react";
import toast from "react-hot-toast";

export default function ReferAnother() {
  const [isOpen, setIsOpen] = useState(false);

  const referralText = `
Join me on Umurava - the platform for exciting challenges and hackathons!

🚀 Participate in cutting-edge projects
💡 Showcase your skills
🏆 Win amazing prizes
🌐 Connect with a global community of innovators

Sign up using my referral link: ${process.env.NEXT_PUBLIC_APP_URL}/join?ref=yourReferralCode

Let's innovate together!
  `.trim();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join Umurava - Challenges and Hackathons Platform",
          text: referralText,
          url: `${process.env.NEXT_PUBLIC_APP_URL}/join?ref=yourReferralCode`,
        });
        toast.success("Referral link has been shared.");
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          toast.error("Failed to share referral link.");
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(referralText);
        toast.success("Referral message copied to clipboard!");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Failed to copy referral message.");
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <SidebarMenuButton onClick={() => setIsOpen(true)} className="w-full justify-start">
        <UserPlus className="size-4 mr-2" />
        <span>Refer family & friends</span>
      </SidebarMenuButton>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md flex flex-col items-center">
          <DialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <UserPlus className="w-8 h-8 text-blue-500" />
            </div>
            <DialogTitle className="text-2xl font-bold text-center">Refer a Friend</DialogTitle>
            <DialogDescription className="text-xl font-semibold text-center">
              Invite others to join Umurava and grow our community
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button onClick={handleShare} className="w-full">
              <Share2 className="mr-2 h-4 w-4" />
              Share Referral Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

