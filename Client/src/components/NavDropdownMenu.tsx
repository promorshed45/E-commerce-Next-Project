'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";
import { useUser } from "@/Providers/user.Provider";
import { logout } from "@/services/auth";

const NavDropdownMenu = () => {
  const {setIsLoading: userLoading, user } = useUser()

  const handlLogout = () => {
    logout();
    userLoading(true)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={user?.profileImage} alt={user?.name} />
          <AvatarFallback> <span className="text-rose-500 text-bold">CN</span> </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel> {user?.name} </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
            </DropdownMenuItem>
            <span>Profile</span>
          </Link>
          <DropdownMenuItem>
          <Link href="/dashboard/admin">
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
            </DropdownMenuItem>
            <span>Dashboard</span>
          </Link>
            
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant="ghost" onClick={() => handlLogout()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdownMenu;