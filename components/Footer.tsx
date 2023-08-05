import {Twitter,Linkedin ,Instagram ,  Github} from "lucide-react"
import Link from "next/link";

export const Footer = () => {
  return <div className="border-t p-4 mt-10 flex items-center justify-center">
    <div className="w-full h-full flex flex-col gap-4  items-center justify-center">
    <p className="pr-2 text-sm font-medium text-muted-foreground">Made with love by <span className="hover:underline cursor-pointer text-sm font-medium   text-[rebeccapurple]">@ZakirAli</span></p>
    <div className="flex gap-5 items-center justify-center">
<Link href="https://twitter.com/zakirali_05" target="blank"  className="text-sm font-medium text-muted-foreground hover:text-black  dark:hover:text-white   "><Twitter/></Link>
<Link href="https://www.linkedin.com/in/zakir-ali-dhuka-baab89259/" target="blank" className="text-sm font-medium text-muted-foreground  dark:hover:text-white    hover:text-black"><Linkedin/></Link>
<Link href="https://www.instagram.com/zakirali_05/?next=%2F" target="blank"  className="text-sm font-medium text-muted-foreground  dark:hover:text-white    hover:text-black"><Instagram/></Link>
<Link href="https://github.com/zakirali05" target="blank"  className="text-sm font-medium text-muted-foreground  dark:hover:text-white    hover:text-black"><Github/></Link>
    </div>
    </div>
  </div>;
};
