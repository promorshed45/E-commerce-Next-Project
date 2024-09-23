'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { LucideShoppingCart, Search } from "lucide-react";
import NavDropdownMenu from "./NavDropdownMenu";
import { useUser } from "@/Providers/user.Provider";
import { Button } from "./ui/button";

const NavBar = () => {
  // const {  } = useUser();
  const { user } = useUser()

  return (
    <>
      <nav className="w-full py-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              className="h-8 w-auto px-3 "
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl pt-1 font-semibold  dark:text-white">
              E-Comerce
            </span>
          </Link>

          <div className="flex gap-1 md:gap-5 md:order-2 space-x-3 md:space-x-0 ">
            <button
              type="button"
              className="relative inline-flex justify-center items-center rounded-full bg-gray-100 w-10 h-10 text-gray-900 transition hover:text-gray-900/75"
            >
              <LucideShoppingCart className="text-rose-500 text-center text-lg" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
                20
              </div>
            </button>
            {user?.email ? (

              <NavDropdownMenu />)
              :
              (
                <Link href="/login">
                  <Button> Login </Button>
                </Link>
              )}
            {/* 
            <button className="flex justify-center items-center rounded-full bg-gray-100 w-10 h-10 text-gray-900 transition hover:text-gray-900/75">
              <LucideUser2 className="text-rose-500 text-center text-lg" />
            </button> */}
          </div>

          <div className='w-full items-center justify-between hidden  md:flex md:w-2/5 md:order-1'>
            <div className="items-center w-full flex flex-col md:flex-row">
              <fieldset className="w-full mx-auto dark:text-gray-100 ">
                <div className="relative w-full rounded-md py-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
                  <input
                    type="Search"
                    name="search"
                    placeholder="Search for product"
                    className="border w-full h-10 text-sm rounded-l-sm focus:outline-none dark:bg-gray-950 dark:text-gray-100 focus:dark:bg-gray-700 focus:dark:border-violet-400 px-3"
                  />
                </div>
              </fieldset>
              <div className=" md:flex-1">
                <Link href="/">
                  <button className="md:flex-1 h-10 rounded-r-sm btn md:px-5 bg-rose-500 text-white w-full">
                    {" "}
                    <Search className="text-2xl " />{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
