"use client";

import type * as React from "react";
import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchInput } from "../ui/search-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "../ui/sidebar";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { removeToken } from "@/lib/tokenStorage";
import { removeUser } from "@/lib/userStorage";

const quickActions = [
  { id: 1, label: "View Profile", icon: "User", href: "/profile" },
  { id: 2, label: "Account Settings", icon: "Settings", href: "/settings" },
  { id: 3, label: "Team Management", icon: "Users", href: "/team" },
  { id: 4, label: "Billing", icon: "CreditCard", href: "/billing" },
  { id: 5, label: "Sign Out", icon: "LogOut", href: "/logout" },
];

const sampleNotifications = [
  {
    id: 1,
    title: "New Challenge Available",
    description: "UI Design Challenge: E-commerce Dashboard",
    time: "5 minutes ago",
    read: false,
    type: "challenge",
  },
  {
    id: 2,
    title: "Team Invitation",
    description: "John Doe invited you to join Design Team",
    time: "1 hour ago",
    read: false,
    type: "team",
  },
  {
    id: 3,
    title: "Hackathon Starting Soon",
    description: "Web3 Hackathon starts in 2 hours",
    time: "2 hours ago",
    read: true,
    type: "hackathon",
  },
];

export function Header() {
  const { firstName, lastName, email } = useUser();
  const router = useRouter();

  const handleSignOut = () => {
    removeToken();
    removeUser();
    router.push("/join");
  };

  return (
    <header className="flex h-14 items-center justify-between gap-4 border-b bg-background px-6">
      <div>
        <SidebarTrigger />
      </div>
      <div>
        <SearchInput placeholder="Search..." className="w-[30vw]" />
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <Bell className="size-4" />
              {sampleNotifications.some((n) => !n.read) && (
                <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[380px]">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {sampleNotifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="flex gap-4 p-4">
                <div
                  className={cn("flex size-8 shrink-0 items-center justify-center rounded-full", {
                    "bg-primary/10 text-primary": !notification.read,
                    "bg-muted": notification.read,
                  })}
                >
                  {notification.read ? <Check className="size-4" /> : <Bell className="size-4" />}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{notification.title}</div>
                  <div className="text-sm text-muted-foreground">{notification.description}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{notification.time}</div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative" aria-label="User menu">
              <Avatar className="size-8">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${firstName} ${lastName}`} />
                <AvatarFallback>
                  {firstName ? firstName[0] : ''}
                  {lastName ? lastName[0] : ''}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {firstName} {lastName}
                </p>
                <p className="text-xs leading-none text-muted-foreground">{email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {quickActions.map((action) => {
              const Icon = Icons[action.icon as keyof typeof Icons] as React.ElementType;
              return (
                <DropdownMenuItem key={action.id} asChild>
                  {action.label === "Sign Out" ? (
                    <button onClick={handleSignOut} className="flex w-full items-center px-2 py-1.5 cursor-pointer">
                      <Icon className="mr-2 size-4" />
                      <span>{action.label}</span>
                    </button>
                  ) : (
                    <Link href={action.href} className="flex items-center px-2 py-1.5 cursor-pointer">
                      <Icon className="mr-2 size-4" />
                      <span>{action.label}</span>
                    </Link>
                  )}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

