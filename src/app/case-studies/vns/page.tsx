"use client"

import { useRef } from "react"
import VNSResults from "./components/vnsResults"
import VNSSolution from "./components/vnsSolution"
import VNSShowcase from "./components/vnsShowCase"

export default function CNSPage() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef}>
            <VNSShowcase />
            <VNSSolution />
            <VNSResults />
        </div>
    )
}