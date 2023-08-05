import Image from "next/image"
import img1 from "../images/hero-img-1.jpg"
import img2 from "../images/hero-img-2.jpg"
import img3 from "../images/hero-img-3.jpg"
import { Button } from "./ui/button"
import Link from "next/link"
export const Hero = () => {
    return (
        <div className="w-full    flex flex-col items-center justify-start gap-6 py-16">
            <h1 className="font-semibold   leading-[1.5] lg:leading-[1.5]    text-3xl  md:text-4xl     lg:text-5xl w-[90%] md:w-[70%] lg:w-[65%] text-center  ">Get your perfect workout with perfect <span className="text-[rebeccapurple]">trainers</span></h1>
            <div className="flex items-center gap-4">
                <Button variant="outline">Explore</Button>
                <Link href="#packages">
                <Button>Packages</Button>
                </Link>
            </div>
            <div className="flex  justify-center  items-center gap-4 mt-5">
                <div className="rounded-full pb-2 cursor-pointer border-b-[5px] border-[transperent]   hover:border-b-[5px] hover:border-[rebeccapurple]"><Image width={100}   className="  rounded-full  object-cover"  src={img1}  alt="img" /></div>
                <div className="rounded-full  pb-2 cursor-pointer border-b-[5px] border-[transperent]   hover:border-b-[5px] hover:border-[rebeccapurple]"><Image  width={150}   className=" rounded-full  object-cover"  src={img2}  alt="img" /></div>
                <div className="rounded-full   pb-2 cursor-pointer border-b-[5px] border-[transperent]   hover:border-b-[5px] hover:border-[rebeccapurple]"><Image  width={100}   className=" rounded-full  object-cover"  src={img3} alt="img"/></div>
            </div>
        </div>
    )


}