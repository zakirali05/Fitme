import Image from "next/image"
import contactimg from "../images/contact-img.jpg"
import  {Input}  from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
export const Contact = ()=>{
return (
    <div id="contact" className="flex flex-col lg:flex-row p-10 gap-[4rem] lg:gap-[0px] ">

        <Image  className="rounded-md  object-cover w-[100%] lg:w-[580px] " alt="img" width={600} src={contactimg}/>
        <div className="flex gap-5 flex-col items-center justify-start w-full p-4  rounded-md">
        <h1 className="text-center text-2xl font-semibold">Contact <span className="text-[rebeccapurple]">Us</span></h1>
            <div className="flex gap-5 items-center justify-center w-full">
                {/* <p className="text-md font-medium text-muted-foreground">Email</p> */}
            <Input placeholder="Enter your email..." className=" custom  w-[339px]"/>
            </div>

            <div className="flex gap-5 items-center justify-center">
                {/* <p className="text-md font-medium text-muted-foreground">Message</p> */}
            <Textarea  className="bg-white dark:bg-[#020817]"  placeholder="Enter your message..." cols={40} rows={10} />
            </div>
            <Button >Submit</Button>
        </div>
    </div>
)
}