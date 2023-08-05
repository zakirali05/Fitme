import Image from "next/image"
import profile1 from "../images/profile-1.jpg"
import profile2 from "../images/profile-2.jpg"
import profile3 from "../images/profile-3.webp"
export const Testimonials = ()=>{
    return (
        <div id="testimonials" className="p-10">
            <h1 className="text-2xl font-semibold text-center  mb-4">What our members say <span className="text-[rebeccapurple]">About us</span> </h1>
            <div className="flex flex-col md:flex-row items-center justify-center my-10 gap-5">
                <div className="flex flex-col items-center justify-center p-5 gap-5 bg-slate-200 dark:bg-slate-800 rounded-md">
                    <Image  className="rounded-full w-[80px] h-[80px] object-cover " alt="profile-img" width={50} height={50} src={profile1}  />
                    <h1 className="text-lg font-semibold">Chris Kimwealth</h1>
                    <p className="text-sm font-medium text-muted-foreground px-3">Since August 2007, I’ve been working out with a trainer at goPerformance and have truly enjoyed the experience. Even though I’m only a few pounds away from my weight and body fat percentage goals, my body is in the best shape it’s ever been.</p>
                </div>
                <div className="flex flex-col items-center justify-center p-5 gap-5 bg-slate-200  dark:bg-slate-800 rounded-md">
                <Image  className="rounded-full  w-[80px] h-[80px]  object-cover" alt="profile-img" width={50} height={50} src={profile2}  />
                    <h1 className="text-lg font-semibold">John Welburg</h1>
                    <p className="text-sm font-medium text-muted-foreground px-3">I’ve lost 40lbs, added strength, flexibility, and more endurance...Since joining, I’ve always felt the staff at goPerformance & Fitness is interested in seeing me reach my fitness goals</p>
                </div>
                <div className="flex flex-col items-center justify-center p-5 gap-5 bg-slate-200  dark:bg-slate-800  rounded-md">
                <Image  className="rounded-full  w-[80px] h-[80px]  object-cover" alt="profile-img" width={50} height={50} src={profile3}  />
                   <h1 className="text-lg font-semibold">Sarah Rehman</h1>
                   <p className="text-sm font-medium text-muted-foreground px-3">Since joining goPerformance, I have seen increased strength, size and energy levels! The Staff at Go is knowledgeable and accessible. They approach fitness on a level I haven’t experienced at other gyms!</p>
                </div>
            </div>
        </div>
    )
}