"use client"

import { useRef, useState, useEffect } from "react" // 👈 Thêm useState, useEffect
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

//  interfacing
interface GalleryImage {
    src: string
    alt: string
    widthClass: string
    heightClass: string
}

// ----------------------------------------------------------------
// 🔹 BƯỚC 1: Thêm hook để kiểm tra kích thước màn hình
// ----------------------------------------------------------------
// Hook này sẽ trả về 'true' nếu chiều rộng màn hình nhỏ hơn 1024px (breakpoint 'lg' của Tailwind)
// Chúng ta cần hook này vì 'useTransform' là JS và không thể đọc media query của CSS
function useIsMobile(breakpoint = 1024) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Chỉ chạy ở client-side
        const checkSize = () => {
            setIsMobile(window.innerWidth < breakpoint)
        }

        checkSize() // Kiểm tra ngay khi component mount
        window.addEventListener("resize", checkSize)

        // Cleanup listener khi component unmount
        return () => window.removeEventListener("resize", checkSize)
    }, [breakpoint])

    return isMobile
}

// ----------------------------------------------------------------
// 🔹 BƯỚC 2: Cập nhật dữ liệu ảnh với class responsive
// ----------------------------------------------------------------
// Mobile-first: class mặc định (ví dụ w-[80vw]) sẽ cho mobile
// 'lg:' prefix (ví dụ lg:w-[30vw]) sẽ cho desktop (lớn hơn 1024px)
const galleryImageData: GalleryImage[] = [
    { src: "/assets/ab1.jpg", alt: "Image 1", widthClass: "w-[80vw] lg:w-[30vw]", heightClass: "h-[60vh] lg:h-[30vh]" },
    { src: "/assets/ab2.png", alt: "Image 2", widthClass: "w-[70vw] lg:w-[22vw]", heightClass: "h-[75vh] lg:h-[55vh]" },
    { src: "/assets/ab3.jpg", alt: "Image 3", widthClass: "w-[65vw] lg:w-[16vw]", heightClass: "h-[55vh] lg:h-[35vh]" },
    { src: "/assets/ab4.jpg", alt: "Image 4", widthClass: "w-[75vw] lg:w-[24vw]", heightClass: "h-[70vh] lg:h-[60vh]" },
    { src: "/assets/ab5.png", alt: "Image 5", widthClass: "w-[85vw] lg:w-[35vw]", heightClass: "h-[65vh] lg:h-[50vh]" },
    { src: "/assets/ab1.jpg", alt: "Image 6", widthClass: "w-[80vw] lg:w-[30vw]", heightClass: "h-[50vh] lg:h-[30vh]" },
    { src: "/assets/ab2.png", alt: "Image 7", widthClass: "w-[80vw] lg:w-[30vw]", heightClass: "h-[70vh] lg:h-[60vh]" },
]

// Tổng chiều rộng mới (ước lượng)
// Mobile: 80+70+65+75+85+80+80 = 535vw -> Làm tròn 550vw (tính cả gap)
// Desktop: 30+22+16+24+35+30+30 = 187vw -> Làm tròn 200vw (tính cả gap)


export function StorySection() {
    const targetRef = useRef<HTMLDivElement>(null)
    const isMobile = useIsMobile(1024) // 👈 Sử dụng hook

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start 90%", "end start"],
    })

    // ----------------------------------------------------------------
    // 🔹 BƯỚC 3: Cung cấp các giá trị động cho useTransform
    // ----------------------------------------------------------------

    // Giá trị X (dịch chuyển ngang) tuỳ theo màn hình
    const xRange = isMobile
        ? ["10vw", "-460vw"] // Mobile: bắt đầu từ 10vw, kết thúc ở -460vw
        : ["30vw", "-130vw"] // Desktop: giữ nguyên giá trị cũ

    const rawX = useTransform(scrollYProgress, [0, 1], xRange)

    const x = useSpring(rawX, {
        stiffness: 60,
        damping: 20,
        mass: 0.8,
    })

    return (
        <section ref={targetRef} className="bg-white py-20 md:py-32 overflow-hidden -mt-36">
            <div className="max-w-7xl mx-auto px-8 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex items-start">
                        <h2 className="archivo-expanded text-3xl md:text-5xl font-medium text-[#000A1D] leading-tight">
                            Our Story <br /> and History
                        </h2>
                    </div>
                    <div className="neulis-alt-regular font-medium text-[#444444] text-sm md:text-lg leading-relaxed space-y-6">
                        <p>
                            Founded with a mission to solve the fragmentation problem in digital marketing, Onelink Marketing was
                            born to provide a unified, high-performance solution. We believe every brand deserves a strong
                            identity and superior performance, without the high costs of local agencies.
                        </p>
                        <p>Our journey is one of bridging the gap between quality and efficiency.</p>

                        <motion.div
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-block mt-4"
                        >
                            <Link href="/service">
                                <button className="relative overflow-hidden px-4 py-3 rounded-full font-medium text-sm group border border-slate-400">
                                    <span className="neulis-alt-regular font-medium relative z-30 text-white group-hover:text-slate-700 transition-colors duration-300">
                                        Explore Services
                                    </span>
                                    <span
                                        className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-20"
                                        aria-hidden="true"
                                    ></span>
                                    <span
                                        className="absolute inset-0 bg-gradient-to-r from-[#0074E5] to-[#162660] rounded-full z-10"
                                        aria-hidden="true"
                                    ></span>
                                </button>
                            </Link>

                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 🔹 Dải ảnh trượt ngang mượt mà */}
            <motion.div
                style={{ x }}
                // ----------------------------------------------------------------
                // 🔹 BƯỚC 4: Cập nhật tổng chiều rộng gallery
                // ----------------------------------------------------------------
                className="flex items-start gap-4 lg:gap-8 w-[550vw] lg:w-[200vw] will-change-transform"
            >
                {galleryImageData.map((image, index) => (
                    <div
                        key={index}
                        // Các class 'widthClass' và 'heightClass' giờ đã có responsive
                        className={`relative shrink-0 rounded-lg overflow-hidden ${image.widthClass} ${image.heightClass}`}
                    >
                        <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    </div>
                ))}
            </motion.div>
        </section>
    )
}