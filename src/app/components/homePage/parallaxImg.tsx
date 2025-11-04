"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"

export default function ParallaxImage() {
    const sectionRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 0.8], [0, -400])
    const smoothY = useSpring(y, { stiffness: 100, damping: 20 })

    return (
        // ✅ BƯỚC 1: XÓA TẤT CẢ -mt-40, -mt-60, -mt-80
        // ✅ BƯỚC 2: THÊM MỘT GIÁ TRỊ VỚI 'vh' ĐỂ TẠO SỰ ĐỒNG BỘ (ví dụ: -mt-[30vh])
        // ✅ BƯỚC 3: THÊM 'isolate' ĐỂ FIX LỖI STACKING
        <div className="relative h-screen z-0 isolate -mt-96 md:-mt-[33vh]">
            {/* Bạn có thể điều chỉnh '-mt-[30vh]'
              thành '-mt-[25vh]' hoặc '-mt-[35vh]'
              cho đến khi đạt được độ chồng lấp mong muốn
            */}

            <section
                ref={sectionRef}
                className="relative h-[120vh] flex items-center justify-center overflow-hidden"
            >
                {/* ... code bên trong giữ nguyên ... */}

                <div className="flex justify-center lg:justify-end w-full max-w-7xl mx-auto px-4 lg:px-0">
                    <div
                        className="relative overflow-hidden bg-white/5
                                   w-full h-[350px] -translate-y-12 
                                   md:h-[500px] md:-translate-y-16
                                   lg:ml-auto lg:w-full lg:max-w-[1200px] lg:h-[650px] lg:-translate-y-24 lg:translate-x-24"
                    >
                        <motion.div
                            style={{ y: smoothY }}
                            className="relative w-full h-[250%] -top-[20%]"
                        >
                            <Image
                                src="/assets/section1.jpg"
                                alt="Scroll animation visual"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}