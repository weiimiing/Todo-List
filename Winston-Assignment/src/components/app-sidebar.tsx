import * as React from "react";
import { IconListDetails } from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import { Link } from "react-router-dom";
import { CheckSquare } from "lucide-react";

const items = [
  {
    title: "ToDo Page",
    url: "/todo",
    icon: CheckSquare,
  },
  {
    title: "Lorem Ipsum",
    url: "/random",
    icon: IconListDetails,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
     <SidebarHeader className="h-14 border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/todo">
             
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Todo App</span>
                  <span className="text-xs text-sidebar-foreground/70">Organize your tasks</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>


      <SidebarContent className="overflow-x-hidden" >
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link to={item.url}>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <SidebarSeparator />
      </SidebarContent>
    </Sidebar>
  );
}
