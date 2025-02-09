"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SidebarMenuButton } from "@/components/ui/sidebar";

interface JoinCommunityProps {
  whatsappLink: string;
}

export default function JoinCommunity({ whatsappLink }: JoinCommunityProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleJoin = () => {
    window.open(whatsappLink, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      <SidebarMenuButton onClick={() => setIsOpen(true)} className="w-full justify-start">
        <MessageCircle className="size-4 mr-2" />
        <span>Community</span>
      </SidebarMenuButton>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md flex flex-col items-center">
          <DialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-blue-500" />
            </div>
            <DialogTitle className="text-2xl font-bold text-center">Join our WhatsApp community</DialogTitle>
            <DialogDescription className="text-xl font-semibold text-center">Get notified on the latest projects and hackathons</DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button onClick={handleJoin} className="w-24">
              Join
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

