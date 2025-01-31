"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, ChevronDown, LayoutDashboard, Trophy, Settings, HelpCircle, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useUser } from "@/hooks/useUser";
import { removeToken } from "@/lib/tokenStorage";
import { removeUser } from "@/lib/userStorage";
import { useRouter } from "next/navigation";
import JoinCommunity from "../global/JoinCommunity";

const navigation = [
  {
    title: "Main",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, href: "/talent/dashboard" },
      { name: "Challenges & Hackathons", icon: Trophy, href: "/talent/challenges" },
    ],
  },
  {
    title: "Support",
    items: [
      { name: "Settings", icon: Settings, href: "/talent/settings" },
      { name: "Help Center", icon: HelpCircle, href: "/talent/help" },
      { name: "Refer family & friends", icon: UserPlus, href: "/talent/refer" },
    ],
  },
];

export function TalentNav() {
  const pathname = usePathname();
  const { firstName, lastName, email } = useUser();
  const router = useRouter();

  const handleSignOut = () => {
    removeToken();
    removeUser();
    router.push("/join");
  };

  const whatsappLink = "https://whatsapp.com/your-community-link";

  return (
    <Sidebar className="border-r bg-primary text-primary-foreground">
      <SidebarHeader className="p-4">
        <Link href="/talent" className="flex items-center gap-2">
          <Image src="/images/umurava-single-icon-only-white.svg" alt="logo" width={60} height={60} />
          <p className="font-semibold text-3xl">Talent</p>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {navigation.map((section) => (
          <SidebarGroup key={section.title} className="px-2 py-2">
            <SidebarGroupLabel className="mb-2 px-4 text-xs font-semibold text-white/70">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild isActive={pathname === item.href}>
                      <Link href={item.href} className="flex items-center gap-2">
                        <item.icon className="size-4" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                {section.title === "Main" && (
                  <SidebarMenuItem>
                    <JoinCommunity whatsappLink={whatsappLink} />
                  </SidebarMenuItem>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t border-white/10 p-4">
        <Collapsible>
          <CollapsibleTrigger asChild>
            <button className="flex w-full items-center gap-3 rounded-lg p-2 text-sm hover:bg-white/10">
              <Avatar className="size-8">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${firstName} ${lastName}`} />
                <AvatarFallback>
                  {firstName ? firstName[0] : ''}
                  {lastName ? lastName[0] : ''}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <div className="font-medium">
                  {firstName} {lastName}
                </div>
                <div className="text-xs text-white/70">{email}</div>
              </div>
              <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-white/70 hover:text-white"
              onClick={handleSignOut}
            >
              <LogOut className="size-4" />
              Sign Out
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

