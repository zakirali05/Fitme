

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
export const SheetComponent = () => {
  return (
    <div className=" block md:hidden">
      <Sheet  >
        <SheetTrigger className="absolute top-[0.8rem] right-[9.5rem]"><Button  variant='outline'><MenuIcon /></Button></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Explore the options</SheetTitle>
            <SheetDescription>
              Best gym in california offers you a special offer keep exploring!
            </SheetDescription>
          </SheetHeader>
          <div className="w-full py-10 px-3">
            <div className="flex flex-col items-start justify-center gap-5 text-sm font-medium ">
              <Link href="/">
              <p className="text-muted-foreground hover:text-black cursor-pointer">Home</p>
              </Link>
              <Link href="#gallery">
              <p className="text-muted-foreground hover:text-black cursor-pointer">Gallery</p>
              </Link>
              <Link href="#packages">
              <p className="text-muted-foreground hover:text-black cursor-pointer">Packages</p>
              </Link>
              <Link href="#testimonials">
              <p className="text-muted-foreground hover:text-black cursor-pointer">Testimonials</p>
              </Link>
              <Link href="#contact">
              <p className="text-muted-foreground hover:text-black cursor-pointer">Contact</p>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>

  )
}