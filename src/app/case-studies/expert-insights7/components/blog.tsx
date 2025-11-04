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

    // --- CẬP NHẬT ĐƯỜNG DẪN ẢNH CỦA BẠN TẠI ĐÂY ---
    // Ảnh hero (laptop & mobile)
    const heroImageUrl = "/assets/bl31.png"
    // Ảnh cho Step 1
    const step1ImageUrl = "/assets/bl32.png"
    // Ảnh cho Step 2
    const step2ImageUrl1 = "/assets/bl33.png"
    const step2ImageUrl2 = "/assets/bl34.png"
    // Ảnh cho Step 3
    const step3FormUrl = "/assets/bl35.png"
    const step3FigmaUrl = "/assets/bl36.png"
    // Ảnh cho Step 4
    // --- KẾT THÚC PHẦN CẬP NHẬT ẢNH ---

    return (
        <div className="bg-white font-sans text-gray-800">
            {/* --- Header Section --- */}
            <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 text-left">
                <h1 className="archivo-expanded text-4xl md:text-5xl font-medium leading-tight mb-2">
                    Redesigning OneLink Holdings&apos; Landing Page to Reflect a Modern, Global Brand
                </h1>
                <p className="neulis-alt-regular font-medium text-gray-500">
                    By Long Nguyen & Quang Ho Quoc
                </p>
            </header>

            {/* --- About the Project --- */}
            <div className="max-w-7xl mx-auto px-6 mt-8">
                <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D] max-w-7xl mx-auto">
                    About the Project
                </h2>
            </div>

            {/* --- Main Blog Introduction --- */}
            <p className="neulis-alt-regular font-medium text-lg text-[#000A1D] leading-relaxed max-w-7xl mx-auto px-6 mt-8 mb-16 md:mb-24">
                OneLink Holdings is a diversified business group with operations spanning sourcing, logistics, and
                manufacturing across Asia. As the company expanded its global reach, its website no longer reflected
                the scale, professionalism, and innovation of the brand.
                <br />
                <br />
                They approached <strong className="font-semibold">OneLink Marketing</strong> with a clear goal: To
                redesign the corporate website into a modern, visually cohesive digital presence that communicates
                trust, expertise, and forward-thinking energy.
                <br />
                <br />
                The challenge wasn&apos;t just to make the website look good — it was to{" "}
                <strong className="font-semibold">
                    translate a complex, multi-service business into a clear, intuitive digital experience
                </strong>{" "}
                that resonated with both partners and international clients.
            </p>

            {/* --- Parallax Image Section --- */}
            <div className="relative h-[500px] md:h-[700px] w-full overflow-hidden shadow-xl my-12 md:my-20">
                <div
                    className="absolute top-0 left-0 w-full h-[150%] bg-gray-200 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${heroImageUrl})`, // Đã cập nhật ảnh hero
                        transform: `translateY(${-400 + offsetY * 0.4}px)`,
                        willChange: "transform",
                    }}
                ></div>
            </div>

            {/* --- Main Content Article --- */}
            <article className="max-w-7xl mx-auto px-6 pb-16">
                {/* --- The Challenge --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D]">The Challenge</h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        The original OneLink Holdings website had strong content but lacked a unified brand identity.
                        Key challenges included:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Outdated visual direction:</strong> The old design
                            used inconsistent colors, typography, and layout across pages.
                        </li>
                        <li>
                            <strong className="font-semibold">Weak visual hierarchy:</strong> Important messages were
                            buried under dense text blocks and stock imagery.
                        </li>
                        <li>
                            <strong className="font-semibold">Lack of brand emotion:</strong> The design didn&apos;t
                            convey the modern, global energy the company had evolved into.
                        </li>
                        <li>
                            <strong className="font-semibold">Navigation friction:</strong> Users find it hard to
                            understand the structure of services and navigate between divisions.
                        </li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        The goal was to create a{" "}
                        <strong className="font-semibold">bold, refined, and purpose-driven digital identity</strong>{" "}
                        — one that looks and feels like a global player.
                    </p>
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={step1ImageUrl} // Placeholder
                            alt="OneLink visual style board"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- Our Approach --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D]">Our Approach</h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        At OneLink Marketing, we believe strong web design starts with strategy. Before sketching a
                        single wireframe, we spent time understanding OneLink Holdings&apos; brand story, values, and
                        long-term vision.
                    </p>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        Our process unfolded in <strong className="font-semibold">four key stages</strong>:
                    </p>
                </section>

                {/* --- Step 1. Brand Discovery & Design Direction --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D]">
                        Step 1: Brand Discovery & Design Direction
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        We began with a <strong className="font-semibold">brand immersion workshop</strong> to define
                        the company&apos;s personality, tone, and visual DNA. Together with the OneLink Holdings
                        team, we aligned on three key design pillars:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Professionalism with warmth:</strong> A corporate
                            look that still feels human and approachable.
                        </li>
                        <li>
                            <strong className="font-semibold">Global confidence:</strong> Design that communicates
                            scale, credibility, and operational depth.
                        </li>
                        <li>
                            <strong className="font-semibold">Modern simplicity:</strong> Minimalist layouts
                            emphasizing clarity, whitespace, and clean structure.
                        </li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        From there, we created a <strong className="font-semibold">visual style board - </strong>
                        refining the palette, typography pairings, and iconography to achieve balance between
                        business authority and visual calm.
                    </p>

                    {/* ===== THAY ĐỔI 1 ===== */}
                    {/* Đã bỏ md:w-1/2 và thêm div wrapper cho nhất quán */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={step2ImageUrl1} // Placeholder
                            alt="OneLink IA structure"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- Step 2. Information Architecture (IA) --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D]">
                        Step 2: Information Architecture (IA)
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        We completely restructured the site map to make content easier to navigate. Each division
                        (Sourcing, Logistics, Manufacturing) was given a{" "}
                        <strong className="font-semibold">distinct visual identity</strong> within a unified
                        framework — ensuring users could understand the company&apos;s scope at a glance.
                    </p>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        We focused on creating a <strong className="font-semibold">linear content flow :</strong>
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-3 leading-relaxed">
                        <li>Clear hero messages introducing each business vertical</li>
                        <li>Supporting visuals showing real operations and partnerships</li>
                        <li>Logical CTA placement for inquiries and contact</li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        This structure made it intuitive for visitors to explore without feeling overwhelmed.
                    </p>

                    {/* ===== THAY ĐỔI 2 ===== */}
                    {/* Đã bỏ md:w-1/2 khỏi ảnh và đơn giản hóa div wrapper */}
                    <div className="flex justify-center w-full my-8">
                        <img
                            src={step2ImageUrl2} // Placeholder
                            alt="OneLink IA cards"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- Step 3. UX/UI Design Execution --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D]">
                        Step 3: UX/UI Design Execution
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        Once the brand direction and structure were defined, our design team moved into high-fidelity
                        UI production.
                    </p>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        <strong className="font-semibold">Key UI techniques we used</strong>:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Grid-based layouts:</strong> Ensured visual alignment
                            and balance across all devices.
                        </li>
                        <li>
                            <strong className="font-semibold">Consistent spacing system:</strong> 8px baseline grid
                            to maintain clean rhythm and proportional design.
                        </li>
                        <li>
                            <strong className="font-semibold">Dynamic imagery:</strong> Replaced generic stock
                            photos with authentic visuals of factories, logistics hubs, and products — creating
                            credibility.
                        </li>
                        <li>
                            <strong className="font-semibold">Motion & Microinteractions:</strong> Subtle fade-ins,
                            parallax effects, and hover transitions brought pages to life without sacrificing
                            performance.
                        </li>
                        <li>
                            <strong className="font-semibold">Typography hierarchy:</strong> Headlines in bold
                            geometric sans-serif fonts (reflecting strength and precision), paired with elegant body
                            text for readability.
                        </li>
                        <li>
                            <strong className="font-semibold">Color psychology:</strong> Used deep blues and neutrals
                            to communicate trust and stability, accented by warm gradients to evoke innovation.
                        </li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        We also developed <strong className="font-semibold">custom icons</strong> representing each
                        service — giving the interface a signature visual language that felt uniquely OneLink
                        Holdings.
                    </p>
                    <div className="flex flex-col gap-8 justify-center w-full my-8">
                        <img
                            src={step3FormUrl} // Placeholder
                            alt="Contact form UI"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* --- Step 4. Design System & Handoff --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D]">
                        Step 4: Design System & Handoff
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        After final approval, we created a{" "}
                        <strong className="font-semibold">comprehensive design system</strong> in Figma to ensure
                        scalability and consistency across all future brand touchpoints.
                    </p>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        This included:
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            A full <strong className="font-semibold">UI component library</strong> (buttons, forms,
                            cards, navigation states)
                        </li>
                        <li>Responsive grid specifications for desktop, tablet, and mobile</li>
                        <li>Typography scales and color guidelines</li>
                        <li>Reusable content blocks for future landing pages</li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        This design system now serves as a long-term foundation for OneLink Holdings&apos; digital
                        ecosystem — making updates faster and brand consistency effortless.
                    </p>
                </section>

                {/* --- 3. The Final Outcome --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D]">
                        3. The Final Outcome
                    </h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        The new OneLink Holdings website is a{" "}
                        <strong className="font-semibold">complete transformation</strong> from a static information
                        hub into a living, breathing brand experience.
                    </p>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            The homepage now tells a clear visual story — leading with bold imagery, crisp
                            typography, and intuitive scrolling.
                        </li>
                        <li>
                            Service pages balance technical depth with elegant simplicity, ensuring the brand feels
                            premium but accessible.
                        </li>
                        <li>
                            Custom iconography and real imagery reinforce the company&apos;s credibility as an
                            on-the-ground operator, not just a corporate entity.
                        </li>
                        <li>
                            The unified color palette and grid structure ensure every page feels like part of the
                            same brand family.
                        </li>
                    </ul>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        The redesign successfully repositioned OneLink Holdings as a{" "}
                        <strong className="font-semibold">modern, trustworthy, and globally-minded enterprise</strong>
                        , reflects their evolution in the sourcing and logistics industry.
                    </p>
                    <img
                        src={step3FigmaUrl} // Placeholder
                        alt="Figma design process"
                        className="max-w-full h-auto rounded-lg shadow-md"
                    />
                </section>

                {/* --- Key Design Highlights --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D]">
                        Key Design Highlights
                    </h2>
                    <ul className="neulis-alt-regular font-medium text-lg text-[#000A1D] list-disc pl-5 space-y-3 leading-relaxed">
                        <li>
                            <strong className="font-semibold">Focus on Clarity:</strong> Every section communicates
                            one key message — no clutter, no distractions.
                        </li>
                        <li>
                            <strong className="font-semibold">Global Feel:</strong> The new interface uses wide
                            visuals, world maps, and movement lines to visualize connectivity.
                        </li>
                        <li>
                            <strong className="font-semibold">Scalable System:</strong> The Figma design system
                            ensures brand coherence for all future websites and campaigns.
                        </li>
                        <li>
                            <strong className="font-semibold">Authenticity First:</strong> The use of real
                            photography and videos from OneLink operations adds genuine storytelling power.
                        </li>
                    </ul>
                </section>

                {/* --- Conclusion --- */}
                <section className="space-y-6 md:space-y-8 mb-16 md:mb-24">
                    <h2 className="archivo-expanded text-4xl font-medium text-[#000A1D]">Conclusion</h2>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        For growing enterprises like OneLink Holdings, a website is no longer just a digital brochure
                        — it&apos;s a <strong className="font-semibold">brand stage</strong>. The redesign by
                        OneLink Marketing did more than improve visuals; it elevated the company&apos;s entire
                        digital presence.
                    </p>
                    <p className="neulis-alt-regular text-lg font-medium text-[#000A1D] leading-relaxed">
                        By combining{" "}
                        <strong className="font-semibold">
                            visual storytelling, UX strategy, and brand consistency
                        </strong>
                        , OneLink Holdings now stands as a confident, globally recognizable name — ready for its next
                        phase of growth.
                    </p>
                </section>

                {/* --- Footer/Tags Section Removed (Không có trong ảnh) --- */}
            </article>
        </div>
    )
}

export default BlogSection