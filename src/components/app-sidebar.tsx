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
import { Button } from "./ui/button";
import DashboardItem from "./shared/DashboardItem";
import Link from "next/link";

const route = {
  navMain: [
    {
      items: [
        {
          title: "Profile",
          url: "/dashboard",
        },
        {
          title: "Skills",
          url: "/dashboard/skill",
        },
        {
          title: "Projects",
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
              src="https://i.ibb.co.com/0yMLT5yH/dd.jpg"
              alt="profile image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h1 className="font-bold">Obidy Hasan Naim</h1>
              <p className="text-xs">Full Stack Developer</p>
            </div>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          {route.navMain.map((item, idx) => (
            <SidebarGroup key={idx}>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-2">
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
      <div className="p-2">
        <Button className="w-full">Logout</Button>
      </div>
    </Sidebar>
  );
}
