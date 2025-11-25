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

    // 💡 Đã cập nhật các đường dẫn ảnh để phù hợp với nội dung Blog 5
    const mainParallaxImageUrl = "/assets/bl6.png" // 👈 Ảnh "7 Strategies to Turn Customers..."
    const customerJourneyMapUrl = "/assets/bl13.png" // 👈 Ảnh "Customer Journey Map"
    const marketingAutomationUrl = "/assets/bl14.png" // 👈 Ảnh "Marketing Automation"

    return (
        <div className="bg-white font-sans text-gray-800">
            {/* --- Header Section (Narrow Width) --- */}
            <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 text-left">
                {/* ✅ FIX: Giảm cỡ chữ h1 trên mobile xuống 2xl */}
                <h1 className="archivo-expanded text-2xl md:text-5xl font-medium leading-tight mb-2">
                    Building Brand Love: 7 Strategies to Turn Customers into Loyal Fans
                </h1>
                <p className="neulis-alt-regular font-medium text-gray-500">By Quang Ho Quoc</p>
            </header>

            {/* --- Services List (từ hình ảnh) --- */}
            <div className="max-w-7xl mx-auto px-6 mt-8">
                <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-2">
                    <li>Digital Strategy</li>
                    <li>Content Marketing</li>
                    <li>Social Media Marketing</li>
                </ul>
            </div>

            {/* --- Main Blog Introduction (Narrow Width) --- */}
            <p className="neulis-alt-regular font-medium text-lg text-[#000A1D] leading-relaxed max-w-7xl mx-auto px-6 mt-8 mb-16 md:mb-24">
                Customer satisfaction is a good goal, but it’s no longer enough. A satisfied customer can easily switch to a competitor for a better price or a more attractive feature. Satisfaction is rational and transactional. But <strong className="font-semibold">Brand Love</strong> is different. It’s emotional, deep, and lasting.
                <br /><br />
                When a customer *loves* a brand, they don’t just buy its products; they defend the brand, are willing to pay a premium, and become its most enthusiastic advocate. They are fans, not just consumers. In an increasingly saturated market, building Brand Love isn’t a luxury—it’s the ultimate competitive advantage.
                <br /><br />
                So, how can you transform satisfied customers into loyal fans? This article shares seven proven strategies to build a deep emotional connection and create enduring Brand Love.
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
                
                {/* --- 1. Define and Live Your Core Values --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        1. Define and Live Your Core Values
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Love begins with authenticity. The most beloved brands have a clear set of values, and they live by them every single day. They don’t just sell a product; they stand for something bigger. Patagonia doesn’t just sell outdoor gear; they stand for environmental protection. Doves don’t just sell soap; they stand for real beauty.
                    </p>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        How to implement:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Define with clarity:</strong> What are your brand’s mission and core values? Why do you exist beyond making a profit?
                        </li>
                        <li>
                            <strong className="font-semibold">Live by it:</strong> Ensure every touchpoint, from marketing campaigns and company culture to customer service, consistently reflects these values.
                        </li>
                    </ul>
                </section>

                {/* --- 2. Create Exceptional and Consistent Customer Experiences --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        2. Create Exceptional and Consistent Customer Experiences
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Love is built through repeated positive interactions. Every touchpoint—from your website, social media, and emails to your support staff—must be seamless, helpful, and enjoyable. Consistency in experience builds trust—the foundation of any strong relationship.
                    </p>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        How to implement:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Map the customer journey:</strong> Identify all the critical touchpoints where a customer interacts with your brand.
                        </li>
                        <li>
                            <strong className="font-semibold">Invest in quality:</strong> Ensure each touchpoint is optimized to deliver the best possible experience. Train your team not just to solve problems but to create memorable moments.
                        </li>
                    </ul>

                    {/* Image for Customer Journey Map */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={customerJourneyMapUrl}
                            alt="Diagram of a Customer Journey Map"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- 3. Build a Community, Not Just an Audience --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        3. Build a Community, Not Just an Audience
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Humans have a fundamental need to belong. Smart brands don’t just sell to customers; they connect customers to one another. When a brand becomes the center of a community, it’s no longer just a business entity—it’s part of its members’ identity. Harley-Davidson doesn’t just sell motorcycles; they cultivate a community of freedom-lovers.
                    </p>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        How to implement:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Create a space for connection:</strong> Build a place where customers can interact with each other (e.g., a Facebook group, a forum, exclusive events).
                        </li>
                        <li>
                            <strong className="font-semibold">Celebrate your members:</strong> Encourage user-generated content (UGC) and celebrate the stories and achievements of your community members.
                        </li>
                    </ul>
                </section>

                {/* --- 4. Tell Compelling Stories --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        4. Tell Compelling Stories
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        People connect through stories, not spec sheets. Share the story of your brand’s origin, the stories of your passionate employees, and most importantly, the success stories of your customers. Stories evoke emotion and create a much deeper connection than simply talking about product features.
                    </p>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        How to implement:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Develop a storytelling content strategy:</strong> Build a content plan focused on storytelling across multiple formats (video, blog, social media).
                        </li>
                        <li>
                            <strong className="font-semibold">Highlight the human element:</strong> Show the real people behind your brand and how your product makes a real impact on your customers’ lives.
                        </li>
                    </ul>
                </section>

                {/* --- 5. Personalize at Scale --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        5. Personalize at Scale
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Love always feels personal. Using data to understand your customers’ needs and preferences, then tailoring your messaging and offers accordingly, shows that you truly care about them as individuals, not just as numbers in a report.
                    </p>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        How to implement:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Leverage your data:</strong> Use your CRM and marketing automation tools to segment your audience and deliver personalized messages, product recommendations, and experiences.
                        </li>
                        <li>
                            <strong className="font-semibold">Listen and respond:</strong> Monitor signals from your customers and use them to make future interactions even more relevant.
                        </li>
                    </ul>

                    {/* Image for Marketing Automation */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={marketingAutomationUrl}
                            alt="Diagram of a Marketing Automation funnel with CRM"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- 6. Surprise and Delight --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        6. Surprise and Delight
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Unexpected acts of kindness create powerful emotional memories. Small, thoughtful gestures can have an outsized impact on how a customer feels about your brand.
                    </p>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        How to implement:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Empower your team:</strong> Allow your employees to go “off-script” to do something special for a customer.
                        </li>
                        <li>
                            <strong className="font-semibold">Small acts, big impact:</strong> Send a handwritten thank-you note, offer a small, unexpected gift, or celebrate customer milestones (like their birthday or the anniversary of when they became a customer).
                        </li>
                    </ul>
                </section>

                {/* --- 7. Be Human and Transparent --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        7. Be Human and Transparent
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#0E1525] max-w-7xl mx-auto leading-relaxed">
                        People love brands that are authentic and honest. Admit your mistakes, be transparent about your processes, and communicate with a human voice, not a corporate one. Transparency builds trust, and authenticity creates affection.
                    </p>
                    {/* ✅ FIX: Giảm cỡ chữ h3 trên mobile xuống xl */}
                    <h3 className="archivo-expanded text-xl md:text-3xl font-medium text-[#000A1D] max-w-7xl mx-auto pt-4">
                        How to implement:
                    </h3>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] max-w-7xl mx-auto list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">When you make a mistake, own it:</strong> Don’t hide it. Apologize sincerely and do what it takes to make it right.
                        </li>
                        <li>
                            <strong className="font-semibold">Show what’s behind the curtain:</strong> Use social media to reveal the people, the stories, and even the imperfections behind your brand.
                        </li>
                    </ul>
                </section>

                {/* --- Conclusion --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    {/* ✅ FIX: Giảm cỡ chữ h2 trên mobile xuống 2xl */}
                    <h2 className="archivo-expanded text-2xl md:text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                        Conclusion: Love is the Best Business Strategy
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] max-w-7xl mx-auto leading-relaxed">
                        Building Brand Love isn’t a short-term marketing campaign; it’s a long-term business strategy. In a world full of choices, the emotional connection you forge with your customers is your most valuable and hardest-to-copy asset.
                        <br /><br />
                        It’s the difference between a one-time customer and a lifelong fan.
                        <br /><br />
                        <strong className="font-semibold">Are you ready to build a brand that customers don’t just buy from, but truly love? Contact Onelink Marketing today for a consultation on how to build a brand strategy that creates loyal fans.</strong>
                    </p>
                </section>

                {/* --- Footer (Tags) --- */}
                <footer className="mt-24 pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm max-w-7xl mx-auto">
                    <span className="neulis-alt-regular font-medium text-[#000A1D]">
                        Tags:
                    </span>
                    {/* 💡 Đã cập nhật tags để phù hợp với Blog 5 */}
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Brand Strategy
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Brand Love
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Customer Loyalty
                    </span>
                    <span className="neulis-alt-regular font-medium text-[#444444] border border-gray-300 rounded-full px-4 py-1">
                        Community Building
                    </span>
                </footer>
            </article>
        </div>
    )
}

export default BlogSection