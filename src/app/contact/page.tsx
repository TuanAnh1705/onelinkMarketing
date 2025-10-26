"use client"

import { useRef } from "react"
import TitleSection from "./components/title"
import { ContactFormSection } from "./components/form"
import Faq from "./components/faq"


export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef}>
            <TitleSection/>
            <ContactFormSection/>
            <Faq/>
        </div>
    )
}
