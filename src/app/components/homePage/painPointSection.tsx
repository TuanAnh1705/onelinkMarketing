"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const timelineItems = [
    {
        title: "Fragmented Marketing",
        description:
            "Working with multiple agencies leads to inconsistent messaging and a lack of control.",
        image: "/assets/pp1.png",
    },
    {
        title: "High Costs, Low ROI",
        description:
            "You invest heavily, but campaigns lack synergy, resulting in an uncertain return on investment.",
        image: "/assets/pp2.png",
    },
    {
        title: "Weak Brand Identity",
        description:
            "Your brand's message is unclear, and your website fails to generate real leads or conversions.",
        image: "/assets/pp3.png",
    },
    {
        title: "Global Scaling Struggle",
        description:
            "Lack of a cohesive strategy makes it difficult to compete and expand into international markets.",
        image: "/assets/pp4.png",
    },
]

export default function Page() {
    const [hoveredIndex, setHoveredIndex] = useState<number>(0)

    return (
        <main className="min-h-screen px-4 py-12 md:px-8 lg:px-0 lg:py-0 -mt-48 md:mt-5">
            <div className="mx-auto max-w-screen-2xl">
                {/* Title Section */}
                <div className="mb-12 lg:mb-20">
                    <h1 className="archivo-expanded mb-4 text-2xl md:text-6xl lg:text-7xl font-bold text-[#000A1D] lg:translate-x-36">
                        Are you struggling with <br /> these pain points?
                    </h1>
                </div>

                {/* Content Section */}
                <div className="relative w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Side - Image Stack */}
                    <div className="relative hidden lg:flex w-full max-w-md lg:max-w-none lg:w-[450px] items-center justify-center shrink-0 order-2 lg:order-1">
                        <div className="relative h-[400px] sm:h-[450px] lg:h-[550px] w-full lg:translate-x-20 lg:-translate-y-8">
                            {timelineItems.map((item, index) => (
                                <div
                                    key={`${index}-${hoveredIndex}`}
                                    className={cn(
                                        "absolute inset-0 origin-center transform-gpu",
                                        // Hiển thị tất cả ảnh có index <= hoveredIndex
                                        index <= hoveredIndex ? "opacity-100" : "opacity-0"
                                    )}
                                    style={{
                                        zIndex: index,
                                        // Ảnh hiện tại sẽ có animation zoom
                                        animation: index === hoveredIndex 
                                            ? "zoomIn 0.6s ease-out forwards" 
                                            : "none"
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Text List */}
                    <div className="w-full flex-1 flex flex-col justify-center lg:pl-28 lg:-translate-y-8 relative order-1 lg:order-2">
                        <div className="relative">
                            {/* Line đầu */}
                            <div className="h-px bg-linear-to-r from-[#0074E5] to-[#162660]" />

                            {timelineItems.map((item, index) => (
                                <div key={index} className="relative">
                                    <div
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onClick={() => setHoveredIndex(index)}
                                        className={cn(
                                            "relative py-8 px-3 cursor-pointer group transition-all duration-300",
                                            hoveredIndex === index
                                                ? "bg-[#162660] z-10"
                                                : "bg-transparent"
                                        )}
                                    >
                                        {/* Title - Description */}
                                        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                                            {/* Title */}
                                            <h3
                                                className={cn(
                                                    "neulis-alt-regular font-medium text-2xl lg:text-xl lg:whitespace-nowrap transition-all duration-300 transform",
                                                    hoveredIndex === index
                                                        ? "text-white lg:translate-x-3"
                                                        : "bg-linear-to-r from-[#0074E5] to-[#162660] bg-clip-text text-transparent translate-x-0"
                                                )}
                                            >
                                                {item.title}
                                            </h3>

                                            {/* Description */}
                                            <p
                                                className={cn(
                                                    "neulis-alt-extralight font-semibold md:text-md leading-relaxed transition-all duration-300 w-full lg:w-[520px] lg:-translate-x-5 whitespace-pre-line text-left",
                                                    hoveredIndex === index
                                                        ? "text-white"
                                                        : "text-[#444444]"
                                                )}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Line giữa */}
                                    {index < timelineItems.length - 1 && (
                                        <div
                                            className={cn(
                                                "h-px transition-all duration-300",
                                                hoveredIndex === index ||
                                                    hoveredIndex === index + 1
                                                    ? "bg-[#162660]"
                                                    : "bg-linear-to-r from-[#0074E5] to-[#162660]"
                                            )}
                                        />
                                    )}
                                </div>
                            ))}

                            {/* Line cuối */}
                            <div className="h-px bg-linear-to-r from-[#0074E5] to-[#162660]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                @keyframes zoomIn {
                    0% {
                        transform: scale(0);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
            `}</style>
        </main>
    )
}