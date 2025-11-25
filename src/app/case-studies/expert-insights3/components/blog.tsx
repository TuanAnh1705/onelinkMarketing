"use client"

import type React from "react"
import { useState, useEffect } from "react"

const BlogSection = () => {
    const [offsetY, setOffsetY] = useState(0)

    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        // ✅ FIX: Tối ưu: Chỉ chạy parallax trên desktop (>= 768px)
        const checkWidthAndAddListener = () => {
            const isDesktop = window.innerWidth >= 768 // Tailwind's 'md' breakpoint

            if (isDesktop) {
                window.addEventListener("scroll", handleScroll)
            } else {
                window.removeEventListener("scroll", handleScroll)
            }
        }

        checkWidthAndAddListener()
        window.addEventListener("resize", checkWidthAndAddListener)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", checkWidthAndAddListener)
        }
    }, [])

    // 💡 Đã cập nhật các đường dẫn ảnh để phù hợp với nội dung Blog 4
    const mainParallaxImageUrl = "/assets/bl5.png" // 👈 Ảnh "Data-Driven Roadmap..."
    const seoToolsImageUrl = "/assets/bl11.png" // 👈 Ảnh "SEO Tools for competitors research"
    const backlinksImageUrl = "/assets/bl12.png" // 👈 Ảnh "Backlinks: YourWebsite.com"

    return (
        <div className="bg-white font-sans text-gray-800">
            {/* --- Header Section (Narrow Width) --- */}
            <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 text-left">
                {/* ✅ FIX: Giảm cỡ chữ h1 trên mobile xuống 2xl */}
                <h1 className="archivo-expanded text-2xl md:text-5xl font-medium leading-tight mb-2">
                    Content Competitor Analysis: A Data-Driven Roadmap to Find Market Gaps and Dominate Your Niche
                </h1>
                <p className="neulis-alt-regular font-medium text-gray-500">By Long Nguyen</p>
            </header>

            {/* --- Main Blog Introduction (Narrow Width) --- */}
            <p className="neulis-alt-regular font-medium text-lg text-[#000A1D] leading-relaxed max-w-7xl mx-auto px-6 mt-8 mb-16 md:mb-24">
                Most businesses create content in a vacuum. They rely on internal assumptions, guess what their customers want, and hope their content stands out. This approach is like navigating through a dense fog—you might be moving, but you have no idea where you’re going or what you’re about to run into.
                <br /><br />
                The result of this guesswork is a sea of look-alike content that fails to differentiate, wastes resources, and delivers no real business impact. Meanwhile, your competitors are capturing the attention of the very customers you’re trying to reach.
                <br /><br />
                If you want to stop wasting your budget and start building a deliberate content strategy to win your market, you need a data-driven map. That map is a <strong className="font-semibold">Content Competitor Analysis</strong>. This isn’t about copying your rivals; it’s about using data to reverse-engineer what they’re doing right, identify what they’re missing, and, most importantly, find the “market gaps” where you can dominate.
                <br /><br />
                This article provides a detailed, mindset-focused roadmap to help you analyze your competition, identify opportunities, and build a content plan that establishes you as a leader in your field.
            </p>

            {/* --- Parallax Image Section (Full-width) --- */}
            {/* ✅ FIX: Thêm 'hidden' và 'md:block' để ẩn trên mobile */}
            <div className="hidden md:block relative h-[500px] md:h-[700px] w-full overflow-hidden shadow-xl my-12 md:my-20">
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
                
                {/* --- Step 1: Identify Your True Content Competitors --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Step 1: Identify Your True Content Competitors
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        The first mistake many businesses make is looking only at their direct business competitors. In the world of content, however, your competitor is <strong className="font-semibold">anyone who is capturing the attention of your target audience</strong>. This can include industry publications, specialized blogs, or even influential experts.
                    </p>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        The Analytical Mindset:
                    </h3>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Instead of guessing, let data lead the way. Use professional SEO tools to answer the question: “Which websites consistently show up when my ideal customers are searching for solutions?” These platforms allow you to enter your domain and automatically discover the competitors who are ranking for the same set of keywords. You will often uncover rivals you never even considered.
                    </p>
                </section>

                {/* --- Step 2: Decode Your Competitors’ Strategy with Data --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Step 2: Decode Your Competitors’ Strategy with Data
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Once you have your list of competitors, it’s time to use the power of analytics tools to deeply understand their strategy.
                    </p>

                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Uncover Their Content “Goldmine”:
                    </h3>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        <strong className="font-semibold">The Mindset:</strong> “What are our competitors’ most successful pieces of content?” Analytics tools can show you exactly which pages on a competitor’s website are driving the most organic traffic. These are their proven winners—their “pillar” content and the topics they are excelling at. Analyze the themes and formats of these pages to understand what resonates with the audience.
                    </p>
                    
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Analyze Their Keyword DNA:
                    </h3>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        <strong className="font-semibold">The Mindset:</strong> “Which keywords are our competitors targeting and winning?” SEO tools allow you to see the entire list of keywords a website is ranking for. This helps you understand if they are focusing on informational keywords (to build awareness) or commercial keywords (to drive sales).
                    </p>

                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Reverse-Engineer Their “Authority”:
                    </h3>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        <strong className="font-semibold">The Mindset:</strong> “Why does Google trust their content?” High-ranking content isn’t just well-written; it’s authoritative. Analytics tools let you see which websites are linking back to your competitors’ top articles. This helps answer the question: What kind of content earns the most recognition from the community (backlinks)?
                    </p>
                    
                    {/* Image for SEO Tools */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={seoToolsImageUrl}
                            alt="Logos of SEO tools for competitor research like Semrush, Ahrefs, Ubersuggest"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- Step 3: Find the Golden Opportunities (The Gaps) --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Step 3: Find the Golden Opportunities (The Gaps)
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        This is the most critical step: turning data into actionable opportunities.
                    </p>

                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Keyword Gaps — The Low-Hanging Fruit:
                    </h3>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        “What are our competitors talking about that we are completely missing?” Most professional SEO platforms have a “Keyword Gap Analysis” feature. You can compare your domain against your competitors to generate a list of keywords they are ranking for, <strong className="font-semibold">but you are not</strong>. These are golden opportunities—the clearest gaps in your content strategy that you can begin to target immediately.
                    </p>

                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Depth and Format Gaps — The Strategic Advantage:
                    </h3>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        “Where can we be significantly better than them?” Review the list of your competitors’ most successful articles and ask yourself:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">On Depth:</strong> “This article is good, but can we create a version that is <strong className="font-semibold">10 times better</strong>?” More comprehensive, with more recent data, including video tutorials or real-world case studies? If the answer is yes, that’s a depth gap.
                        </li>
                        <li>
                            <strong className="font-semibold">On Format:</strong> “All of their top articles are text-based blog posts. Is there an opportunity for a detailed video guide, an expert interview podcast, an online calculator tool, or a summary infographic on this topic?” This is a format gap.
                        </li>
                    </ul>
                </section>

                {/* --- Step 4: Build Your Domination Plan --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Step 4: Build Your Domination Plan
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Now, synthesize all the opportunities you’ve found into a data-driven action plan.
                    </p>
                    <ol className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-decimal pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Prioritize Your Opportunities:</strong> Start with the keywords from your “gap analysis” that have reasonable search volume and moderate difficulty. These are your quick wins.
                        </li>
                        <li>
                            <strong className="font-semibold">Create “10x Content”:</strong> Select one or two topics where your competitors are strongest and set a goal to create a piece of content that is unequivocally superior.
                        </li>
                        <li>
                            <strong className="font-semibold">Fill the Format Gaps:</strong> Plan to produce content in the fresh formats your competitors are ignoring to attract a different segment of the audience.
                        </li>
                        <li>
                            <strong className="font-semibold">Build a Deliberate Authority Strategy:</strong> Based on your backlink analysis, identify the types of content that are most likely to be cited and create assets worthy of community recognition.
                        </li>
                    </ol>

                    {/* Image for Backlinks */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={backlinksImageUrl}
                            alt="Dashboard showing backlink analysis for a website"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- Conclusion --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Conclusion: Stop Guessing, Start Analyzing
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Competitor content analysis is not a one-time task. It’s an ongoing process that keeps you one step ahead. By adopting a data-driven analytical mindset, you can shift from “guessing” to “knowing”—knowing exactly what the competitive landscape looks like, where the opportunities lie, and how to win.
                        <br /><br />
                        Moving from guesswork to systematic analysis is the foundation of every successful content strategy. It helps you build a sustainable competitive advantage, not only by attracting customers but by establishing your brand as a trusted authority in your industry.
                        <br /><br />
                        <strong className="font-semibold">Analyzing competitors and building a winning content strategy requires time and expertise. Contact Onelink Marketing today to get a data-driven roadmap designed to help you dominate your market.</strong>
                    </p>
                </section>

                {/* --- Footer (Tags) --- */}
                <footer className="mt-24 pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm max-w-7xl mx-auto">
                    <span className="neulis-alt-regular font-medium text-[#000A1D]">
                        Tags:
                    </span>
                    {/* 💡 Đã cập nhật tags để phù hợp với Blog 4 */}
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Content Strategy
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Competitor Analysis
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        SEO
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Market Gaps
                    </span>
                </footer>
            </article>
        </div>
    )
}

export default BlogSection