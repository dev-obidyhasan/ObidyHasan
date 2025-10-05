import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "../../../ui/button";
import DashboardItem from "./DashboardItem";
import Link from "next/link";
import Logout from "./Logout";

const route = {
  navMain: [
    {
      items: [
        {
          title: "Profile",
          url: "/dashboard/profile",
        },
        {
          title: "Skill",
          url: "/dashboard/skill",
        },
        {
          title: "Project",
          url: "/dashboard/project",
        },
        {
          title: "Blog",
          url: "/dashboard/blog",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="flex flex-col ">
      <div className="flex-1">
        <SidebarHeader className="m-2">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/drkyqxkqw/image/upload/v1756707585/picofme_6_a_rosa65.png"
              alt="profile image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h1 className="font-medium">Obidy Hasan Naim</h1>
              <p className="text-xs text-muted-foreground">
                Full Stack Developer
              </p>
            </div>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          {route.navMain.map((item, idx) => (
            <SidebarGroup key={idx}>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-3">
                  {item.items.map((item, idx) => (
                    <DashboardItem
                      key={idx}
                      title={item?.title}
                      url={item?.url}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail />
      </div>
      <div className="px-2 py-4">
        <Logout />
      </div>
    </Sidebar>
  );
}
