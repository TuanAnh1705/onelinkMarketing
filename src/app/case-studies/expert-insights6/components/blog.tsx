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

    const mainParallaxImageUrl = "/assets/bl22.png"
    const brandPositioningImageUrl = "/assets/bl23.png"
    const websiteProductsImageUrl = "/assets/bl24.png"
    const seoRankingsImageUrl = "/assets/bl25.jpg"
    const socialMediaGridUrl = "/assets/bl26.png"
    const conversionFunnelImageUrl = "/assets/bl27.png"
    const trafficReportImageUrl = "/assets/bl28.png"
    const analyticsDashboardUrl = "/assets/bl29.png"
    const trafficSourceReportImageUrl = "/assets/bl30.png"

    return (
        <div className="bg-white font-sans text-gray-800">
            {/* --- Header Section --- */}
            <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 text-left">
                {/* ✅ FIX: Giảm cỡ chữ h1 trên mobile xuống 2xl */}
                <h1 className="archivo-expanded text-2xl md:text-5xl font-medium leading-tight mb-2">
                    Boosting Vietnam Sourcing Co&apos;s Digital Presence and Lead Generation
                </h1>
                <p className="neulis-alt-regular font-medium text-gray-500">
                    By Long Nguyen & Quang Ho Quoc
                </p>
            </header>

            {/* --- Services List --- */}
            <div className="max-w-7xl mx-auto px-6 mt-8">
                {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                    About the Project
                </h2>
            </div>

            {/* --- Main Blog Introduction --- */}
            <p className="neulis-alt-regular font-medium text-lg text-[#000A1D] leading-relaxed max-w-7xl mx-auto px-6 mt-8 mb-16 md:mb-24">
                Vietnam Sourcing Co is a sourcing and manufacturing service provider based in Vietnam,
                helping international buyers find reliable factories and manage production efficiently.
                <br />
                <br />
                Although the company had strong expertise and a wide factory network, its{" "}
                <strong className="font-semibold">
                    digital presence didn&apos;t reflect its true capabilities
                </strong>
                . The old website was not SEO-optimized, the brand story lacked clarity, and content failed
                to communicate Vietnam&apos;s growing manufacturing strength to international clients.
                <br />
                <br />
                That&apos;s when{" "}
                <strong className="font-semibold">
                    Vietnam Sourcing Co partnered with OneLink Marketing
                </strong>{" "}
                to translate their operational excellence into a strong digital identity that drives
                visibility, credibility, and qualified leads from around the world.
            </p>

            {/* --- Parallax Image Section --- */}
            {/* ✅ FIX: Thêm 'hidden' và 'md:block' để ẩn trên mobile */}
            <div className="hidden md:block relative h-[500px] md:h-[700px] w-full overflow-hidden shadow-xl my-12 md:my-20">
                <div
                    className="absolute top-0 left-0 w-full h-[150%] bg-gray-200 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${mainParallaxImageUrl})`,
                        transform: `translateY(${-400 + offsetY * 0.4}px)`,
                        willChange: "transform",
                    }}
                ></div>
            </div>

            {/* --- Main Content Article --- */}
            <article className="max-w-7xl mx-auto px-6 pb-16">
                {/* --- The Challenges --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D]">The Challenges</h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        Before partnering with the agency, Vietnam Sourcing Co faced three major challenges:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Limited global brand awareness:</strong> Despite
                            their strong service quality, they lacked recognition among international buyers.
                        </li>
                        <li>
                            <strong className="font-semibold">
                                Underperforming website & low organic visibility:
                            </strong>{" "}
                            Their pages were not targeting high-intent keywords like &quot;Vietnam sourcing company&quot; or
                            &quot;manufacturing partner in Vietnam&quot;, resulting in minimal search traffic.
                        </li>
                        <li>
                            <strong className="font-semibold">Low conversion rate:</strong> Website visitors were
                            not converting into leads due to weak UX, unclear CTAs, and lack of nurturing.
                        </li>
                    </ul>
                </section>

                {/* --- Approach --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D]">
                        Our Approach: How We Solved It
                    </h2>
                </section>

                {/* --- 1. Brand Positioning --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D]">
                        1. Brand Positioning & Messaging Framework
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        We started by redefining Vietnam Sourcing Co&apos;s brand narrative — from a simple sourcing
                        agency to{" "}
                        <strong className="font-semibold">
                            &quot;a strategic partner helping global businesses manufacture smarter in Vietnam.&quot;
                        </strong>
                        <br />
                        <br />
                        This new positioning became the foundation of all marketing communication. It emphasized{" "}
                        <strong className="font-semibold">human connection, transparency, and local expertise</strong>,
                        the key values international clients look for when choosing a sourcing partner.
                    </p>
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={brandPositioningImageUrl}
                            alt="Vietnam Sourcing Co website screenshot"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- 2. SEO & Website Overhaul --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D]">
                        2. SEO & Website Overhaul
                    </h2>

                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            Conducted <strong className="font-semibold">in-depth keyword research</strong> to
                            identify high-value commercial keywords like *Vietnam sourcing*, *product sourcing
                            Vietnam*, and *manufacturing in Vietnam*.
                        </li>
                        <li>
                            Rewrote website content to be clear, search-intent aligned, and professional in tone
                            for global B2B readers.
                        </li>
                        <li>
                            Improved <strong className="font-semibold">technical SEO</strong>, website speed, and
                            internal linking structure.
                        </li>
                        <li>
                            Implemented a strong <strong className="font-semibold">off-page SEO strategy</strong>{" "}
                            with authoritative backlinks from global trade and industry sites.
                        </li>
                    </ul>

                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        Within just 4 months, the website started ranking in{" "}
                        <strong className="font-semibold">Google&apos;s Top 3 (with those important keywords)</strong> for highly competitive
                        sourcing-related terms.
                    </p>

                    <div className="flex justify-center w-full my-8">
                        <img
                            src={websiteProductsImageUrl}
                            alt="Vietnam Sourcing Co website product categories"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- 3. Social Media --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D]">
                        3. Social Media Marketing: Human-Centered Storytelling
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        Our team developed a <strong className="font-semibold">human-centered content strategy</strong>,
                        highlighting authentic factory stories, manufacturing insights, and local perspectives
                        from Vietnam.
                        <br />
                        <br />
                        Each post was crafted to emotionally resonate with business audiences, showing
                        transparency, real people, and real expertise while reinforcing brand trust.
                        <br />
                        <br />
                        We also established a cohesive{" "}
                        <strong className="font-semibold">visual identity system</strong> to ensure every post
                        reflected Vietnam Sourcing Co&apos;s brand values of reliability and precision.
                    </p>
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={seoRankingsImageUrl}
                            alt="Google keyword rankings report"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    
                </section>

                {/* --- 4. Conversion Optimization --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D]">
                        4. Conversion Optimization & Email Automation
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        We then focused on turning traffic into leads:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-3 leading-relaxed">
                        <li>Redesigned CTAs and optimized inquiry forms.</li>
                        <li>
                            Created an <strong className="font-semibold">automated 7-day nurturing funnel</strong>{" "}
                            for new leads.
                        </li>
                        <li>Segmented audiences based on behavior.</li>
                        <li>Personalized follow-up emails to drive engagement.</li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        This approach steadily increased inbound leads from the{" "}
                        <strong className="font-semibold">U.S., Australia, and the EU</strong>, establishing a
                        sustainable pipeline of qualified prospects.
                    </p>

                    <div className="flex justify-center w-full my-8">
                        <img
                            src={socialMediaGridUrl}
                            alt="Social media post grid"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- Results --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl (từ 3xl) */}
                    <h2 className="archivo-expanded text-2xl md:text-3xl font-medium text-[#000A1D]">Our Results</h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        After 4 months of implementation, Vietnam Sourcing Co achieved measurable growth:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">+187% organic traffic growth</strong>
                        </li>
                        <li>
                            <strong className="font-semibold">Top 1 Google rankings</strong> for &quot;Vietnam sourcing company&quot; and &quot;product sourcing in Vietnam&quot;
                        </li>
                        <li>
                            <strong className="font-semibold">Steady inbound leads</strong> from verified international buyers (U.S., Australia, EU)
                        </li>
                        <li>
                            <strong className="font-semibold">+45% session duration</strong> and{" "}
                            <strong className="font-semibold">-30% bounce rate</strong> showing stronger engagement{" "}
                            <strong className="font-semibold">Boosted brand authority</strong> positioning Vietnam Sourcing Co as a credible global sourcing partner
                        </li>
                    </ul>

                    <div className="flex justify-center w-full my-8">
                        <img
                            src={conversionFunnelImageUrl}
                            alt="Conversion Rate Report Funnel"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <div className="flex flex-col gap-8 justify-center w-full my-8">
                        <img
                            src={analyticsDashboardUrl}
                            alt="Google Analytics Dashboard"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                        <img
                            src={trafficReportImageUrl}
                            alt="Traffic Source Report"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                        <img
                            src={trafficSourceReportImageUrl}
                            alt="Traffic Source Report"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- Quote --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D]">Quote</h2>
                    <blockquote className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed pl-6 italic border-l-4 border-gray-300"> {/* ✅ FIX: Thêm border-l */}
                        &quot;Before working with the agency, we were doing great work but nobody knew about it
                        online. Now, our content and SEO strategy consistently bring in the right leads and help
                        us tell the Vietnam sourcing story the way it deserves to be told.&quot;
                    </blockquote>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed text-left">
                        Quang Ho, Marketing Manager
                    </p>
                </section>

                {/* --- Key Takeaway --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                     {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D]">Key Takeaway</h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        The partnership between <strong className="font-semibold">OneLink Marketing</strong> and{" "}
                        <strong className="font-semibold">Vietnam Sourcing Co</strong> demonstrates how a
                        strategic, full-funnel marketing approach can{" "}
                        <strong className="font-semibold">turn operational expertise into brand power</strong>.
                        <br />
                        <br />
                        By combining{" "}
                        <strong className="font-semibold">
                            SEO, content, social media, and conversion optimization
                        </strong>
                        , we helped Vietnam Sourcing Co not only attract visibility but convert it into business
                        growth.
                        <br />
                        <br />
                        Today, the company stands as one of{" "}
                        <strong className="font-semibold">Vietnam&apos;s most trusted sourcing partners</strong> for
                        global buyers, with a digital presence that truly reflects its value.
                        <br />
                        <br />
                        <strong className="font-semibold">OneLink Marketing</strong> – We don’t just do
                        marketing.
                        <br />
                        We build ecosystems that connect great businesses with the world.
                    </p>
                </section>

                {/* --- Footer --- */}
                <footer className="mt-24 pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <span className="neulis-alt-regular font-medium text-[#000A1D]">Tags:</span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Case Study
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        SEO
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Lead Generation
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Brand Positioning
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