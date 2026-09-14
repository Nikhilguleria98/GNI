import { useState } from "react";
import { FiClock, FiMapPin, FiMail, FiPhone, FiSend, FiCheckCircle, FiUser, FiBookOpen, FiArrowRight } from "react-icons/fi";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [activeField, setActiveField] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);
        setActiveField("success");

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });

        setTimeout(() => {
            setSubmitted(false);
            setActiveField("");
        }, 3000);
    };

    const isActive = (field) => activeField === field;

    return (
        <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-6xl">

                {/* contact card */}
                <div className="grid overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm lg:grid-cols-2">

                    {/* left side */}
                    <div className="border-b border-gray-200 p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">

                        {/* heading */}
                        <div className="group w-fit">
                            <h2 className="text-[24px] font-bold leading-tight text-gray-900 sm:text-[30px] md:text-[34px] lg:text-[36px]">
                                Contact Us
                            </h2>

                            <div className="mt-2 h-[3px] w-0 overflow-hidden rounded-full transition-all duration-500 ease-out group-hover:w-full">
                                <div className="h-full w-full rounded-full bg-orange-500" />
                            </div>
                        </div>


                        {/* message orbit */}
                        <div className="relative mt-7 mb-8 h-[300px] overflow-hidden rounded-2xl border border-orange-100 bg-[#fffaf5]">

                            {/* background grid */}
                            <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(249,115,22,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.10) 1px, transparent 1px)", backgroundSize: "25px 25px" }} />

                            {/* background glow */}
                            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/20 blur-3xl" />


                            {/* floating particles */}
                            <span className="absolute left-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-orange-400 animate-[floatOne_4s_ease-in-out_infinite]" />

                            <span className="absolute right-[15%] top-[25%] h-1 w-1 rounded-full bg-orange-300 animate-[floatTwo_3s_ease-in-out_infinite]" />

                            <span className="absolute left-[20%] bottom-[22%] h-1 w-1 rounded-full bg-orange-300 animate-[floatTwo_4s_ease-in-out_infinite]" />

                            <span className="absolute right-[25%] bottom-[17%] h-1.5 w-1.5 rounded-full bg-orange-400 animate-[floatOne_3.5s_ease-in-out_infinite]" />


                            {/* outer orbit */}
                            <div className="absolute left-1/2 top-1/2 h-[225px] w-[225px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200/70">

                                {/* rotating dashed ring */}
                                <div className="absolute inset-[-8px] rounded-full border border-dashed border-orange-200/60 animate-[orbitRotate_18s_linear_infinite]" />

                                {/* moving orbit dot */}
                                <div className="absolute left-1/2 top-[-4px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.7)] animate-[orbitDot_6s_linear_infinite]" />

                            </div>


                            {/* inner orbit */}
                            <div className="absolute left-1/2 top-1/2 h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-100">

                                <div className="absolute inset-[-5px] rounded-full border border-orange-100/60 animate-[orbitRotateReverse_14s_linear_infinite]" />

                            </div>


                            {/* central gni */}
                            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

                                {/* central glow */}
                                <div className={`absolute inset-[-18px] rounded-full transition-all duration-700 ${activeField === "success" ? "bg-green-400/20" : activeField ? "bg-orange-400/20" : "bg-orange-300/10"}`} />

                                {/* gni circle */}
                                <div className={`relative flex h-[78px] w-[78px] items-center justify-center rounded-full border-[3px] bg-white shadow-xl transition-all duration-700 ${activeField === "success" ? "border-green-500" : activeField ? "border-orange-500" : "border-orange-200"}`}>

                                    <div className={`flex h-[58px] w-[58px] items-center justify-center rounded-full text-white transition-all duration-500 ${activeField === "success" ? "bg-green-500" : "bg-orange-500"}`}>

                                        {activeField === "success" ? (
                                            <FiCheckCircle size={26} className="animate-[successScale_0.6s_ease-out]" />
                                        ) : (
                                            <div className="text-center">
                                                <p className="text-[14px] font-bold tracking-wide">
                                                    GNI
                                                </p>

                                                <p className="text-[6px] font-medium tracking-[2px] text-white/80">
                                                    CONNECT
                                                </p>
                                            </div>
                                        )}

                                    </div>

                                </div>

                            </div>


                            {/* top node - inquiry */}
                            <div className={`absolute left-1/2 top-[8px] z-10 -translate-x-1/2 transition-all duration-500 ${isActive("subject") || isActive("message") ? "scale-110" : "scale-100"}`}>

                                <div className={`flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-md transition-all duration-500 ${isActive("subject") || isActive("message") ? "border-orange-500 bg-orange-500 text-white shadow-orange-200" : "border-gray-200 text-gray-400"}`}>
                                    <FiBookOpen size={17} />
                                </div>

                                <p className="mt-1 text-center text-[8px] font-semibold uppercase tracking-wide text-gray-400">
                                    Inquiry
                                </p>

                            </div>


                            {/* left node - student */}
                            <div className={`absolute left-[8%] top-1/2 z-10 -translate-y-1/2 transition-all duration-500 ${isActive("name") ? "scale-110" : "scale-100"}`}>

                                <div className={`flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-md transition-all duration-500 ${isActive("name") ? "border-orange-500 bg-orange-500 text-white shadow-orange-200" : "border-gray-200 text-gray-400"}`}>
                                    <FiUser size={17} />
                                </div>

                                <p className="mt-1 text-center text-[8px] font-semibold uppercase tracking-wide text-gray-400">
                                    Student
                                </p>

                            </div>

                            {/* right node - connect */}
                            <div className={`absolute right-[8%] top-1/2 z-10 -translate-y-1/2 transition-all duration-500 ${isActive("email") || isActive("phone") ? "scale-110" : "scale-100"}`}>

                                <div className={`flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-md transition-all duration-500 ${isActive("email") || isActive("phone") ? "border-orange-500 bg-orange-500 text-white shadow-orange-200" : "border-gray-200 text-gray-400"}`}>

                                    {isActive("phone") ? (
                                        <FiPhone size={17} />
                                    ) : (
                                        <FiMail size={17} />
                                    )}

                                </div>

                                <p className="mt-1 text-center text-[8px] font-semibold uppercase tracking-wide text-gray-400">
                                    Connect
                                </p>

                            </div>


                            {/* bottom node - send */}
                            <div className={`absolute bottom-[7px] left-1/2 z-10 -translate-x-1/2 transition-all duration-500 ${activeField === "success" ? "scale-110" : "scale-100"}`}>

                                <div className={`flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-md transition-all duration-500 ${activeField === "success" ? "border-green-500 bg-green-500 text-white shadow-green-200" : "border-gray-200 text-gray-400"}`}>
                                    <FiSend size={17} />
                                </div>

                                <p className="mt-1 text-center text-[8px] font-semibold uppercase tracking-wide text-gray-400">
                                    Send
                                </p>

                            </div>


                            {/* status bar */}
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full border border-orange-100 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm">

                                <div className="flex items-center gap-2">

                                    <span className={`h-1.5 w-1.5 rounded-full ${activeField === "success" ? "bg-green-500" : activeField ? "bg-orange-500 animate-pulse" : "bg-gray-300"}`} />

                                    <span className="text-[9px] font-medium text-gray-500 sm:text-[10px]">

                                        {activeField === "success" ? "Message successfully connected" : activeField === "name" ? "Student profile initiated" : activeField === "email" ? "Communication channel active" : activeField === "phone" ? "Direct connection active" : activeField === "subject" ? "Inquiry channel activated" : activeField === "message" ? "Message ready to travel" : "Your connection starts here"}

                                    </span>

                                </div>

                                <FiArrowRight size={13} className="hidden text-orange-400 sm:block" />

                            </div>

                        </div>


                        {/* address */}
                        <div className="mt-5 flex items-start gap-3">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition-transform duration-300 hover:scale-110 sm:h-10 sm:w-10">
                                <FiMapPin size={18} />
                            </div>

                            <div>

                                <p className="text-[14px] font-semibold leading-tight text-gray-900 sm:text-[15px] md:text-[16px]">
                                    Guru Nanak Institutions
                                </p>

                                <p className="mt-1 text-[12px] leading-5 text-gray-500 sm:text-[13px] sm:leading-6 md:text-[14px]">
                                    Hema Majra Road, Mullana (Ambala)
                                </p>

                            </div>

                        </div>


                        {/* map */}
                        <div className="mt-6 overflow-hidden rounded-md border border-gray-200 transition-shadow duration-500 hover:shadow-md">

                            <iframe title="Jindal's Guru Nanak Institutions Location" src="https://www.google.com/maps?q=Jindal%27s%20Guru%20Nanak%20Institutions%2C%20Mullana%2C%20Ambala%2C%20Haryana&output=embed" className="h-[230px] w-full border-0 sm:h-[270px] lg:h-[285px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                        </div>


                        {/* office hours */}
                        <div className="mt-5 flex items-start gap-3">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition-transform duration-300 hover:scale-110 sm:h-10 sm:w-10">
                                <FiClock size={18} />
                            </div>

                            <div>

                                <p className="text-[14px] font-semibold leading-tight text-gray-900 sm:text-[15px] md:text-[16px]">
                                    Office Hours
                                </p>

                                <p className="mt-1 text-[12px] leading-5 text-gray-500 sm:text-[13px] sm:leading-6 md:text-[14px]">
                                    Monday to Saturday: 9:00 AM - 5:00 PM IST
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* right side - form */}
                    <div className="p-5 sm:p-7 lg:p-8">

                        {/* heading */}
                        <div className="group w-fit">

                            <h2 className="text-[24px] font-bold leading-tight text-gray-900 sm:text-[30px] md:text-[34px] lg:text-[36px]">
                                Send Us a Message
                            </h2>

                            <div className="mt-2 h-[3px] w-0 overflow-hidden rounded-full transition-all duration-500 ease-out group-hover:w-full">
                                <div className="h-full w-full rounded-full bg-orange-500" />
                            </div>

                        </div>


                        {/* success message */}
                        {submitted && (
                            <div className="mt-5 flex animate-[successReveal_0.5s_ease-out] gap-3 rounded-md border border-green-200 bg-green-50 p-3">

                                <FiCheckCircle size={19} className="mt-0.5 shrink-0 text-green-600" />

                                <div>

                                    <p className="text-[13px] font-semibold text-green-700 sm:text-[14px] md:text-[15px]">
                                        Message sent successfully!
                                    </p>

                                    <p className="mt-1 text-[12px] text-green-600 sm:text-[13px] md:text-[14px]">
                                        Thank you for contacting us. We will get back to you shortly.
                                    </p>

                                </div>

                            </div>
                        )}


                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                            {/* name & email */}
                            <div className="grid gap-4 sm:grid-cols-2">

                                <div>

                                    <label htmlFor="name" className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>

                                    <div className="relative">

                                        <FiUser size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isActive("name") ? "text-orange-500" : "text-gray-400"}`} />

                                        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} onFocus={() => setActiveField("name")} onBlur={() => setActiveField("")} placeholder="Your name" required className="h-10 w-full rounded-md border border-gray-200 pl-9 pr-3 text-[12px] outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:h-11 sm:text-[13px] md:text-[14px]" />

                                    </div>

                                </div>

                                <div>

                                    <label htmlFor="email" className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>

                                    <div className="relative">

                                        <FiMail size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isActive("email") ? "text-orange-500" : "text-gray-400"}`} />

                                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} onFocus={() => setActiveField("email")} onBlur={() => setActiveField("")} placeholder="Your email" required className="h-10 w-full rounded-md border border-gray-200 pl-9 pr-3 text-[12px] outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:h-11 sm:text-[13px] md:text-[14px]" />

                                    </div>

                                </div>

                            </div>


                            {/* phone */}
                            <div>

                                <label htmlFor="phone" className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                                    Phone Number
                                </label>

                                <div className="relative">

                                    <FiPhone size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isActive("phone") ? "text-orange-500" : "text-gray-400"}`} />

                                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} onFocus={() => setActiveField("phone")} onBlur={() => setActiveField("")} placeholder="Your phone number (optional)" className="h-10 w-full rounded-md border border-gray-200 pl-9 pr-3 text-[12px] outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:h-11 sm:text-[13px] md:text-[14px]" />

                                </div>

                            </div>


                            {/* subject */}
                            <div>

                                <label htmlFor="subject" className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                                    Subject <span className="text-red-500">*</span>
                                </label>

                                <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} onFocus={() => setActiveField("subject")} onBlur={() => setActiveField("")} placeholder="Please enter your subject" required className="h-10 w-full rounded-md border border-gray-200 px-3 text-[12px] outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:h-11 sm:text-[13px] md:text-[14px]" />

                            </div>


                            {/* message */}
                            <div>

                                <label htmlFor="message" className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                                    Message <span className="text-red-500">*</span>
                                </label>

                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} onFocus={() => setActiveField("message")} onBlur={() => setActiveField("")} placeholder="Tell us about your inquiry - B.Tech programs, engineering colleges, admissions, etc." required minLength={10} maxLength={500} rows={5} className="w-full resize-none rounded-md border border-gray-200 px-3 py-2.5 text-[12px] leading-5 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:text-[13px] sm:leading-6 md:text-[14px]" />

                                <div className="mt-1 text-right">

                                    <span className="text-[10px] text-gray-400 sm:text-[11px] md:text-[12px]">
                                        {formData.message.length}/500 characters
                                    </span>

                                </div>

                            </div>


                            {/* submit button */}
                            <button type="submit" className="group inline-flex items-center gap-2 rounded-md bg-orange-600 px-6 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300 sm:px-7 sm:py-3.5 sm:text-[13px] md:text-[14px]">

                                <FiSend size={16} className="transition-transform duration-300 group-hover:translate-x-1" />

                                Send Message

                                <FiArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />

                            </button>

                        </form>

                    </div>

                </div>

            </div>


            {/* animation css */}
            <style>
                {`
                    // outer orbit

                    @keyframes orbitRotate {
                        from {
                            transform: rotate(0deg);
                        }

                        to {
                            transform: rotate(360deg);
                        }
                    }

                    // inner orbit

                    @keyframes orbitRotateReverse {
                        from {
                            transform: rotate(360deg);
                        }

                        to {
                            transform: rotate(0deg);
                        }
                    }


                    // moving orbit dot
                    @keyframes orbitDot {
                        from {
                            transform: rotate(0deg) translateX(112px) rotate(0deg);
                        }

                        to {
                            transform: rotate(360deg) translateX(112px) rotate(-360deg);
                        }
                    }


                    // floating particle 1
                    @keyframes floatOne {
                        0%,
                        100% {
                            transform: translate(0, 0);
                            opacity: 0.4;
                        }

                        50% {
                            transform: translate(8px, -8px);
                            opacity: 1;
                        }
                    }


                    // floating particle 2
                    @keyframes floatTwo {
                        0%,
                        100% {
                            transform: translate(0, 0);
                            opacity: 0.3;
                        }

                        50% {
                            transform: translate(-7px, 8px);
                            opacity: 1;
                        }
                    }


                    // success icon
                    @keyframes successScale {
                        0% {
                            transform: scale(0);
                            opacity: 0;
                        }

                        70% {
                            transform: scale(1.2);
                            opacity: 1;
                        }

                        100% {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }


                    // success message
                    @keyframes successReveal {
                        from {
                            opacity: 0;
                            transform: translateY(-8px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }


                    // reduced motion
                    @media (prefers-reduced-motion: reduce) {
                        *,
                        *::before,
                        *::after {
                            animation-duration: 0.01ms !important;
                            animation-iteration-count: 1 !important;
                            transition-duration: 0.01ms !important;
                        }
                    }

                `}
            </style>

        </section>
    );
}