// app/case-studies/[slug]/page.tsx
"use client"

import { use } from "react"
import BlogDetailSection from "./components/blog-detail-section"
import { ReplyForm } from "./components/leaveAReply"
import { RelatedPosts } from "./components/related"

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = use(params)

  return (
    <div className="overflow-x-hidden">
      <BlogDetailSection id={resolvedParams.id} />
      <ReplyForm />
      <RelatedPosts currentId={resolvedParams.id} />
    </div>
  )
}