import { Contact } from '@/components/Contact'
import { Gallery } from '@/components/Gallery'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { SheetComponent } from '@/components/Sheet'
import { TableComponent } from '@/components/TableComponent'
import { Testimonials } from '@/components/Testimonials'
import { Training } from '@/components/Training'
import {Footer} from "@/components/Footer"
export default function Home() {
  return (
    <div>
      <Navbar />
      <SheetComponent />
      <Hero />
     <Training/>
     <Gallery/>
     <TableComponent/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  )
}
