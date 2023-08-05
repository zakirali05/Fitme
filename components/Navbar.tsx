"use client"

import { UserButton, useAuth } from "@clerk/nextjs";
import * as React from "react"
import {DumbbellIcon , MenuIcon} from "lucide-react"
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link";
export const Navbar = ()=>{
    const { setTheme } = useTheme()
    const user = useAuth()

    return (
        <nav className="h-16 border-b flex items-center justify-between px-4">
        <h1 className="flex gap-2"><DumbbellIcon/><p className="text-xl font-semibold">Fit<span className="text-[rebeccapurple]">me.</span></p></h1> 
        <div className="h-full md:flex items-center justify-between gap-5 hidden">
          <Link href="/">
        <p className="text-muted-foreground hover:text-black cursor-pointer text-sm font-medium dark:hover:text-white   ">Home</p>
        </Link>
        <Link href="#gallery">
        <p className="text-muted-foreground hover:text-black cursor-pointer text-sm font-medium dark:hover:text-white   ">Gallery</p> 
        </Link>
        <Link href="#packages">
        <p className="text-muted-foreground hover:text-black cursor-pointer text-sm font-medium dark:hover:text-white   ">Packages</p> 
        </Link>
        <Link href="#testimonials">
        <p className="text-muted-foreground hover:text-black cursor-pointer text-sm font-medium dark:hover:text-white   ">Testimonials</p>  
        </Link>
        <Link href="#contact">
        <p className="text-muted-foreground hover:text-black cursor-pointer text-sm font-medium dark:hover:text-white   ">Contact</p>
        </Link>
        </div>
        <div className="flex gap-2 items-center justify-center">
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    {user.isSignedIn ? <> <UserButton afterSignOutUrl="/"/>  </>:   <><Link href="/sign-in"><Button>Sign in</Button></Link></>}
         
        </div>   
       
        </nav>
    )
}