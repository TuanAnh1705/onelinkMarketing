"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"

// Hook 'useMediaQuery' (Giữ nguyên)
const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const media = window.matchMedia(query);
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
            const listener = () => setMatches(media.matches);
            media.addEventListener('change', listener);
            return () => media.removeEventListener('change', listener);
        }
    }, [matches, query]);
    return matches;
};


export default function SectionWork() {
    const section3Ref = useRef<HTMLDivElement>(null)

    // --- Các hooks Framer Motion (Giữ nguyên) ---
    const { scrollYProgress } = useScroll({
        target: section3Ref,
        offset: ["start start", "end start"],
    })
    const textXRaw = useTransform(scrollYProgress, [0, 0.4], ["53%", "-23%"])
    const textX = useSpring(textXRaw, { stiffness: 60, damping: 20, mass: 1.2 })
    const yearsOpacity = useSpring(useTransform(scrollYProgress, [0.38, 0.42], [1, 0]), { stiffness: 80, damping: 25 })
    const workScale = useSpring(useTransform(scrollYProgress, [0.4, 0.7], [1, 0.3]), { stiffness: 80, damping: 25 })
    const workOpacity = useSpring(useTransform(scrollYProgress, [0.7, 0.85], [1, 0]), { stiffness: 80, damping: 25 })
    const descriptionOpacity = useSpring(useTransform(scrollYProgress, [0.3, 0.5], [1, 0]), { stiffness: 80, damping: 25 })
    const descriptionClip = useTransform(scrollYProgress, [0.3, 0.5], ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 100%)"])

    // Sử dụng hook (Giữ nguyên)
    const isDesktop = useMediaQuery("(min-width: 1024px)");


    return (
        <section ref={section3Ref} className="min-h-[250vh] relative px-4 sm:px-8 md:px-16 lg:px-24 -top-96 md:-top-32 lg:-top-40">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center ">

                {/* CHỮ CHẠY NGANG */}
                <motion.div
                    // Tắt hiệu ứng trượt 'x' trên mobile (Giữ nguyên)
                    style={{
                        x: isDesktop ? textX : undefined,
                        fontFamily: "'Archivo Expanded', sans-serif"
                    }}
                    className="absolute whitespace-nowrap flex items-center justify-center -mt-48 md:-mt-72 lg:-mt-96"
                >
                    {/* 🚀 SỬA ĐỔI CHO "OUR" */}
                    <motion.span
                        style={{
                            // Desktop: Dùng opacity riêng (biến mất sớm)
                            // Mobile: Dùng opacity của "WORK" (biến mất cùng lúc)
                            opacity: isDesktop ? yearsOpacity : workOpacity,
                            // Desktop: Không scale
                            // Mobile: Scale giống hệt "WORK"
                            scale: isDesktop ? undefined : workScale
                        }}
                        /* 🚀 SỬA CỠ CHỮ: 
                           - Mobile (mặc định): 18vw
                           - Desktop (lg): 15vw
                           (Bạn có thể chỉnh 18vw thành số nhỏ hơn như 16vw, 14vw nếu muốn)
                        */
                        className="text-[11vw] lg:text-[15vw] font-bold text-[#000A1D] leading-none tracking-tight"
                    >
                        OUR&nbsp;&nbsp;
                    </motion.span>

                    {/* 🚀 SỬA ĐỔI CHO "WORK" */}
                    <motion.span
                        // Style này giữ nguyên, vì nó đã làm đúng ý bạn
                        style={{ scale: workScale, opacity: workOpacity }}
                        // 🚀 SỬA CỠ CHỮ: Đồng bộ với "OUR"
                        className="text-[11vw] lg:text-[15vw] font-bold text-[#000A1D] leading-none tracking-tight"
                    >
                        WORK
                    </motion.span>
                </motion.div>

                {/* DESCRIPTION (Giữ nguyên) */}
                <motion.div
                    style={{ opacity: descriptionOpacity, clipPath: descriptionClip, fontFamily: "'Neulis Alt Regular', sans-serif" }}
                    className="absolute bottom-48 left-6 right-6 mx-auto text-center max-w-md font-medium lg:bottom-64 lg:right-24 lg:left-auto lg:mx-0 lg:text-left"
                >
                    <p className="text-lg leading-relaxed text-[#444444]">
                        We are <span className="font-bold">Onelink Marketing</span> - uniting strategy,
                        creativity, and technical execution to transform
                        bold ideas into lasting impact. Our experienced
                        international team delivers global quality with
                        a superior price/performance ratio.
                    </p>
                </motion.div>

                {/* BUTTON (Giữ nguyên) */}
                <motion.div
                    style={{ opacity: descriptionOpacity, clipPath: descriptionClip, fontFamily: "'Neulis Alt Extralight', sans-serif" }}
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 lg:bottom-44 lg:right-90 lg:left-auto lg:translate-x-0"
                >
                    <Link href="/about">
                        <button className="relative overflow-hidden px-5 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#0074E5] to-[#162660] transition-colors duration-300 group">

                            <span className="relative z-20 flex items-center justify-center w-full h-full transition-colors duration-500 group-hover:text-[#162660]">
                                Learn More About Us
                            </span>

                            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-10"></span>

                            <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#444444] transition-colors duration-300 z-10 pointer-events-none"></span>

                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}