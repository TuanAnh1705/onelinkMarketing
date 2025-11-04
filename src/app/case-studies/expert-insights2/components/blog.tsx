"use client"

import type React from "react"
import { useState, useEffect } from "react"

const BlogSection = () => {
    const [offsetY, setOffsetY] = useState(0)

    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // 💡 Đã cập nhật các đường dẫn ảnh để phù hợp với nội dung Blog 3
    const mainParallaxImageUrl = "/assets/bl4.png" // 👈 Ảnh "Dominate Target Keywords..."
    const topicClusterDiagramUrl = "/assets/bl10.png" // 👈 Ảnh biểu đồ "Topic clustering model"

    return (
        <div className="bg-white font-sans text-gray-800">
            {/* --- Header Section (Narrow Width) --- */}
            <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 text-left">
                <h1 className="archivo-expanded text-4xl md:text-5xl font-medium leading-tight mb-2">
                    The SEO Topic Cluster Model: How to Dominate Target Keywords and Build Sustainable Brand Authority
                </h1>
                <p className="neulis-alt-regular font-medium text-gray-500">By Tuan Nguyen</p>
            </header>

            {/* --- Main Blog Introduction (Narrow Width) --- */}
            <p className="neulis-alt-regular font-medium text-lg text-[#000A1D] leading-relaxed max-w-7xl mx-auto px-6 mt-8 mb-16 md:mb-24">
                Most corporate blogs make a common mistake: they create “random acts of content.” One day they write about a trend, the next a small tip, and the following week they analyze a completely different topic. The result is a collection of disconnected articles that confuses both Google and your readers. This approach might bring in sporadic traffic, but it will never help you build true authority or dominate the topics that matter most in your industry.
                <br /><br />
                If you want to escape the cycle of directionless content creation and start building a valuable, long-term marketing asset, it’s time to adopt the <strong className="font-semibold">Topic Cluster model</strong>.
                <br /><br />
                This isn’t just an SEO tactic; it’s a philosophy for organizing your content to become the most trusted resource in your field. In this article, we’ll break down what the Topic Cluster model is, why it’s incredibly effective, and provide a step-by-step guide on how you can implement it to build sustainable brand authority.
            </p>

            {/* --- Parallax Image Section (Full-width) --- */}
            <div className="relative h-[500px] md:h-[700px] w-full overflow-hidden shadow-xl my-12 md:my-20">
                <div
                    className="absolute top-0 left-0 w-full h-[150%] bg-gray-200 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${mainParallaxImageUrl})`, // Sử dụng ảnh chính mới
                        transform: `translateY(${-400 + offsetY * 0.4}px)`,
                        willChange: "transform",
                    }}
                ></div>
            </div>

            {/* --- Main Content Article --- */}
            <article className="max-w-7xl mx-auto px-6 pb-16">
                
                {/* --- What is a Topic Cluster? --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        What is a Topic Cluster? Decoding the Power Structure
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Imagine your content is organized like an in-depth book rather than a messy pile of magazines. That’s the core idea behind the Topic Cluster model. This model consists of three main components:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Pillar Page:</strong> This is the “main chapter” of your book. It’s a long, comprehensive piece of content that covers a broad and competitive topic (e.g., “A Beginner’s Guide to Digital Marketing”). This page doesn’t go into extreme detail on every single aspect but serves as a central hub—an overview map of the entire subject.
                        </li>
                        <li>
                            <strong className="font-semibold">Cluster Content:</strong> These are the “sub-sections” within the chapter, designed to dive deep into specific facets of the main topic. They are shorter, more focused blog posts targeting detailed, long-tail keywords (e.g., “how to write effective email subject lines,” “5 steps to optimize on-page SEO,” “a guide to running Facebook Ads”).
                        </li>
                        <li>
                            <strong className="font-semibold">Internal Links:</strong> This is the glue that holds the entire structure together. Every piece of cluster content links back to the pillar page. In turn, the pillar page links out to all of the relevant cluster content.
                        </li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        This tightly-knit network creates an organized “topic cluster,” signaling to both users and search engines that you have deep, comprehensive knowledge of your subject matter.
                    </p>
                </section>

                {/* --- Why is the Topic Cluster Model So Effective? --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Why is the Topic Cluster Model So Effective?
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        This approach offers a dual benefit: it’s optimized for Google’s algorithms while simultaneously enhancing the user experience.
                    </p>

                    <h3 className="archivo-expanded text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        For Search Engines (Google):
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Optimized for Semantic Search:</strong> Google no longer just matches individual keywords. Its algorithms are smart enough to understand topics and the relationships between concepts. A well-organized topic cluster shows Google that you are an expert on an entire subject, not just knowledgeable about a few keywords.
                        </li>
                        <li>
                            <strong className="font-semibold">Builds Topical Authority:</strong> When you cover a topic comprehensively with numerous interlinked articles, you build “Topical Authority.” This is an incredibly important ranking factor. Once Google recognizes you as an authority on a subject, all pages within that cluster have a better chance of ranking higher.
                        </li>
                        <li>
                            <strong className="font-semibold">Clear Website Architecture:</strong> The tight internal linking structure makes it easy for Google’s bots to crawl, understand your site’s architecture, and see the relationships between your content.
                        </li>
                    </ul>

                    {/* Image for Topic Cluster Model */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={topicClusterDiagramUrl}
                            alt="Diagram of the Topic Cluster Model"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    <h3 className="archivo-expanded text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        For Users (Your Customers):
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Superior User Experience:</strong> Readers can easily find all the information they need on a broad topic right on your website. They can start with a specific question (a cluster article) and seamlessly navigate to a broader overview (the pillar page) to learn more. This keeps them on your site longer.
                        </li>
                        <li>
                            <strong className="font-semibold">Builds Trust and Credibility:</strong> Instead of finding a single article that answers one question, users discover an entire, well-organized library of knowledge. This immediately positions you as a helpful and trustworthy expert, not just a vendor.
                        </li>
                    </ul>
                </section>

                {/* --- 5-Step Guide --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        A 5-Step Guide to Implementing the Topic Cluster Model
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Adopting this model requires a strategic plan. Here is a 5-step roadmap to get you started:
                    </p>

                    <h3 className="archivo-expanded text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Step 1: Identify Your Core Topics (Pillar Topics)
                    </h3>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Think about the broad, overarching subjects that your business addresses. These are not long-tail keywords but core concepts. Ask yourself: “What are the 5-10 biggest problems or topics my customers care about?”
                        <br />
                        <strong className="font-normal">Example:</strong> A marketing agency might choose pillar topics like: “Content Marketing,” “SEO,” “Social Media Marketing,” and “Email Marketing.”
                    </p>

                    <h3 className="archivo-expanded text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Step 2: Conduct Keyword Research for Your Clusters (Cluster Keywords)
                    </h3>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        For each pillar topic, brainstorm all the specific questions, problems, and sub-topics your customers are searching for. Use keyword research tools to find long-tail, detailed keywords related to your pillar topic.
                        <br />
                        <strong className="font-normal">Example:</strong> For the “Content Marketing” pillar, cluster keywords could be: “how to create a content plan,” “how to write an SEO-friendly blog post,” “types of content marketing,” “how to measure content effectiveness.”
                    </p>

                    <h3 className="archivo-expanded text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Step 3: Create Your Pillar Page
                    </h3>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        This is the most critical part. Create a comprehensive, high-quality overview (often called “10x content”) for your core topic. This page should cover all the main sub-topics you identified in Step 2 and link out to the cluster articles where readers can learn more.
                    </p>

                    <h3 className="archivo-expanded text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Step 4: Write Your Cluster Content
                    </h3>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Now, create individual blog posts for each of the cluster keywords you researched. Each article should focus on solving one specific problem in a detailed and in-depth manner.
                    </p>

                    <h3 className="archivo-expanded text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Step 5: Link It All Together
                    </h3>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        This step is non-negotiable.
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            From each piece of cluster content, place at least one internal link pointing back to the pillar page using relevant anchor text.
                        </li>
                        <li>
                            On the pillar page, ensure you have links pointing out to all of the corresponding cluster articles.
                        </li>
                    </ul>
                </section>


                {/* --- Conclusion --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Conclusion: Stop Producing Content, Start Building Authority
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        The Topic Cluster model represents a shift from “producing content” to “building a knowledge asset.” It allows you to escape the content quantity race and focus on creating real value for your readers, all while sending the strongest possible signals to Google about your expertise.
                        <br /><br />
                        By adopting this strategy, you will not only improve your SEO rankings sustainably but also build a reputable brand that becomes the go-to resource for customers in your industry.
                        <br /><br />
                        <strong className="font-semibold">Ready to transform your blog into an authority-building, lead-generating machine? Contact Onelink Marketing today for a consultation on how to design and implement an effective Topic Cluster strategy for your business.</strong>
                    </p>
                </section>

                {/* --- Footer (Tags) --- */}
                <footer className="mt-24 pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm max-w-7xl mx-auto">
                    <span className="neulis-alt-regular font-medium text-[#000A1D]">
                        Tags:
                    </span>
                    {/* 💡 Đã cập nhật tags để phù hợp với Blog 3 */}
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        SEO
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Content Marketing
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Topic Cluster
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Brand Authority
                    </span>
                </footer>
            </article>
        </div>
    )
}

export default BlogSection