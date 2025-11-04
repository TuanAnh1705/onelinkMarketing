"use client"

import { motion } from "framer-motion"

// ============================================================================
// 🔹 Component FormField (hiển thị * đỏ cho required)
// ============================================================================
interface FormFieldProps {
	placeholder: string
	name: string
	type?: string
	isTextarea?: boolean
	required?: boolean
}

function FormField({ placeholder, name, type = "text", isTextarea = false, required = false }: FormFieldProps) {
	const commonInputClasses =
		"w-full bg-transparent border-0 focus:ring-0 focus:outline-none pb-2 text-slate-800 placeholder-slate-500 text-lg"

	return (
		<div className="w-full relative">
			{/* Bọc placeholder + dấu * trong một wrapper */}
			{isTextarea ? (
				<textarea
					id={name}
					name={name}
					rows={1}
					placeholder={required ? `${placeholder} *` : placeholder}
					required={required}
					className={commonInputClasses}
				/>
			) : (
				<input
					type={type}
					id={name}
					name={name}
					placeholder={required ? `${placeholder} *` : placeholder}
					required={required}
					className={commonInputClasses}
				/>
			)}
			<div className="h-[0.8px] w-full bg-gradient-to-r from-[#0074E5] to-[#162660]" />
		</div>
	)
}

// ============================================================================
// 🔹 Component ContactFormSection chính
// ============================================================================
export function ContactFormSection() {
	return (
		<section className="bg-white py-20 md:py-32 px-8 -mb-36 -mt-48">
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
							<a
								href="mailto:hello@onelinkmarketing.com"
								className="underline neulis-alt-regular font-medium text-[#000A1D] hover:text-[#0074E5] transition-colors"
							>
								hello@onelinkmarketing.com
							</a>
						</div>
						<div>
							<h3 className="archivo-expanded text-lg font-medium text-[#444444] mb-4">Follow</h3>
							<div className="flex flex-col items-start space-y-2">
								<a href="https://www.facebook.com/profile.php?id=61582703650572" className="underline neulis-alt-regular font-medium text-[#000A1D] hover:text-[#0074E5] transition-colors">
									Facebook
								</a>
								<a href="https://www.linkedin.com/company/onelink-marketing/" className="underline neulis-alt-regular font-medium text-[#000A1D] hover:text-[#0074E5] transition-colors">
									Linkedin
								</a>
								<a href="https://www.instagram.com/onelink_marketing/" className="underline neulis-alt-regular font-medium text-[#000A1D] hover:text-[#0074E5] transition-colors">
									Instagram
								</a>
								<a href="https://www.behance.net/onelinkmarketi" className="underline neulis-alt-regular font-medium text-[#000A1D] hover:text-[#0074E5] transition-colors">
									Behance
								</a>
							</div>
						</div>
					</div>

					{/* Cột phải: Form */}
					<div className="lg:col-span-2">
						<form onSubmit={(e) => e.preventDefault()}>
							{/* Input grid */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12 neulis-alt-regular font-medium">
								<FormField placeholder="Name" name="name" required />
								<FormField placeholder="Email" name="email" type="email" required />
								<FormField placeholder="Phone" name="phone" type="tel" required />
								<FormField placeholder="Company" name="company" required />
								<FormField placeholder="Budget" name="budget" />
								<FormField placeholder="Subject" name="subject" />
							</div>

							<div className="mb-12 mt-24">
								<FormField placeholder="Message" name="message" isTextarea required />
							</div>

							{/* Button */}
							<motion.div transition={{ type: "spring", stiffness: 300 }} className="inline-block">
								<button className="relative overflow-hidden px-4 py-3 rounded-full font-medium text-sm group border border-slate-400">
									<span className="neulis-alt-regular font-medium relative z-30 text-white group-hover:text-slate-700 transition-colors duration-300">
										Send Message
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
							</motion.div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
