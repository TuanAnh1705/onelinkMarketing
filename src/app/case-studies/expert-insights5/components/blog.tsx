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

    // 💡 Đã cập nhật các đường dẫn ảnh để phù hợp với Case Study
    const mainParallaxImageUrl = "/assets/bl15.png" // 👈 Ảnh tiêu đề
    const websiteHeroImageUrl = "/assets/bl16.png" // 👈 Ảnh website
    const trafficReportImageUrl = "/assets/bl17.png" // 👈 Ảnh Traffic Source
    const conversionFunnelImageUrl = "/assets/bl18.png" // 👈 Ảnh Conversion Rate
    const socialMediaGridUrl = "/assets/bl19.png" // 👈 Ảnh Social Media
    const emailChartsUrl = "/assets/bl20.png" // 👈 Ảnh Email Marketing
    const reportingDashboardUrl = "/assets/bl21.png"

    return (
        <div className="bg-white font-sans text-gray-800">
            {/* --- Header Section (Narrow Width) --- */}
            <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 text-left">
                {/* ✅ FIX: Giảm cỡ chữ h1 trên mobile xuống 2xl */}
                <h1 className="archivo-expanded text-2xl md:text-5xl font-medium leading-tight mb-2">
                    Building a Conversion-Focused Digital Presence for China Sourcing Co
                </h1>
                <p className="neulis-alt-regular font-medium text-gray-500">By Long Nguyen & Quang Ho Quoc</p>
            </header>


            {/* --- Main Blog Introduction (Narrow Width) --- */}
            {/* ✅ FIX: Đã thay đổi thẻ <p> cha thành <div>.
                Lỗi hydration xảy ra vì <ul> không thể là con của <p>.
                Các khối văn bản giờ được bọc trong thẻ <p> riêng của chúng.
                Thêm 'space-y-6' để tạo khoảng cách giữa các phần tử con (p, ul).
            */}
            <div className="neulis-alt-regular font-medium text-lg text-[#000A1D] leading-relaxed max-w-7xl mx-auto px-6 mt-8 mb-16 md:mb-24 space-y-6">
                <p>
                    <strong className="font-semibold">China Sourcing Co</strong> is a sourcing service company that connects global businesses with reliable manufacturers across China. Despite having an extensive supplier network and a strong operational foundation, the company’s online presence did not fully reflect its expertise and credibility.
                </p>
                <p>
                    The old website was outdated, hard to navigate, and lacked a clear brand narrative. Marketing activities were fragmented across channels, with no unified tracking or data integration.
                </p>
                <p>
                    That’s when <strong className="font-semibold">China Sourcing Co partnered with OneLink Marketing</strong> with three main goals: 
                </p>
                <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-2">
                    <li><strong className="font-semibold">Redesign the website</strong> with a modern, conversion-optimized layout.</li>
                    <li><strong className="font-semibold">Build a unified multi-channel marketing strategy</strong> to strengthen brand positioning.</li>
                    <li><strong className="font-semibold">Increase qualified leads</strong> while improving cost efficiency and user experience.</li>
                </ul>
            </div>

            {/* --- Parallax Image Section (Full-width) --- */}
            {/* ✅ FIX: Thêm 'hidden' và 'md:block' để ẩn trên mobile */}
            <div className="hidden md:block relative h-[500px] md:h-[700px] w-full overflow-hidden shadow-xl my-12 md:my-20">
                <div
                    className="absolute top-0 left-0 w-full h-[150%] bg-gray-200 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${mainParallaxImageUrl})`, // 💡 Sử dụng ảnh chính mới
                        transform: `translateY(${-400 + offsetY * 0.4}px)`,
                        willChange: "transform",
                    }}
                ></div>
            </div>

            {/* --- Main Content Article --- */}
            <article className="max-w-7xl mx-auto px-6 pb-16">

                {/* --- 1. The Challenges --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        2. The Challenges
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        When we started, we identified three major bottlenecks:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Website not optimized for conversion:</strong> The old site had a cluttered layout and lacked clear CTAs, leading to a high bounce rate and low quote submissions.
                        </li>
                        <li>
                            <strong className="font-semibold">Inconsistent brand presence:</strong> Messaging, visuals, and tone across social platforms didn’t align with the company’s professional positioning.
                        </li>
                        <li>
                            <strong className="font-semibold">Lack of tracking and data insights:</strong> There was no proper lead-tracking or analytics system, making it difficult to measure performance or optimize ad spend.
                        </li>
                    </ul>
                </section>

                {/* --- Heading for Solutions --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        3. Our Solutions
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        After a full audit of China Sourcing Co’s digital ecosystem, we built a <strong className="font-semibold">five-phase roadmap</strong> to reconstruct their online presence and marketing foundation.
                    </p>
                </section>

                {/* --- 3.1 Website Redesign & CRO --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl (từ 3xl) */}
                    <h2 className="archivo-expanded text-2xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        1 Website Redesign & Conversion Rate Optimization (CRO)
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        The core of the project was a <strong className="font-semibold">complete website redesign</strong> — transforming it from a static company page into a <strong className="font-semibold">conversion-driven digital engine.</strong>
                    </p>

                    <div className="flex justify-center w-full my-8">
                        <img
                            src={websiteHeroImageUrl}
                            alt="China Sourcing Co website screenshot"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl (từ 2xl) */}
                    <h3 className="archivo-expanded text-xl md:text-2xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Our approach included:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>A modern, minimalist interface emphasizing professionalism and sourcing expertise.</li>
                        <li>Restructured content flow following a clear conversion funnel (Awareness → Consideration → Action).</li>
                        <li>Strategic <strong className="font-semibold">call-to-action placements</strong> such as &quot;Get a Quote&quot;, &quot;Send Your Product Idea&quot;, and &quot;Talk to a Sourcing Expert&quot;.</li>
                        <li>Mobile-first, high-speed UX design optimized for B2B engagement.</li>
                        <li><strong className="font-semibold">A/B testing</strong> on landing pages to find the best-performing layouts.</li>
                        <li>Integrated <strong className="font-semibold">analytics stack</strong> (GM4, Tag Manager, GSC) for real-time behavioral tracking.</li>
                    </ul>
                     {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl (từ 2xl) */}
                    <h3 className="archivo-expanded text-xl md:text-2xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Result:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>The redesigned site increased user engagement and improved navigation clarity.</li>
                        <li>&quot;Get a Quote&quot; submissions rose by <strong className="font-semibold">192%</strong> within the first 90 days.</li>
                    </ul>

                    {/* ✅ FIX: Thêm flex-col trên mobile, md:flex-row trên desktop */}
                    <div className="flex flex-col md:flex-row gap-8 justify-center w-full my-8">
                        <img
                            src={trafficReportImageUrl}
                            alt="Traffic Source Report"
                            className="max-w-full md:w-1/2 h-auto rounded-lg shadow-md"
                        />
                        <img
                            src={conversionFunnelImageUrl}
                            alt="Conversion Rate Funnel"
                            className="max-w-full md:w-1/2 h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- 3.2 SEO & Content Strategy --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl (từ 3xl) */}
                    <h2 className="archivo-expanded text-2xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        2 SEO & Content Strategy
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        To build sustainable organic growth, we implemented a <strong className="font-semibold">6-month SEO roadmap</strong> covering:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>In-depth keyword research targeting sourcing, manufacturing, quality control, and logistics.</li>
                        <li>Full <strong className="font-semibold">on-page optimization</strong> (meta, internal linking, schema markup, and page performance).</li>
                        <li>Creation of <strong className="font-semibold">content pillars</strong> like:</li>
                        {/* ✅ FIX: Đây là cách làm list lồng nhau (nested list) đúng ngữ nghĩa */}
                        <li>
                            <ul className="list-[circle] pl-5 space-y-2">
                                <li>&quot;Vietnam vs China Sourcing,&quot;</li>
                                <li>&quot;How to Find Reliable Suppliers,&quot;</li>
                                <li>&quot;Canton Fair Insights,&quot;</li>
                                <li>&quot;Product Quality Control in Asia.&quot;</li>
                            </ul>
                        </li>
                        <li><strong className="font-semibold">Off-page link building</strong> through digital PR and guest posts.</li>
                    </ul>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl (từ 2xl) */}
                    <h3 className="archivo-expanded text-xl md:text-2xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Result:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>Organic traffic increased <strong className="font-semibold">2.4x</strong>.</li>
                        <li>Top 10 keyword rankings rose by <strong className="font-semibold">110%</strong> within 3 months.</li>
                    </ul>
                </section>

                {/* --- 3.3 Social Media Marketing --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                     {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl (từ 3xl) */}
                    <h2 className="archivo-expanded text-2xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        3 Social Media Marketing
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        We redefined <strong className="font-semibold">brand voice, creative direction, and visual identity</strong> for LinkedIn, Facebook, Instagram, and X (Twitter), the two key B2B channels for sourcing professionals.
                    </p>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl (từ 2xl) */}
                    <h3 className="archivo-expanded text-xl md:text-2xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Execution:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>Built a 3-month content calendar focused on 4 themes: Factory Insights, Client Stories, Industry Trends, and Behind the Scenes.</li>
                        <li>Designed cohesive post templates and storytelling visuals.</li>
                        <li>Tested multiple post formats to optimize engagement.</li>
                    </ul>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl (từ 2xl) */}
                    <h3 className="archivo-expanded text-xl md:text-2xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Result:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>Engagement rate improved by <strong className="font-semibold">145%</strong>.</li>
                        <li>The company saw a significant rise in inbound inquiries from clients in the <strong className="font-semibold">US, Australia, and Europe.</strong></li>
                    </ul>

                    <div className="flex justify-center w-full my-8">
                        <img
                            src={socialMediaGridUrl}
                            alt="Social media post grid"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- 3.4 Email Marketing & Lead Nurturing --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl (từ 3xl) */}
                    <h2 className="archivo-expanded text-2xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        4 Email Marketing & Lead Nurturing
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        To maximize conversion potential, we developed a <strong className="font-semibold">targeted email nurture flow</strong> that guided leads through every stage of decision-making.
                    </p>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl (từ 2xl) */}
                    <h3 className="archivo-expanded text-xl md:text-2xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        Actions taken:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>Automated <strong className="font-semibold">welcome → sourcing guide → case study → consultation</strong> email flow.</li>
                        <li>Segmented leads into hot, warm, and cold tiers for personalization.</li>
                        <li>Redesigned email templates consistent with the new website design.</li>
                    </ul>

                    <div className="flex justify-center w-full my-8">
                        <img
                            src={emailChartsUrl}
                            alt="Email performance charts"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- 3.5 Reporting & Performance Insights --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                     {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        5 Reporting & Performance Insights
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Transparency and agility were key to this partnership. We created a live dashboard consolidating data from all channels to monitor daily performance.
                    </p>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl (từ 2xl) */}
                    <h3 className="archivo-expanded text-xl md:text-2xl font-semibold text-[#000A1D] max-w-7xl mx-auto pt-4">
                        What we delivered:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>Real-time tracking of traffic, leads, and conversion costs.</li>
                        <li>Weekly performance reviews and creative adjustments.</li>
                        <li>Quarterly executive reports to measure ROI and long-term progress.</li>
                    </ul>
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={reportingDashboardUrl}
                            alt="Google Analytics and Reporting Dashboard"
                            className="max-w-full h-auto rounded-lg shadow-md"
                            />
                    </div>
                </section>

                {/* --- 4. Key Results --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        4. Key Results
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Within just 90 days, China Sourcing Co saw measurable growth across every key performance metric — a clear reflection of the power behind OneLink Marketing’s integrated approach.
                        <br /><br />
                        The new website redesign alone drove a <strong className="font-semibold">192% increase in conversion rate</strong>, rising from 1.2% to 3.5%. Organic traffic also surged by <strong className="font-semibold">240%</strong>, thanks to a well-structured SEO and content strategy that targeted sourcing and manufacturing-related keywords.
                        <br /><br />
                        On social media, engagement on LinkedIn grew by <strong className="font-semibold">145%</strong>, fueled by consistent storytelling and improved brand visuals. User behavior metrics showed significant improvement too — the average session duration increased from 38 seconds to 1 minute and 4 seconds, a <strong className="font-semibold">68% boost</strong> in time spent on site.
                        <br /><br />
                        Meanwhile, the new <strong className="font-semibold">email marketing flow</strong>  helped re-engage cold leads, achieving a <strong className="font-semibold">30% reactivation rate</strong> and a much higher click-through rate compared to previous campaigns.
                        <br /><br />
                        Overall, within just three months, China Sourcing Co successfully transformed its digital presence into a scalable, high-performing growth engine — turning traffic into trust, and visitors into qualified leads.
                    </p>
                </section>

                {/* --- 5. Conclusion --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        5. Conclusion
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        <strong className="font-semibold">China Sourcing Co&apos;s</strong> project demonstrates how a <strong className="font-semibold">data-driven redesign</strong> combined with a <strong className="font-semibold">multi-channel strategy</strong> can accelerate real business growth.
                        <br /><br />
                        Through OneLink Marketing’s blend of <strong className="font-semibold">creative direction, performance tracking, and ongoing optimization,</strong> China Sourcing Co transformed its digital presence — from an underperforming website into a trusted sourcing platform with measurable ROI and global credibility.
                    </p>
                </section>

                {/* --- Footer (Tags) --- */}
                <footer className="mt-24 pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm max-w-7xl mx-auto">
                    <span className="neulis-alt-regular font-medium text-[#000A1D]">
                        Tags:
                    </span>
                    {/* 💡 Đã cập nhật tags để phù hợp với Case Study */}
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Case Study
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Website Redesign
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        CRO
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        SEO
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Multi-channel Marketing
                    </span>
                </footer>
            </article>
        </div>
    )
}

export default BlogSection