"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

const BlogSection = () => {
    const [offsetY, setOffsetY] = useState(0)
    const image1Ref = useRef<HTMLImageElement>(null)
    const image2Ref = useRef<HTMLImageElement>(null)
    const image3Ref = useRef<HTMLImageElement>(null)

    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const getParallaxOffset = (
        ref: React.RefObject<HTMLImageElement | null>,
        speed: number,
    ) => {
        if (!ref.current) return 0
        const rect = ref.current.getBoundingClientRect()
        const elementTopInViewport = rect.top
        const windowHeight = window.innerHeight

        const progress = windowHeight - elementTopInViewport

        if (progress > 0) {
            return progress * speed - 100
        }
        return -100
    }

    const mainParallaxImageUrl = "/assets/bl.png" // 👈 Thay đổi đường dẫn ảnh chính (nếu cần)
    const phase1DiagramUrl = "/assets/bl1.png" // 👈 Đường dẫn ảnh cho Phase 1
    const phase3TableUrl = "/assets/bl2.png" // 👈 Đường dẫn ảnh cho Phase 3
    const resultsChartUrl = "/assets/bl3.png" // 👈 Đường dẫn ảnh cho Results

    return (
        <div className="bg-white font-sans text-gray-800">
            {/* --- Header Section (Narrow Width) --- */}
            <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 text-left">
                <h1 className="archivo-expanded text-4xl md:text-5xl font-medium leading-tight mb-2">
                    How We Cut Customer Acquisition Cost (CAC) by 50% by Shifting Budget from Paid Ads to Content SEO
                </h1>
                <p className="neulis-alt-regular font-medium text-gray-500">By Long Nguyen & Tuan Nguyen</p>
            </header>

            {/* --- Main Blog Introduction (Narrow Width) --- */}
            <p className="neulis-alt-regular font-medium text-lg text-[#000A1D] leading-relaxed max-w-7xl mx-auto px-6 mt-8 mb-16 md:mb-24">
                Rising ad costs and diminishing returns. It’s a harsh reality many businesses face. You’re constantly feeding the budget for paid advertising (Paid Ads) just to maintain a steady stream of leads, running on a hamster wheel with no end in sight. The moment you stop paying, the lead flow dries up.
                <br /><br />
                This was the exact challenge our client, <strong className="font-semibold">Vietnam Sourcing</strong>—a firm dedicated to providing sourcing and supply chain management services for international businesses—was struggling with. Their Customer Acquisition Cost (CAC) was skyrocketing, eroding profits and forcing leadership to question the sustainability of their growth model.
                <br /><br />
                In this case study, we’ll break down how Onelink Marketing helped Vietnam Sourcing escape its dependency on paid ads and <strong className="font-semibold">achieve a 50% reduction in CAC within 12 months</strong> through a strategic budget shift from Paid Ads to Content SEO.
            </p>

            {/* --- Parallax Image Section (Full-width) --- */}
            <div className="relative h-[500px] md:h-[700px] w-full overflow-hidden shadow-xl my-12 md:my-20">
                <div
                    className="absolute top-0 left-0 w-full h-[150%] bg-gray-200 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${mainParallaxImageUrl})`, // Sử dụng ảnh chính của bạn
                        transform: `translateY(${-400 + offsetY * 0.4}px)`,
                        willChange: "transform",
                    }}
                ></div>
                {/* 💡 Có vẻ như ảnh chính của bạn có text sẵn, nên không cần overlay nữa */}
            </div>

            {/* --- Main Content Article --- */}
            <article className="max-w-7xl mx-auto px-6 pb-16">
                
                {/* --- The Background: The Pitfalls of Paid Ad Dependency --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        The Background: The Pitfalls of Paid Ad Dependency
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Before partnering with Onelink Marketing, Vietnam Sourcing’s marketing strategy relied almost entirely on Google Ads to reach overseas business clients. This approach delivered quick initial results, but they soon faced three critical issues:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-decimal pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Skyrocketing CAC:</strong> As more competitors entered the market, the cost-per-click (CPC) for keywords like “Vietnam Sourcing” or “Furniture Manufacturer Vietnam” soared. Their cost to acquire a new client had nearly doubled in just one year.
                        </li>
                        <li>
                            <strong className="font-semibold">Unsustainable Growth:</strong> Leads and revenue were directly tied to the daily ad spend. This created a high-risk business model with no marketing assets being built to accumulate value over time.
                        </li>
                        <li>
                            <strong className="font-semibold">Difficulty Building Trust:</strong> For international clients, choosing a sourcing partner in Vietnam requires a tremendous amount of trust. A simple ad wasn’t enough to convey the expertise and credibility of Vietnam Sourcing’s “on-the-ground” team.
                        </li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Their goal was clear: find a more efficient, sustainable, and trustworthy channel for customer acquisition.
                    </p>
                </section>

                {/* --- The Solution: A Strategic Shift from "Renting" to "Owning" Your Audience --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        The Solution: A Strategic Shift from &quot;Renting&quot; to &quot;Owning&quot; Your Audience
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        We proposed a fundamental change in mindset: instead of continuously “renting” customer attention through ads, it was time to “own” a sustainable acquisition channel by building high-quality content and optimizing for search engines (Content SEO).
                        <br /><br />
                        The transition was executed in three distinct phases:
                    </p>
                </section>

                {/* --- Phase 1: Strategic Analysis and Planning (Months 1-2) --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Phase 1: Strategic Analysis and Planning (Months 1-2)
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        We didn’t just turn off the ads. We started with a deep analysis to build a solid foundation.
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Competitor and Content Gap Analysis:</strong> We identified what competitors were doing well and, more importantly, uncovered “content gaps”—the questions and pain points of international buyers that remained unanswered, such as quality control processes, logistics challenges, or finding reliable suppliers.
                        </li>
                        <li>
                            <strong className="font-semibold">Strategic Keyword Research:</strong> Instead of just targeting high-volume keywords, we focused on long-tail keywords that demonstrated clear commercial intent, such as “how to quality control garments in Vietnam” or “cost to ship furniture from Vietnam to USA.”
                        </li>
                        <li>
                            <strong className="font-semibold">Topic Cluster Architectures:</strong> We designed a content structure around Vietnam’s key export industries like Textiles, Furniture, and Handicrafts. Each industry served as a “Pillar Page,” supported by “Cluster Content” that addressed specific customer problems.
                        </li>
                    </ul>
                    {/* Image for Phase 1 */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={phase1DiagramUrl}
                            alt="Diagram of Topic Cluster Architectures for Vietnam Sourcing"
                            className="max-w-full h-auto rounded-lg shadow-md"
                            // 💡 Thêm ref nếu muốn hiệu ứng parallax riêng cho ảnh này
                        />
                    </div>
                </section>

                {/* --- Phase 2: Intelligent Budget Reallocation (Months 3-6) --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Phase 2: Intelligent Budget Reallocation (Months 3-6)
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        This was the pivotal transition phase, executed in a controlled manner to ensure lead flow was not disrupted.
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Reduced Paid Ads Budget by 30%:</strong> This budget was directly reallocated to the production of pillar pages and in-depth, expert-driven articles.
                        </li>
                        <li>
                            <strong className="font-semibold">Maintained High-Performing Campaigns:</strong> We kept the most effective retargeting and bottom-of-funnel ad campaigns running, targeting businesses already familiar with the brand or in the final stages of their decision-making process.
                        </li>
                    </ul>
                </section>

                {/* --- Phase 3: Content SEO Execution and Optimization (Months 7-12) --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Phase 3: Content SEO Execution and Optimization (Months 7-12)
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        With the foundation in place, we focused on scaling and optimization.
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Producing Expert-Led Content:</strong> Our team created detailed guides, market analyses, and helpful handbooks that showcased Vietnam Sourcing’s on-the-ground expertise and experience.
                        </li>
                        <li>
                            <strong className="font-semibold">On-Page Optimization and Link Building:</strong> Every piece of content was meticulously optimized. We also launched a quality link-building campaign, earning links from international trade publications and blogs to boost the website’s authority and rankings.
                        </li>
                        <li>
                            <strong className="font-semibold">Further Reduction in Paid Ads:</strong> As organic traffic grew steadily, we cut the ad budget by another 40%, retaining only a small portion for brand and remarketing campaigns.
                        </li>
                    </ul>
                    {/* Image for Phase 3 */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={phase3TableUrl}
                            alt="Table showing content performance and keyword rankings in Phase 3"
                            className="max-w-full h-auto rounded-lg shadow-md"
                            // 💡 Thêm ref nếu muốn hiệu ứng parallax riêng cho ảnh này
                        />
                    </div>
                </section>

                {/* --- The Results: The Numbers Speak for Themselves --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        The Results: The Numbers Speak for Themselves
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        After 12 months, the results of this strategic shift exceeded our client’s expectations.
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Customer Acquisition Cost (CAC) Decreased by 50%:</strong> This was the most significant win. The cost to secure a new sourcing contract was cut in half, dramatically increasing their profit margins.
                        </li>
                        <li>
                            <strong className="font-semibold">Organic Traffic Increased by 350%:</strong> The website saw steady, sustainable growth in organic traffic, which became its largest source of visitors.
                        </li>
                        <li>
                            <strong className="font-semibold">Organic Leads Increased by 400%:</strong> Crucially, this traffic has highly qualified, as the content attracted businesses actively researching sourcing solutions in Vietnam.
                        </li>
                        <li>
                            <strong className="font-semibold">A Sustainable Marketing Asset Was Built:</strong> The content now serves as a digital asset, generating high-quality leads 24/7 without any additional ad spend. Its value continues to compound over time.
                        </li>
                    </ul>
                    {/* Image for Results */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={resultsChartUrl}
                            alt="Chart showing increase in organic traffic and leads"
                            className="max-w-full h-auto rounded-lg shadow-md"
                            // 💡 Thêm ref nếu muốn hiệu ứng parallax riêng cho ảnh này
                        />
                    </div>
                </section>

                {/* --- Analysis: Why This Strategy Worked --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Analysis: Why This Strategy Worked
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        The project’s success stemmed from a core shift in marketing philosophy:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-decimal pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Focus on Building Trust:</strong> In the sourcing industry, credibility is everything. By providing valuable, expert content, Vietnam Sourcing established itself as a trusted authority before a potential client even made contact, shortening the sales cycle.
                        </li>
                        <li>
                            <strong className="font-semibold">Investment in Long-Term Value:</strong> Instead of paying for every click, the client invested in an asset that generates compounding returns over time.
                        </li>
                        <li>
                            <strong className="font-semibold">Data-Driven Strategy:</strong> We leveraged performance data from past paid ad campaigns to inform a precise and effective SEO strategy, creating a powerful optimization loop.
                        </li>
                    </ul>
                </section>

                {/* --- Key Takeaways for Your Business --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Key Takeaways for Your Business
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        The story of Vietnam Sourcing proves that over-reliance on paid advertising is a risky and expensive long-term strategy. In a world of escalating ad costs, building marketing channels you “own”—like Content SEO—is no longer an option but a necessity for sustainable growth, especially for B2B service industries where trust is paramount.
                        <br /><br />
                        Are you facing rising advertising costs? It might be time to rethink your budget allocation.
                        <br /><br />
                        <strong className="font-semibold">Contact Onelink Marketing today for a consultation on how to build a sustainable growth engine that reduces costs and maximizes profits for your business.</strong>
                    </p>
                </section>


                {/* --- Footer (Tags) --- */}
                <footer className="mt-24 pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm max-w-7xl mx-auto">
                    <span className="neulis-alt-regular font-medium text-[#000A1D]">
                        Tags:
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Case Study
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        SEO
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Content Marketing
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        B2B Marketing
                    </span>
                </footer>
            </article>
        </div>
    )
}

export default BlogSection

