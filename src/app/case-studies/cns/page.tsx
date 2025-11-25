"use client"

import { useRef } from "react"
import CNSShowcase from "./components/cnsShowCase"
import CNSSolution from "./components/cnsSolution"
import CNSResults from "./components/cnsResults"

export default function CNSPage() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef}>
            <CNSShowcase />
            <CNSSolution />
            <CNSResults />
        </div>
    )
}