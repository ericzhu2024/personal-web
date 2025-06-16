"use client"
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from '@/components/SKills'
import NavBar from '@/components/Navbar'
import Toggle from '@/components/sub/Toggle'
import Load from '@/components/sub/Load'
import Education from "@/components/Education";
import Project from '@/components/Project'
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [id,setId] = useState(0)
  const compsRef = useRef(null) 

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting
          if(intersecting){
            setId(entry.target.id)
          }
        })
      }, {threshold: 0.3},
    )

    const compsArr = Array.from(compsRef.current.children)
    compsArr.forEach((comp)=>{
      observer.observe(comp)
    })
  },[])
  return (
    <>
      <Load />
      <Toggle>
        <NavBar id={id}/>
        <div ref={compsRef}>
          {/* <Education />
          <Project /> */}
          <Hero />
          <About />
          <Skills />
        </div>
      </Toggle>
    </>
  );
}
