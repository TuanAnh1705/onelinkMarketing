"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link" // MỚI: Import Link từ Next.js

// ============================================================================
// 🔹 Component FilterTabs - (Giữ nguyên)
// ============================================================================
const categories = ["All", "Websites", "SEO", "Paid Media", "Social Media"]

function FilterTabs() {
    const [activeTab, setActiveTab] = useState(categories[0])
    const [hoveredTab, setHoveredTab] = useState<string | null>(null)

    return (
        <div className="flex flex-row overflow-x-auto md:grid md:grid-cols-5 w-full max-w-7xl mx-auto mb-12 md:mb-20 px-4 sm:px-8 md:px-0">
            {categories.map((category) => {
                const isActive = activeTab === category
                const isHovered = hoveredTab === category

                return (
                    <div
                        key={category}
                        onClick={() => setActiveTab(category)}
                        onMouseEnter={() => setHoveredTab(category)}
                        onMouseLeave={() => setHoveredTab(null)}
                        className="relative flex flex-col items-start cursor-pointer group flex-shrink-0 pr-8 md:pr-0"
                    >
                        <span className="text-base md:text-lg text-[#444444] group-hover:text-[#000A1D] transition-colors duration-300 relative z-10 pb-3 whitespace-nowrap">
                            {category}
                        </span>

                        <motion.div
                            className="absolute bottom-0 left-0 w-full bg-[#D1D1D1]"
                            initial={{ scaleX: 0 }}
                            animate={{
                                scaleX: isActive || isHovered ? 0.9 : 0,
                                height: isActive || isHovered ? 2 : 1,
                                backgroundColor: isActive || isHovered ? "#000A1D" : "#D1D1D1",
                            }}
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            style={{ transformOrigin: "left" }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

// ============================================================================
// 🔹 Định nghĩa Type và Dữ liệu - ĐÃ CẬP NHẬT
// ============================================================================
interface CaseStudyItem {
    src: string
    title: string
    author: string
    href: string // MỚI: Thêm trường đường dẫn
}

const caseStudiesData: CaseStudyItem[][] = [
    [
        {
            src: "/assets/bl.png",
            title: "How We Cut Customer Acquisition Cost (CAC) by 50% by Shifting Budget from Paid Ads to Content SEO",
            author: "Long Nguyen & Tuan Nguyen",
            href: "/case-studies/expert-insights", // MỚI: Thêm đường dẫn
        },
        {
            src: "/assets/bl7.png",
            title: "From 'Likes' to Revenue: A Strategic Framework to Turn Social Media into a True Growth Channel",
            author: "Quang Ho Quoc",
            href: "/case-studies/expert-insights1", // MỚI: Thêm đường dẫn
        },
        {
            src: "/assets/bl4.png",
            title: "The SEO Topic Cluster Model: How to Dominate Target Keywords and Build Sustainable Brand Authority",
            author: "Tuan Nguyen",
            href: "/case-studies/expert-insights2", // MỚI: Thêm đường dẫn
        },
    ],
    [
        {
            src: "/assets/bl5.png",
            title: "Content Competitor Analysis: A Data-Driven Roadmap to Find Market Gaps and Dominate Your Niche",
            author: "Long Nguyen",
            href: "/case-studies/expert-insights3", // MỚI: Thêm đường dẫn
        },
        {
            src: "/assets/bl6.png",
            title: "Building Brand Love: 7 Strategies to Turn Customers into Loyal Fans",
            author: "Quang Ho Quoc",
            href: "/case-studies/expert-insights4", // MỚI: Thêm đường dẫn
        },
        {
            src: "/assets/bl15.png",
            title: "Building a Conversion-Focused Digital Presence for China Sourcing Co",
            author: "Long Nguyen & Quang Ho Quoc",
            href: "/case-studies/expert-insights5", // MỚI: Thêm đường dẫn
        },
    ],
    [
        {
            src: "/assets/bl22.png",
            title: "Boosting Vietnam Sourcing Co’s Digital Presence and Lead Generation",
            author: "Long Nguyen & Quang Ho Quoc",
            href: "/case-studies/expert-insights6", // MỚI: Thêm đường dẫn
        },
        {
            src: "/assets/bl31.png",
            title: "Redesigning OneLink Holdings’ Landing Page to Reflect a Modern, Global Brand",
            author: "Long Nguyen & Quang Ho Quoc",
            href: "/case-studies/expert-insights7", // MỚI: Thêm đường dẫn
        },
    ],
]

// ============================================================================
// 🔹 Component CaseStudies chính - ĐÃ CẬP NHẬT
// ============================================================================
export default function ExpertSection() {
    const section4Ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({ target: section4Ref, offset: ["start end", "center start"] })
    const buttonOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
    const buttonY = useTransform(scrollYProgress, [0, 0.4], [100, 0])

    return (
        <motion.section
            ref={section4Ref}
            className="relative justify-center -mt-5 z-10 bg-white pt-32 pb-32 px-4 sm:px-8 md:px-16 lg:px-24"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="archivo-expanded text-4xl sm:text-5xl md:text-6xl font-medium text-center text-[#000A1D] mb-12 md:mb-16">
                    Expert Insights
                </h2>
                <FilterTabs />
                <div className="flex flex-col gap-12 md:gap-20">
                    {caseStudiesData.map((row, rowIndex) => (
                        <div key={rowIndex} className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                            {row.map((item, i) => (
                                // MỚI: Bọc toàn bộ item bằng component <Link>
                                <Link href={item.href} key={i}>
                                    <motion.div
                                        className="text-left cursor-pointer relative"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            duration: 2.4,
                                            ease: [0.25, 1, 0.3, 1],
                                            delay: i * 0.2,
                                        }}
                                        viewport={{ once: false, amount: 0.4 }}
                                    >
                                        {i < row.length - 1 && (
                                            <div className="absolute top-0 -right-4 w-[1px] h-full bg-gradient-to-b from-[#0074E5] to-[#162660] hidden md:block" />
                                        )}
                                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#D9D9D9] border border-[#e5e5e5]">
                                            <motion.div
                                                className="w-full h-full"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            >
                                                <Image
                                                    src={item.src || "/placeholder.svg"}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover object-center"
                                                />
                                            </motion.div>
                                        </div>
                                        <h3 className="mt-6 archivo-expanded font-medium text-lg text-[#000A1D] leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm neulis-alt-extralight font-normal text-[#666666]">
                                            By {item.author}
                                        </p>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}