"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useAnimationFrame, useVelocity, useSpring } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface GalleryImage {
    src: string
    alt: string
}

const galleryImageData: GalleryImage[] = [
    { src: "/assets/ab1.jpg", alt: "Image 1" },
    { src: "/assets/ab2.png", alt: "Image 2" },
    { src: "/assets/ab3.jpg", alt: "Image 3" },
    { src: "/assets/ab4.jpg", alt: "Image 4" },
    { src: "/assets/ab5.png", alt: "Image 5" },
    { src: "/assets/ab6.png", alt: "Image 6" },
    { src: "/assets/ab7.png", alt: "Image 7" },
]

export function StorySection() {
    const [isDragging, setIsDragging] = useState(false)
    const baseVelocity = -0.5 // Tốc độ tự động chạy (âm = sang trái)
    const x = useMotionValue(0)
    const dragVelocityRef = useRef(0)
    
    // Kích thước và tính toán
    const imageWidth = 500
    const gap = 20
    const itemWidth = imageWidth + gap
    const originalArrayLength = galleryImageData.length
    const totalWidth = originalArrayLength * itemWidth

    // Duplicate images nhiều lần
    const duplicatedImages = [
        ...galleryImageData,
        ...galleryImageData,
        ...galleryImageData,
        ...galleryImageData,
        ...galleryImageData,
        ...galleryImageData,
    ]

    // Theo dõi velocity khi drag để tạo momentum
    const velocity = useVelocity(x)

    // Auto-scroll animation với infinite loop
    useAnimationFrame((t, delta) => {
        if (!isDragging) {
            const moveBy = baseVelocity * (delta / 16)
            let currentX = x.get()
            
            // Thêm momentum từ drag vừa kết thúc
            if (Math.abs(dragVelocityRef.current) > 0.1) {
                dragVelocityRef.current *= 0.95 // Giảm dần momentum
                currentX += dragVelocityRef.current * (delta / 16)
            }
            
            let newX = currentX + moveBy

            // Wrap position seamlessly
            if (newX <= -totalWidth * 2) {
                newX += totalWidth
            } else if (newX >= -totalWidth) {
                newX -= totalWidth
            }

            x.set(newX)
        }
    })

    // Set vị trí ban đầu
    useEffect(() => {
        x.set(-totalWidth * 1.5)
    }, [x, totalWidth])

    // Xử lý khi bắt đầu kéo
    const handleDragStart = () => {
        setIsDragging(true)
        dragVelocityRef.current = 0
    }

    // Xử lý trong khi đang kéo
    const handleDrag = () => {
        const currentX = x.get()
        
        // Wrap position ngay khi đang kéo để tránh giật
        if (currentX <= -totalWidth * 2.5) {
            x.set(currentX + totalWidth)
        } else if (currentX >= -totalWidth * 0.5) {
            x.set(currentX - totalWidth)
        }
    }

    // Xử lý khi kết thúc kéo
    const handleDragEnd = () => {
        setIsDragging(false)
        
        // Lưu velocity để tạo momentum
        const currentVelocity = velocity.get()
        dragVelocityRef.current = currentVelocity * 0.01 // Scale down để không quá nhanh
        
        // Wrap position về khoảng an toàn
        let currentX = x.get()
        
        if (currentX <= -totalWidth * 2) {
            currentX += totalWidth
        } else if (currentX >= -totalWidth) {
            currentX -= totalWidth
        }
        
        x.set(currentX)
    }

    return (
        <section className="bg-white py-20 md:py-32 overflow-hidden -mt-36">
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
                                        className="absolute inset-0 bg-linear-to-r from-[#0074E5] to-[#162660] rounded-full z-10"
                                        aria-hidden="true"
                                    ></span>
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Carousel với drag mượt mà và momentum */}
            <div className="relative cursor-grab active:cursor-grabbing">
                <motion.div
                    style={{ x }}
                    drag="x"
                    dragElastic={0.05}
                    dragMomentum={true}
                    dragTransition={{ 
                        power: 0.2,
                        timeConstant: 200,
                        modifyTarget: (target) => {
                            // Không snap, để tự nhiên
                            return target
                        }
                    }}
                    onDragStart={handleDragStart}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    className="flex items-center gap-5 will-change-transform"
                >
                    {duplicatedImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative shrink-0 rounded-lg overflow-hidden w-[500px] h-[500px] select-none"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover pointer-events-none"
                                draggable={false}
                                priority={index < 8}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}