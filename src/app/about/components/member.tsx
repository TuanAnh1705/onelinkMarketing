"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

// ==================== DỮ LIỆU TEAM ====================
const teamMembers = [
    {
        name: "Tom Daniels",
        role: "Director",
        imageUrl: "/assets/mem2.webp",
    },
    {
        name: "Sam Sheehan",
        role: "Director",
        imageUrl: "/assets/mem3.webp",
    },
    {
        name: "Bheki Mhlanga",
        role: "General Manager",
        imageUrl: "/assets/mem4.webp",
    },
    {
        name: "Quang Ho Quoc",
        role: "Head of Marketing",
        imageUrl: "/assets/mem1.webp",
    },
    // Thêm thành viên (ví dụ lặp lại)
    {
        name: "Tuan Nguyen",
        role: "SEO Executive",
        imageUrl: "/assets/mem5.jpg",
    },
    {
        name: "Long Nguyen",
        role: "Content & Growth Executive",
        imageUrl: "/assets/mem6.jpg",
    },
    {
        name: "Trang Hoang",
        role: "Creative Executive",
        imageUrl: "/assets/mem7.jpg",
    },
    {
        name: "Anh Tran Tuan",
        role: "Website Developer",
        imageUrl: "/assets/mem8.png",
    },
    {
        name: "Nguyen Tan",
        role: "Social Media Executive",
        imageUrl: "/assets/mem9.png",
    },
]

// ==================== COMPONENT ====================
export function TeamSection() {
    // 1. Khởi tạo Embla Carousel VỚI CÁC TÙY CHỌN MỚI
    const [emblaRef] = useEmblaCarousel(
        {
            loop: false,        // 2. Đổi thành false: Không lặp lại khi kéo tay
            align: "start",
            dragFree: true,     // 1. Thêm: Kéo mượt hơn (có quán tính)
        },
        [
            Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnLastSnap: false, // 3. Thêm: Autoplay sẽ tự quay về đầu khi đến slide cuối
            }),
        ]
    )

    return (
        <section className="bg-white py-20 md:py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* --- Tiêu đề --- */}
                <div className="text-center mb-16">
                    <h2 className="archivo-expanded text-5xl md:text-6xl font-medium text-[#000A1D]">Meet Our Team</h2>
                </div>

                {/* --- Carousel Container --- */}
                <div className="embla w-full overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex -ml-8">
                        {teamMembers.map((member, index) => (
                            <div
                                className="embla__slide relative min-w-0 flex-shrink-0 flex-grow-0 
                                           basis-full pl-8 sm:basis-1/2 lg:basis-1/4"
                                key={index}
                            >
                                <div className="group text-left">
                                    {/* Container chứa ảnh */}
                                    <div className="relative w-full aspect-[3/4] bg-gray-300 overflow-hidden mb-4 shadow-md">
                                        <Image
                                            src={member.imageUrl}
                                            alt={`Photo of ${member.name}`}
                                            fill
                                            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        />
                                    </div>
                                    {/* Tên và Chức vụ */}
                                    <h3 className="archivo-expanded text-xl font-medium text-[#000A1D]">{member.name}</h3>
                                    <p className="neulis-alt-regular font-medium text-[#444444]">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}