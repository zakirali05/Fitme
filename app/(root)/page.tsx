"use client"

import { Contact } from '@/components/Contact'
import { Gallery } from '@/components/Gallery'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { SheetComponent } from '@/components/Sheet'
import { TableComponent } from '@/components/TableComponent'
import { Testimonials } from '@/components/Testimonials'
import { Training } from '@/components/Training'
import {Footer} from "@/components/Footer"
import { useEffect, useState } from 'react'
export default function Home() {
  const [isMounted , setIsMounted] = useState(false)
  useEffect(()=>{
    setIsMounted(true)
  },[])
  return (
isMounted ? <> <div>
  <Navbar />
  <SheetComponent />
  <Hero />
 <Training/>
 <Gallery/>
 <TableComponent/>
 <Testimonials/>
 <Contact/>
 <Footer/>
</div></> : <></>

   
  )
}
