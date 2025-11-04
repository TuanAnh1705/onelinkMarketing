"use client"

import React from "react"

// ============================================================================
// 🔹 Component Mũi Tên Ngang (Desktop)
// ============================================================================
function GradientArrowHorizontal() {
    return (
        <svg
            width="160"
            height="28"
            viewBox="0 0 120 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // Ẩn trên mobile, chỉ hiện trên desktop, và ngăn co lại
            className="hidden lg:block mx-4 flex-shrink-0"
        >
            <defs>
                <linearGradient id="arrow-gradient-horizontal" x1="0" y1="12" x2="120" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0074E5" />
                    <stop offset="1" stopColor="#162660" />
                </linearGradient>
            </defs>
            <path
                d="M0 12H110L100 2M110 12L100 22"
                stroke="url(#arrow-gradient-horizontal)" // Dùng gradient ngang
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

// ============================================================================
// 🔹 Component Mũi Tên Dọc (Mobile) - MỚI
// ============================================================================
function GradientArrowVertical() {
    return (
        <svg
            width="28" // Chiều rộng nhỏ
            height="100" // Chiều cao lớn
            viewBox="0 0 24 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // Hiện trên mobile, ẩn trên desktop, thêm khoảng cách
            className="block lg:hidden my-6"
        >
            <defs>
                {/* Định nghĩa gradient dọc */}
                <linearGradient id="arrow-gradient-vertical" x1="12" y1="0" x2="12" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0074E5" />
                    <stop offset="1" stopColor="#162660" />
                </linearGradient>
            </defs>
            <path
                // Vẽ đường thẳng từ trên (y=0) xuống dưới (y=90)
                // Vẽ đầu mũi tên ở (y=90)
                d="M12 0V90M12 90L2 80M12 90L22 80"
                stroke="url(#arrow-gradient-vertical)" // Dùng gradient dọc
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

// ============================================================================
// 🔹 Dữ liệu cho các bước (Không đổi)
// ============================================================================
const roadmapData = [
    {
        title: "Strategic Foundation",
        description: "Market research, brand audit, and keyword analysis to build a data-driven strategy.",
    },
    {
        title: "Core Identity Building",
        description: "Crafting a professional brand identity, and a core messaging framework for consistency.",
    },
    {
        title: "Digital Asset Activation",
        description: "Designing SEO/UX-optimized websites and digital collateral that work as lead magnets.",
    },
    {
        title: "Sustainable Performance",
        description: "Implementing SEO, social, and paid media campaigns to generate leads and scale your business.",
    },
]

// ============================================================================
// 🔹 Component RoadmapSection chính
// ============================================================================
export function RoadmapSection() {
    return (
        <section className="bg-white py-20 md:py-32 px-8 -mt-28">
            <div className="max-w-7xl mx-auto">
                <h2 className="archivo-expanded text-2xl md:text-5xl font-medium text-[#000A1D] text-center max-w-4xl mx-auto leading-tight">
                    Our 4-Step Roadmap to <br/> Sustainable Growth
                </h2>

                {/* THAY ĐỔI:
                  - Bỏ 'gap-y-12' (vì mũi tên dọc đã có 'my-6')
                  - Thêm 'items-center' (căn giữa các mục trên mobile)
                  - Thêm 'lg:items-start' (giữ nguyên layout cũ trên desktop)
                */}
                <div className="mt-20 flex flex-col lg:flex-row items-center lg:items-start justify-between">
                    {roadmapData.map((step, index) => (
                        <React.Fragment key={step.title}>
                            {/* Nội dung của một bước */}
                            <div className="flex-1 text-center lg:text-left max-w-sm">
                                <h3 className="neulis-alt-regular text-xl font-medium text-[#000A1D] mb-4">{step.title}</h3>
                                <p className="neulis-alt-regular font-medium text-[#444444] leading-relaxed">{step.description}</p>
                            </div>

                            {/* THAY ĐỔI:
                              - Hiển thị CẢ HAI mũi tên.
                              - CSS (hidden/block) sẽ tự động chọn đúng mũi tên để hiển thị.
                            */}
                            {index < roadmapData.length - 1 && (
                                <>
                                    <GradientArrowHorizontal />
                                    <GradientArrowVertical />
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}