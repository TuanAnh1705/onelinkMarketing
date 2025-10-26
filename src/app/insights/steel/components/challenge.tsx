"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"

// Component ParallaxImage độc lập (giữ nguyên)
function ParallaxImage({
    src,
    alt,
    className,
    speed = "-15%",
}: {
    src: string
    alt: string
    className?: string
    speed?: string | number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const numericSpeed = typeof speed === 'string' ? parseFloat(speed) : speed;
    const positiveSpeed = Math.abs(numericSpeed);

    const y = useSpring(useTransform(scrollYProgress, [0, 1], [`-${positiveSpeed}%`, `${positiveSpeed}%`]), {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div ref={ref} className={`overflow-hidden rounded-3xl ${className}`}>
            <motion.div
                style={{ y }}
                className="relative h-[140%] w-full top-[-20%] will-change-transform"
            >
                <Image src={src} alt={alt} fill className="object-cover" />
            </motion.div>
        </div>
    )
}


export default function ChallengeSection() {
    return (
        <div className="min-h-screen bg-neutral-50 mt-12">
            {/* ✅ Top Section với đầy đủ text */}
            <section className="container mx-auto px-6 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Left - Title */}
                        <div>
                            <h2 className="archivo-expanded text-4xl lg:text-5xl font-medium tracking-tight text-[#000A1D]">
                                1. About the project
                            </h2>
                        </div>

                        {/* Right - Description */}
                        <div className="space-y-6">
                            <p className=" neulis-alt-regular font-medium text-lg leading-relaxed text-[#444444]">
                                OneLink Marketing partnered with Steel Works Seattle, a leading steel fabrication company with 30 years of experience, to completely transform their digital presence. They were masters of their craft, but their online brand was confusing and failed to communicate their true capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16 lg:py-20 -mt-28">
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Left - Title */}
                        <div>
                            <h2 className="archivo-expanded text-4xl lg:text-5xl font-medium tracking-tight text-[#000A1D]">
                                2. Services Used
                            </h2>
                        </div>

                        {/* Right - Description */}
                        <div className="space-y-6">
                            <p className=" neulis-alt-regular font-medium text-lg leading-relaxed text-[#444444] mb-0">
                                To solve their core identity problem and build a platform for growth, we provided our two key services:
                            </p>
                            <ul className="list-disc pl-5 text-lg">
                                <li> <strong>Brand Identity:</strong> We conducted a deep analysis of their market position and two distinct customer profiles (B2C and B2B). This informed a new, cohesive brand strategy, messaging, and visual direction.</li>
                                <li><strong>Custom Web Design & Development:</strong> We designed and built a new, high-performance website from the ground up, translating the new brand identity into a powerful, intuitive user experience.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parallax Grid Section */}
            <section
                className="relative -mt-72 h-[1400px] lg:h-[1800px] w-full"
            >
                <div className="container mx-auto px-6 h-full flex items-center">
                    
                    {/* ✅ SỬA ĐỔI: Quay lại grid 2 cột [3fr_2fr] trên desktop */}
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 lg:gap-6">

                        <ParallaxImage
                            src="/assets/steel1.png"
                            alt="Tag fitness socks"
                            className="h-[400px] lg:h-[600px]"
                            speed="-8%"
                        />
                        
                        {/* ✅ SỬA ĐỔI: Wrapper cho ảnh nền và logo */}
                        <div className="relative h-[400px] lg:h-[600px]">
                            {/* Ảnh nền (Parallax) */}
                            <ParallaxImage
                                src="/assets/steel2.jpg"
                                alt="Athlete on sports court"
                                className="w-full h-full" // Cho nó lấp đầy wrapper
                                speed="-12%"
                            />
                            
                            {/* Logo (Ảnh thường, không Parallax) */}
                            <div className="absolute inset-0 z-10 flex items-center justify-center p-8">
                                <Image
                                    src="/assets/avatar-1.png"
                                    alt="Steel Works Seattle Logo"
                                    width={200}
                                    height={200}
                                    className="object-contain" // Dùng object-contain để logo không bị méo
                                />
                            </div>
                        </div>
                        
                        <ParallaxImage
                            src="/assets/steel3.png"
                            alt="People on athletic track"
                            // ✅ SỬA ĐỔI: Quay lại col-span-2
                            className="lg:col-span-2 h-[400px] lg:h-[600px]"
                            speed="-16%"
                        />

                    </div>
                </div>
            </section>
        </div>
    )
}