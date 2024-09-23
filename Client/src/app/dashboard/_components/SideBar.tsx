"use client";

import { useState } from "react";
import { ShoppingCart, LayoutDashboard, UsersRound, Settings, ChevronRight, ShoppingBag } from "lucide-react";

import { useWindowWidth } from "@react-hook/window-size";
import { Button } from "@/components/ui/button";
import { Menu } from "./Menu";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Menu
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/dashboard/admin",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Products",
            href: "/dashboard/products",
            icon: ShoppingBag,
            variant: "ghost"
          },
          {
            title: "Users",
            href: "/dashboard/users",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Ordrs",
            href: "/dashboard/orders",
            icon: ShoppingCart,
            variant: "ghost"
          },
          {
            title: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}
