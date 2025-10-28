"use client"

import { useRef } from "react"
import BlogSection from "./components/blog"
import { ReplyForm } from "./components/leaveAReply"
import { RelatedPosts } from "./components/related"

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        // ✅ THÊM CLASS "overflow-x-hidden" TẠI ĐÂY
        <div ref={containerRef} className="overflow-x-hidden">
            <BlogSection/>
            <ReplyForm/>
            <RelatedPosts/>
        </div>
    )
}