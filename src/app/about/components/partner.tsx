"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link" // 👈 1. IMPORT LINK

// ===================================================================
// 🚀 1. SAO CHÉP HOOK useMediaQuery TỪ VÍ DỤ CỦA BẠN
// (Hook này đã được sửa lỗi "flash" khi hydration)
// ===================================================================
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
// 🚀 2. ĐỊNH NGHĨA CÁC VARIANTS RESPONSIVE
// ===================================================================

// Giá trị gốc của bạn cho desktop
const lineVariantsDesktop = {
    initial: { width: "500px" },
    hover: { width: "140px" },
}

// Giá trị mới cho mobile
const lineVariantsMobile = {
    initial: { width: "250px" }, // Khớp với "CONTACT US" (text-2xl)
    hover: { width: "90px" },   // Khớp với "GO" (text-4xl)
}


export default function Partner() {
    const containerRef = useRef<HTMLDivElement>(null)

    // 🚀 3. SỬ DỤNG HOOK
    const isMobile = useMediaQuery("(max-width: 767px)")

    return (
        <section className="relative flex flex-col items-center justify-center h-screen space-y-5 overflow-hidden bg-white/0 -mt-64">
            <div className="mb-16">
                {/* Tiêu đề này đã responsive (text-3xl md:text-6xl) */}
                <h1 className="archivo-expanded text-3xl md:text-6xl font-medium text-center tracking-wider text-[#000A1D] mb-2 px-4">
                    Partner with a Global Team Today
                </h1>
            </div>

            {/* ======= Main Button ======= */}
            {/* 💡 2. BỌC BẰNG LINK TỚI /contact */}
            <Link href="/contact">
                <motion.div
                    ref={containerRef}
                    // 💡 3. Xóa "cursor-pointer" (Link đã xử lý)
                    className="inline-flex flex-col items-center gap-4 -mt-20"
                    whileHover="hover"
                    initial="initial"
                >
                    {/* Text Wrapper */}
                    <div
                        // 🚀 4. THAY ĐỔI: Chiều cao responsive (giống hệt GetAFree)
                        className="relative overflow-hidden flex items-center justify-center h-[5rem] md:h-[7.5rem]"
                    >
                        <motion.div
                            className="flex flex-col items-center justify-center"
                            variants={{
                                initial: { y: "35%" },
                                hover: { y: "-15%" },
                            }}
                            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                        >
                            {/* 🚀 5. THAY ĐỔI: Cỡ chữ (text-2xl) và line-height (leading) responsive */}
                            <div className="archivo-expanded text-2xl md:text-6xl font-bold bg-gradient-to-r from-[#0074E5] to-[#162660] bg-clip-text text-transparent leading-[5rem] md:leading-[7.5rem] whitespace-nowrap">
                                CONTACT US
                            </div>
                            {/* 🚀 6. THAY ĐỔI: Cỡ chữ (text-4xl) và line-height (leading) responsive */}
                            <div className="archivo-expanded text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#0074E5] to-[#162660] bg-clip-text text-transparent leading-[5rem] md:leading-[7.5rem]">
                                GO
                            </div>
                        </motion.div>
                    </div>

                    {/* Gradient Line */}
                    <motion.div
                        suppressHydrationWarning // Thêm để tránh lỗi hydration
                        className="h-[4px] rounded-full transition-all"
                        style={{
                            background: "linear-gradient(90deg, #0074E5 0%, #162660 100%)",
                        }}
                        // 🚀 7. THAY ĐỔI: Sử dụng variants động
                        variants={isMobile ? lineVariantsMobile : lineVariantsDesktop}
                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    />
                </motion.div>
            </Link> {/* 💡 4. ĐÓNG LINK */}
        </section>
    )
}