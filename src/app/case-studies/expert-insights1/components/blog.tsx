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

    // 💡 Đã cập nhật các đường dẫn ảnh để phù hợp với nội dung mới từ hình ảnh
    const mainParallaxImageUrl = "/assets/bl7.png" // 👈 Ảnh "Turn Social Media into a True Growth Channel"
    const funnelDiagramUrl = "/assets/bl8.png" // 👈 Ảnh biểu đồ Phễu (ToFu, MoFu, BoFu)
    const caseStudyChartsUrl = "/assets/bl9.png" // 👈 Ảnh biểu đồ cho Mini Case Study

    return (
        <div className="bg-white font-sans text-gray-800">
            {/* --- Header Section (Narrow Width) --- */}
            <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 text-left">
                <h1 className="archivo-expanded text-4xl md:text-5xl font-medium leading-tight mb-2">
                    From &apos;Likes&apos; to Revenue: A Strategic Framework to Turn Social Media into a True Growth Channel
                </h1>
                <p className="neulis-alt-regular font-medium text-gray-500">By Olma - 2025</p>
            </header>

            {/* --- Main Blog Introduction (Narrow Width) --- */}
            <p className="neulis-alt-regular font-medium text-lg text-[#000A1D] leading-relaxed max-w-7xl mx-auto px-6 mt-8 mb-16 md:mb-24">
                For many businesses, social media feels like a necessary chore. You post, you engage, you collect likes and followers, but when the leadership team asks, “What’s the ROI on our social media spend?” the answer is often a vague reference to “brand awareness” or “engagement.”
                <br /><br />
                Likes, shares, and follower counts are comforting, but they don’t pay the bills. This focus on “vanity metrics” is the single biggest reason why most social media strategies fail to deliver tangible business results. The truth is, your social media channels can and should be powerful engines for generating leads and driving revenue.
                <br /><br />
                The key is to stop treating social media like a billboard and start treating it like a system. This article provides a strategic framework to transform your social media presence from a simple “like”-gathering machine into a predictable, revenue-generating channel.
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
                
                {/* --- The Mindset Shift --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        The Mindset Shift: From Vanity Metrics to Business Metrics
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        The first step is a fundamental shift in how you measure success. While a large following can be beneficial, it’s a means to an end, not the end itself.
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Vanity Metrics (What to wave away from):</strong> Follower count, likes per post, reach, impressions. These indicate attention but not necessarily intent or action.
                        </li>
                        <li>
                            <strong className="font-semibold">Business Metrics (What to focus on):</strong> Leads Generated, Cost Per Lead (CPL), Conversion Rate, Customer Acquisition Cost (CAC), and Revenue Attributed to Social Media. These metrics connect social media activity directly to your bottom line.
                        </li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        To make this shift, you need a framework that systematically guides your audience from passive followers to active customers.
                    </p>
                </section>

                {/* --- The 4-Step Framework --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        The 4-Step Framework to Convert Followers into Customers
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        This framework is designed to create a clear path from initial discovery on social media to a final business action.
                    </p>
                </section>

                {/* --- Step 1: Define Your "Conversion" --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Step 1: Define Your &quot;Conversion&quot; on Social Media
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Before you can generate leads, you must define what a “lead” is for your business in the context of social media. A conversion isn’t always a direct purchase, especially for B2B or high-value services.
                        <br /><br />
                        A meaningful conversion could be:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">A content download:</strong> A user provides their email in exchange for a guide, whitepaper, or case study.
                        </li>
                        <li>
                            <strong className="font-semibold">A webinar registration:</strong> A follower signs up for an educational event.
                        </li>
                        <li>
                            <strong className="font-semibold">A newsletter subscription:</strong> A user opts-in to receive regular communication.
                        </li>
                        <li>
                            <strong className="font-semibold">A demo request or consultation booking:</strong> A high-intent action that signals a user is ready to talk business.
                        </li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        By defining this, you give your social media efforts a clear, measurable goal beyond just getting likes.
                    </p>
                </section>

                {/* --- Step 2: Engineer Your Content Funnel --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Step 2: Engineer Your Content Funnel
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Stop posting randomly. Every piece of content should have a purpose and serve a specific stage in the customer journey.
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Top of Funnel (Attract & Engage):</strong> The goal here is to capture the attention of your target audience and build a following. This content should be educational, entertaining, and valuable, without asking for anything in return.
                            <br />
                            <strong className="font-normal">Examples:</strong> Short-form videos explaining an industry trend, insightful infographics, thought-provoking questions, behind-the-scenes looks at your company culture.
                            <br />
                            <strong className="font-normal">Metric:</strong> Follower growth, reach, engagement rate.
                        </li>
                        <li>
                            <strong className="font-semibold">Middle of Funnel (Nurture & Capture):</strong> This is where the magic happens. The goal is to convert your engaged audience into leads by offering something of high value in exchange for their contact information.
                            <br />
                            <strong className="font-normal">Examples:</strong> Promoting a downloadable “Ultimate Guide,” inviting followers to a free webinar on a critical topic, sharing a snippet of a case study with a link to the full version.
                            <br />
                            <strong className="font-normal">Metric:</strong> Landing page visits, conversion rate (downloads/registrations), Cost Per Lead.
                        </li>
                        <li>
                            <strong className="font-semibold">Bottom of Funnel (Convert & Close):</strong> This content is for the leads you’ve already captured and the followers who are clearly ready to buy. The goal is to drive a direct business action.
                            <br />
                            <strong className="font-normal">Examples:</strong> Customer testimonials, product demo videos, limited-time offers, posts with a direct call-to-action like “Book a Free Consultation.”
                            <br />
                            <strong className="font-normal">Metric:</strong> Demo requests, sales inquiries, revenue.
                        </li>
                    </ul>
                    {/* Image for Funnel */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={funnelDiagramUrl}
                            alt="Diagram of ToFu, MoFu, and BoFu marketing funnel"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- Step 3: Build a Bridge Off Social Media --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Step 3: Build a Bridge Off Social Media
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        One of the biggest mistakes businesses make is keeping the entire conversation on platforms they don’t own (like Facebook, LinkedIn, or Instagram). The ultimate goal of your mid-funnel content is to move the relationship to a channel you control, like your email list or CRM.
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Use Dedicated Landing Pages:</strong> Every mid-funnel offer (guide, webinar, etc.) must have a simple, clear landing page with a form to capture lead information.
                        </li>
                        <li>
                            <strong className="font-semibold">Craft Clear Calls-to-Action (CTAs):</strong> Your social media posts must explicitly tell the user what to do next. Don’t just say “check out our new guide.” Say, “Download your free guide to [achieve specific outcome] at the link in our bio.”
                        </li>
                    </ul>
                </section>

                {/* --- Step 4: Measure What Matters with Precision --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Step 4: Measure What Matters with Precision
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        This is how you prove ROI. To connect your social media activity to business results, you must track the entire user journey.
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Use UTM Parameters:</strong> Add UTM tracking codes to every link you share on social media. This allows you to see in Google Analytics exactly how much traffic and how many conversions are coming from each specific platform and post.
                        </li>
                        <li>
                            <strong className="font-semibold">Set Up Conversion Goals:</strong> In your analytics platform, create goals for every defined conversion (e.g., a “Thank You” page visit after a form submission).
                        </li>
                        <li>
                            <strong className="font-semibold">Connect the Data:</strong> By combining these two, you can answer critical questions like “How many leads did our LinkedIn campaign generate last month?” and “What is the conversion rate of traffic from Instagram vs. Facebook?”
                        </li>
                    </ul>
                </section>

                {/* --- Putting It All Together: A Mini Case Study --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Putting It All Together: A Mini Case Study
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Imagine a B2B consulting firm.
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Before:</strong> They posted company news and articles. Each post got around 50 likes but generated zero trackable leads.
                        </li>
                        <li>
                            <strong className="font-semibold">After: Implementing the Framework:</strong>
                            <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-[lower-alpha] pl-5 space-y-3 leading-relaxed mt-3">
                                <li>
                                    <strong className="font-semibold">Top of Funnel:</strong> They created a series of short videos on LinkedIn answering common questions their clients ask. Follower engagement tripled.
                                </li>
                                <li>
                                    <strong className="font-semibold">Middle of Funnel:</strong> They produced an in-depth PDF guide titled “The 5 Biggest Mistakes to Avoid in...” They promoted it with posts that had a clear CTA: “Download our free guide to protect your business.”
                                </li>
                                <li>
                                    <strong className="font-semibold">The Bridge:</strong> The link led to a dedicated landing page where users entered their email to get the guide.
                                </li>
                                <li>
                                    <strong className="font-semibold">Measurement:</strong> Using UTMs, they tracked that in the first month, their LinkedIn posts drove 500 visitors to the landing page, resulting in 150 new leads (a 30% conversion rate).
                                </li>
                                <li>
                                    <strong className="font-semibold">Bottom of Funnel:</strong> These 150 leads were nurtured through an automated email sequence, which led to 5 new client consultations within the next two weeks.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Now, when leadership asks for the ROI, they can confidently say, “Our social media strategy generated 150 qualified leads and 5 sales opportunities this month.”
                    </p>
                    {/* Image for Charts */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={caseStudyChartsUrl}
                            alt="Charts showing submissions by source and lead type"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- Conclusion --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Conclusion: Stop Counting Likes, Start Driving Revenue
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Social media is far too powerful a tool to be relegated to a simple “brand awareness” channel. By shifting your mindset from vanity metrics to business metrics and implementing a strategic framework focused on a content funnel, clear calls-to-action, and precise measurement, you can transform your social channels into a predictable and profitable engine for growth.
                        <br /><br />
                        <strong className="font-semibold">Is your social media strategy built to drive revenue? Contact Onelink Marketing today for a consultation on how to implement a framework that delivers measurable results and turns your followers into valuable customers.</strong>
                    </p>
                </section>

                {/* --- Footer (Tags) --- */}
                <footer className="mt-24 pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm max-w-7xl mx-auto">
                    <span className="neulis-alt-regular font-medium text-[#000A1D]">
                        Tags:
                    </span>
                    {/* 💡 Đã cập nhật tags để phù hợp với nội dung mới */}
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Social Media Marketing
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Marketing Funnel
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Lead Generation
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        B2B Marketing
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Case Study
                    </span>
                </footer>
            </article>
        </div>
    )
}

export default BlogSection