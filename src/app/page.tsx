"use client"

import { useRef } from "react"
import SectionHero from "./components/homePage/heroSection"
import SectionWork from "./components/homePage/workSection"
import SectionProjects from "./components/homePage/projectSection"
import ServiceSection from "./components/homePage/serviceSection"
import TestimonialsSection from "./components/homePage/testimonalSection"
import FlowerReveal from "./components/homePage/FlowerReveal"
import PainPointSection from "./components/homePage/painPointSection"
import ImageBottomContainer from "./components/homePage/imageBottom"
import GetAFree from "./components/homePage/getFree"
import ParallaxImage from "./components/homePage/parallaxImg"
import AnimatedText from "./components/homePage/AnimatedText"



export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef}>
      <SectionHero />
      <ParallaxImage />
      <PainPointSection />
      <div className="hidden lg:block">
        <AnimatedText />
      </div>
      <SectionWork />
      <SectionProjects />
      <ServiceSection />
      <TestimonialsSection />
      <div className="hidden lg:block">
        <FlowerReveal />
      </div>
      <ImageBottomContainer />
      <GetAFree />
    </div>
  )
}
