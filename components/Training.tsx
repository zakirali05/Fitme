import Image from "next/image"
import skipping from "../images/skipping.png"
import lotus from "../images/lotus.svg"
import dumbel from "../images/dumbel.png"
import heart from "../images/heart.png"
export const Training = ()=>{
    return (
        <div className="flex flex-col lg:flex-row items-center gap-10  py-10">
           <div className="lg:flex gap-2 p-4 w-[30%] items-center justify-center hidden">
            <div className="w-[190px] flex">
            <p className="text-lg font-semibold ">Training programs we offer for you</p>
            <Image width={50} height={50} alt="img" src={skipping}  />
            </div>
           </div>
           <div className="flex  flex-col  md:flex-row  rounded-md items-center justify-around  w-[80%] p-5 md:p-[0px]    md:w-[90%] gap-10 md:gap-[0px]  lg:w-[55%] bg-slate-200 dark:bg-slate-800">
            <div className="p-4  sm:w-[40%]  md:w-[25%] ">
                <div className="heading mb-3  flex items-center justify-between  ">
                    <p className="text-lg font-semibold">Yoga</p>
                    <Image width={30} height={30} alt="img" src={lotus}/>
                </div>
                <div className="description text-sm font-medium text-muted-foreground">
                    <p>Enjoy yoga classes for all levels, body elastic, body weight workouts, barre pilates, and more</p>
                </div>
            </div>
            <div className="p-4 sm:w-[40%]  md:w-[25%] ">
                <div className="heading mb-3  flex items-center justify-between">
                    <p className="text-lg font-semibold" >Muscles</p>
                    <Image width={30} height={30} alt="img" src={dumbel}/>
                </div>
                <div className="description text-sm font-medium text-muted-foreground">
                    <p>Regular strength training improve the health of your bones, muscles and connective tissues</p>
                </div>
            </div>
            <div className="p-4 sm:w-[40%]  md:w-[25%] ">
                <div className="heading mb-3  flex items-center justify-between ">
                    <p  className="text-lg font-semibold" >Fitness</p>
                    <Image width={30} height={30} alt="img" src={heart}/>
                </div>
                <div className="description text-sm font-medium text-muted-foreground">
                    <p>Your trainer will  show you your workout regime design to meet your fitness level</p>
                </div>
            </div>
           </div>
        </div>
    )
}