"use client"

import { useRef } from "react"

import HeroSection from "./components/hero"
import UspSectionForPaid from "./components/Usp"
import FaqForPaid from "./components/faqForPaid"
import TestimonialsForPaid from "./components/testimonialForPaid"


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef}>
      <HeroSection/>
      <UspSectionForPaid/>
      <FaqForPaid/>
      <TestimonialsForPaid/>
    </div>
  )
}