/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

// ============================================================================
// 🔹 Component Toast (Thông báo Custom)
// ============================================================================
interface ToastProps {
    message: string
    type: "success" | "error"
    onClose: () => void
}

const Toast = ({ message, type, onClose }: ToastProps) => {
    // Tự động tắt sau 3 giây
    useEffect(() => {
        const timer = setTimeout(onClose, 3000)
        return () => clearTimeout(timer)
    }, [onClose])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className={`
                    pointer-events-auto px-8 py-4 rounded-xl shadow-2xl flex flex-col items-center gap-2 min-w-[300px] text-center
                    ${type === "success" 
                        ? "bg-[#162660] text-green-500 border border-[#162660]" // Màu Success Custom
                        : "bg-white text-red-600 border-2 border-red-100"   // Màu Error Custom
                    }
                `}
            >
                {/* Icon */}
                <div className={`text-3xl mb-1`}>
                    {type === "success" ? " ✔ " : "✘"}
                </div>
                
                {/* Message */}
                <span className="neulis-alt-regular font-medium text-lg">
                    {message}
                </span>
            </motion.div>
        </div>
    )
}

// ============================================================================
// 🔹 Component FormField
// ============================================================================
interface FormFieldProps {
    placeholder: string
    name: string
    type?: string
    isTextarea?: boolean
    required?: boolean
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    disabled?: boolean
}

function FormField({
    placeholder,
    name,
    type = "text",
    isTextarea = false,
    required = false,
    value,
    onChange,
    disabled
}: FormFieldProps) {
    const commonInputClasses =
        "w-full bg-transparent border-0 focus:ring-0 focus:outline-none pb-2 text-slate-800 placeholder-slate-500 text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"

    return (
        <div className="w-full relative">
            {isTextarea ? (
                <textarea
                    id={name}
                    name={name}
                    rows={1}
                    placeholder={required ? `${placeholder} *` : placeholder}
                    required={required}
                    className={commonInputClasses}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={required ? `${placeholder} *` : placeholder}
                    required={required}
                    className={commonInputClasses}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />
            )}
            <div className="h-[0.9px] w-full bg-linear-to-r from-[#0074E5] to-[#162660]" />
        </div>
    )
}

// ============================================================================
// 🔹 Component ContactFormSection chính
// ============================================================================
export function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        budget: "",
        subject: "",
        message: "",
    })

    const [isLoading, setIsLoading] = useState(false)
    
    // State quản lý Toast
    const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
        show: false,
        message: "",
        type: "success"
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const showToast = (message: string, type: "success" | "error") => {
        setToast({ show: true, message, type })
    }

    // Hàm Validate số điện thoại và budget
    const validateForm = () => {
        // Regex kiểm tra chỉ chứa số
        const isNumeric = (str: string) => /^\d+$/.test(str);

        if (!formData.phone || !isNumeric(formData.phone)) {
            showToast("Phone number must contain digits only!", "error");
            return false;
        }

        // Budget không bắt buộc (nếu rỗng thì bỏ qua), nhưng nếu đã nhập thì phải là số
        if (formData.budget && !isNumeric(formData.budget)) {
            showToast("Budget must be a number!", "error");
            return false;
        }

        return true;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // 1. Kiểm tra Validation trước khi gửi
        if (!validateForm()) return;

        setIsLoading(true)

        try {
            const response = await fetch("/api/sheet/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong")
            }

            // 2. Gửi thành công -> Show Toast Success
            showToast("Message sent successfully!", "success");
            
            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                budget: "",
                subject: "",
                message: "",
            })

        } catch (error: any) {
            console.error("Error submitting form:", error)
            // 3. Lỗi -> Show Toast Error
            showToast("Failed to send message. Please try again.", "error");
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="bg-white py-20 md:py-32 px-8 -mb-36 -mt-48 relative">
            
            {/* Hiển thị Toast (Overlay ở giữa màn hình) */}
            <AnimatePresence>
                {toast.show && (
                    <Toast 
                        message={toast.message} 
                        type={toast.type} 
                        onClose={() => setToast(prev => ({ ...prev, show: false }))} 
                    />
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto">
                <h2 className="archivo-expanded text-3xl md:text-5xl font-medium text-[#000A1D] text-center max-w-5xl mx-auto leading-tight">
                    Drop Us A Line To <br /> Get Your Project Started
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
                    {/* Cột trái */}
                    <div className="lg:col-span-1 space-y-12">
                        <div>
                            <h3 className="archivo-expanded text-lg font-medium text-[#444444] mb-4">Get in touch</h3>
                            <p className="text-[#000A1D] neulis-alt-regular font-medium leading-relaxed mb-4">
                                We’re excited to hear from you! <br /> Let’s start something together.
                            </p>
                            <a href="mailto:hello@onelinkmarketing.com" className="underline neulis-alt-regular font-medium text-[#000A1D] hover:text-[#0074E5] transition-colors">
                                hello@onelinkmarketing.com
                            </a>
                        </div>
                        <div>
                            <h3 className="archivo-expanded text-lg font-medium text-[#444444] mb-4">Follow</h3>
                            <div className="flex flex-col items-start space-y-2">
                                <a href="https://www.facebook.com/profile.php?id=61582703650572" className="underline neulis-alt-regular font-medium text-[#000A1D] hover:text-[#0074E5] transition-colors">Facebook</a>
                                <a href="https://www.linkedin.com/company/onelink-marketing/" className="underline neulis-alt-regular font-medium text-[#000A1D] hover:text-[#0074E5] transition-colors">Linkedin</a>
                                <a href="https://www.instagram.com/onelink_marketing/" className="underline neulis-alt-regular font-medium text-[#000A1D] hover:text-[#0074E5] transition-colors">Instagram</a>
                                <a href="https://www.behance.net/onelinkmarketi" className="underline neulis-alt-regular font-medium text-[#000A1D] hover:text-[#0074E5] transition-colors">Behance</a>
                            </div>
                        </div>
                    </div>

                    {/* Cột phải: Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12 neulis-alt-regular font-medium text-[#444444]">
                                <FormField placeholder="Name" name="name" required value={formData.name} onChange={handleChange} disabled={isLoading} />
                                <FormField placeholder="Email" name="email" type="email" required value={formData.email} onChange={handleChange} disabled={isLoading} />
                                
                                {/* Phone - Sẽ được validate */}
                                <FormField placeholder="Phone (Numbers only)" name="phone" type="tel" required value={formData.phone} onChange={handleChange} disabled={isLoading} />
                                
                                <FormField placeholder="Company" name="company" required value={formData.company} onChange={handleChange} disabled={isLoading} />
                                
                                {/* Budget - Sẽ được validate */}
                                <FormField placeholder="Budget (USD)" name="budget" value={formData.budget} onChange={handleChange} disabled={isLoading} />
                                
                                <FormField placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} disabled={isLoading} />
                            </div>

                            <div className="mb-12 mt-24">
                                <FormField placeholder="Message" name="message" isTextarea required value={formData.message} onChange={handleChange} disabled={isLoading} />
                            </div>

                            <motion.div transition={{ type: "spring", stiffness: 300 }} className="inline-block">
                                <button
                                    disabled={isLoading}
                                    className="relative overflow-hidden px-6 py-3 rounded-full font-medium text-sm group border border-slate-400 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="neulis-alt-regular font-medium relative z-30 text-white group-hover:text-slate-700 transition-colors duration-300">
                                        {isLoading ? "Sending..." : "Send Message"}
                                    </span>
                                    
                                    {/* Nền xanh (bình thường) */}
                                    <span className="absolute inset-0 bg-linear-to-r from-[#0074E5] to-[#162660] rounded-full z-10" aria-hidden="true"></span>
                                    
                                    {/* Nền trắng (hover) - chỉ hiện khi không loading */}
                                    {!isLoading && (
                                        <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-20" aria-hidden="true"></span>
                                    )}
                                </button>
                            </motion.div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}