"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function PartnerSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"])

  return (
    <section className="bg-[#0a0e1a] text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="archivo-expanded text-4xl md:text-6xl text-white font-medium text-left md:text-center mb-16 md:mb-20">
          Why We Are Your Ideal Partner
        </h2>

        {/* ================== FEATURE CARDS ================== */}
        {/* Chuyển sang flex-col trên mobile, và flex-row từ breakpoint lg */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch mb-16 md:mb-32 gap-8 lg:gap-0 relative lg:translate-x-7">
          {features.map((feature, index) => (
            <div
              key={index}
              // Căn giữa card + divider trên mobile, và áp dụng translate-x trên desktop
              className={`flex flex-col lg:flex-row lg:items-stretch w-full items-start ${
                index >= 1 ? "lg:-translate-x-2" : ""
              }`}
            >
              <FeatureCard
                iconSrc={feature.iconSrc}
                title={feature.title}
                description={feature.description}
                reversed={index % 2 === 1}
                alignTop={index === 1 || index === 3} // Global Quality + Data-Driven Decisions
              />
              {index < features.length - 1 && <GradientDivider />}
            </div>
          ))}
        </div>

        {/* ================== METRICS SECTION ================== */}
        <div className="flex flex-col items-center">
          {/* Two-column container for image and text */}
          {/* Chuyển sang flex-col trên mobile, lg:flex-row trên desktop */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-20">
            {/* Hình bên trái với parallax effect */}
            <div
              ref={containerRef}
              className="relative w-full max-w-md lg:w-[720px] h-[500px] lg:h-[800px] overflow-hidden shrink-0"
            >
              <motion.div
                style={{ y }}
                className="relative w-full h-[140%] -top-[20%] will-change-transform"
              >
                <Image
                  src="/assets/6.png"
                  alt="Abstract gradient"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            {/* Cột phải: metrics */}
            {/* Bỏ h cố định, thêm mt-12 trên mobile */}
            <div className="h-auto lg:h-[800px] flex-1 flex flex-col w-full max-w-md lg:max-w-none lg:w-auto mt-12 lg:mt-0">
              <div>
                {/* Giảm font-size và căn giữa trên mobile */}
                <h3 className="archivo-expanded text-3xl md:text-5xl lg:text-6xl font-medium mb-8 md:mb-12 leading-tight text-white md:text-left lg:text-left">
                  Metrics That Matter
                </h3>
              </div>

              {/* Bỏ justify-between, dùng gap-10 trên mobile */}
              <div className="archivo-expanded grow flex flex-col justify-start lg:justify-between pt-0 lg:pt-8 gap-10 lg:gap-0">
                <MetricItem value="300%+" label="Improvement in website traffic" />
                <MetricItem value="50%+" label="Increase in lead conversion rates" />
                <MetricItem value="20%+" label="Reduction in bounce rate" />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-16 md:mt-20">
            <motion.div whileHover={{ scale: 1.05 }}>
              {/* Giảm padding và font-size trên mobile */}
              <Link href="/contact">
                <button className="relative overflow-hidden px-10 py-3 md:px-5 md:py-2 rounded-full font-medium text-base md:text-sm text-white border border-white/30 hover:border-transparent bg-transparent transition-colors duration-300 group">
                  <span className="relative z-20 flex items-center justify-center w-full h-full">
                    Contact Us
                  </span>
                  <span className="absolute inset-0 bg-linear-to-r from-[#0074E5] to-[#162660] translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-10"></span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ================== DATA ==================
const features = [
  {
    iconSrc: "/assets/1.png",
    title: "Integrated \n Approach",
    description:
      "Our unified strategy \n ensures all your marketing \n efforts work together for \n maximum impact.",
  },
  {
    iconSrc: "/assets/2.png",
    title: "Global \n Quality",
    description:
      "Our international team \n delivers world-class service \n tailored to the US, UK, and \n AU markets.",
  },
  {
    iconSrc: "/assets/3.png",
    title: "Cost-Effective \n Solutions",
    description:
      "Leverage our Vietnam-based resources for a superior price-to-performance ratio.",
  },
  {
    iconSrc: "/assets/4.png",
    title: "Data-Driven \n Decisions",
    description:
      "Every strategy is built on \n solid market research and \n data analysis for \n predictable results.",
  },
  {
    iconSrc: "/assets/5.png",
    title: "End-To-End \n Partnership",
    description:
      "From brand foundation to \n performance growth, we \n are with you every step of \n the way.",
  },
]

// ================== SUB-COMPONENTS ==================

function FeatureCard({
  iconSrc,
  title,
  description,
  reversed = false,
  alignTop = false,
}: {
  iconSrc: string
  title: string
  description: string
  reversed?: boolean
  alignTop?: boolean
}) {
  // ---- Render Blocks ----
  const TextBlock = () => (
    <div>
      <h3 className="archivo-expanded text-2xl text-white font-medium mb-2 whitespace-pre-line leading-tight">
        {title}
      </h3>
      <p className="neulis-alt-regular text-[#ADADAD] text-sm md:text-base leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  )

  const Icon = ({ marginClass = "" }: { marginClass?: string }) => (
    // Giảm kích thước icon trên mobile
    <div className={`relative w-14 h-14 md:w-20 md:h-20 ${marginClass}`}>
      <Image src={iconSrc} alt={title} fill className="object-contain" />
    </div>
  )

  // ---- Logic Rendering (ĐÃ SỬA THEO YÊU CẦU) ----

  // Mặc định là 'flex-col' (Icon trên, Text dưới)
  const baseClasses =
    "flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:w-[240px] flex flex-col text-left lg:pl-[16px] px-4 lg:px-0 h-auto lg:h-[340px] gap-4 lg:gap-0"

  // Logic cho 'alignTop' (Desktop: Text trên, Icon dưới)
  if (alignTop) {
    return (
      <div className={`${baseClasses} justify-start lg:justify-between`}>
        {/* Mobile: Luôn là Icon trên (lg:hidden) */}
        <Icon marginClass="mb-3 lg:hidden" />
        {/* Desktop: Text trên (hidden lg:block) */}
        <TextBlock />
        <Icon marginClass="mt-3 hidden lg:block" />
      </div>
    )
  }

  // Logic cho 'reversed' (Desktop: Text trên, Icon dưới)
  if (reversed) {
    return (
      <div className={`${baseClasses} justify-start lg:justify-end`}>
        {/* Mobile: Luôn là Icon trên (lg:hidden) */}
        <Icon marginClass="mb-3 lg:hidden" />
        {/* Desktop: Text trên (hidden lg:block) */}
        <TextBlock />
        <Icon marginClass="mt-3 hidden lg:block" />
      </div>
    )
  }

  // Logic mặc định (Mobile: Icon trên. Desktop: Icon trên)
  return (
    <div className={`${baseClasses} justify-start lg:justify-between`}>
      <Icon marginClass="mb-3" /> {/* Hiển thị cho cả hai */}
      <TextBlock />
    </div>
  )
}

function GradientDivider() {
  return (
    // Chuyển thành vạch ngang (w-full, h-px) trên mobile, và vạch dọc (w-px, h-[340px]) trên desktop
    <div className="shrink-0 lg:mt-0 mt-5 w-full max-w-xs h-px lg:w-px lg:h-[340px] bg-linear-to-r from-[#0074E5] to-[#162660] lg:bg-linear-to-b opacity-70 lg:mx-30" />
  )
}

function MetricItem({
  value,
  label,
  showLine = true,
}: {
  value: string
  label: string
  showLine?: boolean
}) {
  return (
    <div>
      {showLine && (
        // Thêm w-full và max-w để giới hạn chiều rộng trên mobile
        <div className="w-full max-w-[370px] h-px bg-linear-to-r from-[#0094FF] to-[#162660] mb-6" />
      )}
      {/* Chuyển sang flex-col trên mobile, và flex-row trên desktop */}
      <div className="flex flex-col lg:flex-row items-start lg:items-start gap-4 lg:gap-28">
        {/* Column for number (fixed width for alignment) */}
        <div className="w-full lg:w-[320px]">
          {/* Giảm font-size trên mobile */}
          <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold">{value}</div>
        </div>

        {/* Column for label (font size increased) */}
        {/* Giảm font-size và bỏ pt-3 trên mobile */}
        <div className="neulis-alt-regular font-medium pt-0 lg:pt-3 text-lg md:text-xl text-white/80">
          {label}
        </div>
      </div>
    </div>
  )
}