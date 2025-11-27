"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const coreValuesData = [
    {
        title: "Vision",
        description: "To be the trusted end-to-end partner for global brands seeking sustainable growth.",
        imageUrl: "/assets/core1.png",
    },
    {
        title: "Mission",
        description:
            "To help every brand achieve a strong identity and superior performance, solving the problem of fragmented and ineffective solutions.",
        imageUrl: "/assets/core2.png",
    },
    {
        title: "Value",
        description: "Excellence, Integrity, Partnership, and Innovation.",
        imageUrl: "/assets/core3.png",
    },
]

export function CoreValuesSection() {
    const parallaxRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: parallaxRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

    return (
        // THAY ĐỔI: Giảm padding 'px-8' xuống 'px-6' cho mobile
        <section className="bg-[#050B18] text-white py-20 md:py-32 px-6 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* ==================== CORE VALUES ==================== */}
                <div className="text-center mb-20">
                    {/* THAY ĐỔI: Chỉnh lại cỡ chữ (mobile-first) */}
                    <h2 className="archivo-expanded text-4xl sm:text-5xl md:text-7xl text-white font-medium">Our Core Values</h2>
                </div>

                {/* --- 3 CARD TRÊN --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
                    {coreValuesData.map((value) => (
                        <div
                            key={value.title}
                            // THAY ĐỔI: Giảm padding 'p-8' xuống 'p-6' cho mobile
                            className="relative rounded-2xl overflow-hidden p-6 md:p-8 h-64 bg-linear-to-br from-[#0A4BE1] to-[#04205E]"
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={value.imageUrl}
                                    alt={value.title}
                                    fill
                                    className="object-contain translate-x-[20%] -translate-y-[30%] scale-110 opacity-80"
                                />
                            </div>
                            <div className="absolute inset-0 bg-[#0074E5]/70"></div>
                            {/* Vùng chứa text */}
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                {/* THAY ĐỔI: Cỡ chữ h3 responsive */}
                                <h3 className="archivo-expanded text-4xl md:text-5xl text-white font-bold">{value.title}</h3>
                                {/* THAY ĐỔI: Cỡ chữ p responsive */}
                                <p className="neulis-alt-regular font-medium text-white text-base md:text-lg leading-snug">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ==================== LEAD ENGINE ==================== */}
                <div ref={parallaxRef} className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-stretch overflow-hidden">
                    {/* --- ẢNH PARALLAX --- */}
                    {/* THAY ĐỔI: Chiều cao ảnh responsive */}
                    <div className="relative h-[350px] sm:h-[450px] lg:h-[560px] lg:col-span-1 overflow-hidden">
                        <motion.div
                            style={{ y }}
                            className="relative w-full h-[140%] -top-[20%] will-change-transform"
                        >
                            <Image
                                src="/assets/core.png"
                                alt="Abstract background"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* --- CARD TEXT BÊN PHẢI --- */}
                    {/* THAY ĐỔI: Padding responsive */}
                    <div className="bg-linear-to-br lg:col-span-2 from-[#0074E5] to-[#162660] p-6 sm:p-10 md:p-14 flex flex-col justify-start">
                        <div className="max-w-3xl">
                            <h2 className="archivo-expanded text-white text-3xl md:text-5xl font-medium leading-tight mb-8">
                                From a Lifeless Website to a Lead Engine
                            </h2>
                            <ul className="neulis-alt-regular font-medium space-y-4 text-base md:text-xl text-white">
                                <ListItem>
                                    An <span className="font-bold">SEO/UX-optimized website</span> that generates leads in the <span className="font-bold">US, UK, and AU markets.</span>
                                </ListItem>
                                <ListItem>A <span className="font-bold">clear and professional brand identity.</span></ListItem>
                                <ListItem>
                                    Digital assets integrated into a single, effective <span className="font-bold">lead engine.</span>
                                </ListItem>
                                <ListItem><span className="font-bold">Optimized costs</span> with high-performance results.</ListItem>
                            </ul>

                            <a href="/case-studies"
                                // THAY ĐỔI: Thêm 'mt-8' cho mobile
                                className="group relative inline-block mt-8 md:mt-10 text-white border border-white rounded-full px-6 py-2 text-sm transition-colors duration-300 ease-in-out overflow-hidden hover:text-black"
                            >
                                <span className="absolute inset-0 w-full h-full bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                                <span className="neulis-alt-regular font-medium relative">Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

function ListItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-start">
            <span className="text-white mr-3 mt-1.5">&#8226;</span>
            <span>{children}</span>
        </li>
    )
}