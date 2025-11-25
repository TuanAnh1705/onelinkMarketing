"use client"

import { motion, useInView, useAnimationControls } from "framer-motion"
// 🚀 THÊM: Thêm 'useState'
import { useEffect, useRef, useState } from "react"
import Link from "next/link" // 👈 1. IMPORT LINK


// ===================================================================
// BẮT ĐẦU CODE RESPONSIVE (Copy từ lần trước)
// ===================================================================

// 1. Định nghĩa variants
const lineVariantsDesktop = {
    initial: { width: "1050px" },
    hover: { width: "140px" },
}

const lineVariantsMobile = {
    initial: { width: "350px" },
    hover: { width: "90px" },
}

// 2. 🚀 HOOK useMediaQuery ĐÃ SỬA LỖI "FLASH"
function useMediaQuery(query: string): boolean {
    const isClient = typeof window === 'object'

    const getInitialState = () => {
        if (!isClient) {
            return false
        }
        return window.matchMedia(query).matches
    }

    const [matches, setMatches] = useState(getInitialState)

    useEffect(() => {
        if (!isClient) {
            return
        }

        const media = window.matchMedia(query)

        const listener = () => {
            setMatches(media.matches)
        }

        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        media.addEventListener("change", listener)
        return () => media.removeEventListener("change", listener)
    }, [isClient, query, matches])

    return matches
}

// ===================================================================
// KẾT THÚC CODE RESPONSIVE
// ===================================================================


export default function TestimonialsForSeo() {
    const containerRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const controls = useAnimationControls();
    const titleInView = useInView(titleRef, { once: false, margin: "-20% 0px -20% 0px" })

    // 3. 🚀 SỬ DỤNG HOOK
    const isMobile = useMediaQuery("(max-width: 767px)")

    // Code useInView (giữ nguyên)
    useEffect(() => {
        if (titleInView) {
            controls.start("visible");
        } else {
            controls.set("hidden");
        }
    }, [titleInView, controls]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-white text-[#000A1D] w-full overflow-hidden py-24 sm:py-32 -translate-y-24 z-10 md:mb-0 mb-20"
        >

            <div className="mt-0">
                {/* (Phần Marquee giữ nguyên) */}
                <p className="text-center text-[#000A1D] mb-12 text-2xl md:text-5xl archivo-expanded font-medium">Boost My SEO</p>
                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex gap-16"
                        animate={{ x: [0, -1005] }}
                        transition={{
                            x: {
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                    </motion.div>
                </div>
            </div>

            {/* --- CTA Section (Căn giữa toàn bộ) --- */}
            <div className="flex flex-col items-center justify-center w-full -mt-10">

                {/* 👇 2. BỌC NÚT BẰNG LINK TỚI /CONTACT 👇 */}
                <Link href="/contact">
                    <motion.div
                        ref={containerRef}
                        className="inline-flex flex-col items-center gap-4 cursor-pointer"
                        whileHover="hover"
                        initial="initial"
                    >
                        {/* Text Wrapper */}
                        <div
                            // 4. 🚀 THAY ĐỔI: Chiều cao responsive
                            className="relative overflow-hidden flex items-center justify-center h-[5rem] md:h-[7.5rem]"
                        // Bỏ: style={{ height: "7.5rem" }}
                        >
                            <motion.div
                                className="flex flex-col items-center justify-center text-center"
                                variants={{
                                    initial: { y: "35%" },
                                    hover: { y: "-15%" },
                                }}
                                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                            >
                                {/* 5. 🚀 THAY ĐỔI: Cỡ chữ (text-xl) và line-height responsive */}
                                <div className="archivo-expanded text-xl md:text-6xl font-bold bg-gradient-to-r from-[#0074E5] to-[#162660] bg-clip-text text-transparent leading-[5rem] md:leading-[7.5rem] whitespace-nowrap">
                                    GET A FREE CONSULTATION
                                </div>
                                {/* 6. 🚀 THAY ĐỔI: Cỡ chữ (text-4xl) và line-height responsive */}
                                <div className="archivo-expanded text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#0074E5] to-[#162660] bg-clip-text text-transparent leading-[5rem] md:leading-[7.5rem]">
                                    GO
                                </div>
                            </motion.div>
                        </div>

                        {/* Gradient Line */}
                        <motion.div
                            // 7. 🚀 THÊM suppressHydrationWarning
                            suppressHydrationWarning
                            className="h-[4px] rounded-full transition-all mx-auto"
                            style={{
                                background: "linear-gradient(90deg, #0074E5 0%, #162660 100%)",
                            }}
                            // 8. 🚀 THAY ĐỔI: Áp dụng variants động
                            variants={isMobile ? lineVariantsMobile : lineVariantsDesktop}
                            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                        />
                    </motion.div>
                </Link>
                {/* 👆 3. KẾT THÚC THẺ LINK 👆 */}

            </div>

        </section>
    )
}