import Image from "next/image"
import Gallery1 from "../images/gallery-1.jpg"
import Gallery2 from "../images/gallery-2.jpg"
import Gallery3 from "../images/gallery-3.jpg"
import Gallery4 from "../images/gallery-4.jpg"
export const Gallery = ()=>{
    return (
        <div  id="gallery"  className="p-10 flex  flex-col   md:flex-row   items-center justify-center my-10 gap-4 ">
            <div className="flex flex-col items-center  justify-around h-full gap-[6rem]  md:gap-[7.5rem]  md:w-[30%]">
                <p className="text-4xl font-semibold text-center">Training <span className="text-[rebeccapurple]"> Experiences</span> </p>
                <Image  className="rounded-md"   width={300} alt='img' src={Gallery1} />
            </div>
            <div className=" md:w-[30%] flex items-center justify-center"><Image  className="rounded-md"   width={290} alt='img' src={Gallery3} /></div>
            <div className=" md:w-[30%] flex items-center justify-center flex-col gap-10">
            <Image  className="rounded-md"   width={300} alt='img' src={Gallery2} />
            <Image  className="rounded-md"   width={300} alt='img' src={Gallery4} />
            </div>
        </div>
    )
}