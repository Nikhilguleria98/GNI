import { useState } from "react";
import { FiClock, FiMapPin, FiMail, FiPhone, FiSend, FiCheckCircle } from "react-icons/fi";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });

        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-6xl">
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

                        {/* address */}
                        <div className="mt-5 flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 sm:h-10 sm:w-10">
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
                        <div className="mt-6 overflow-hidden rounded-md border border-gray-200">
                            <iframe title="Jindal's Guru Nanak Institutions Location" src="https://www.google.com/maps?q=Jindal%27s%20Guru%20Nanak%20Institutions%2C%20Mullana%2C%20Ambala%2C%20Haryana&output=embed" className="h-[230px] w-full border-0 sm:h-[270px] lg:h-[285px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>

                        {/* office hours */}
                        <div className="mt-5 flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 sm:h-10 sm:w-10">
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

                    {/* right side */}
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
                            <div className="mt-5 flex gap-3 rounded-md border border-green-200 bg-green-50 p-3">
                                <FiCheckCircle size={19} className="mt-0.5 shrink-0 text-green-600" />

                                <div>
                                    <p className="text-[13px] font-semibold text-green-700 sm:text-[14px] md:text-[15px]">
                                        Message sent successfully!
                                    </p>

                                    <p className="mt-1 text-[12px] text-green-600 sm:text-[13px] md:text-[14px]">
                                        Thank you for contacting us. We will get back to you
                                        shortly.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* form */}
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                            {/* name & email */}
                            <div className="grid gap-4 sm:grid-cols-2">

                                {/* name */}
                                <div>
                                    <label htmlFor="name" className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>

                                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your name" required className="h-10 w-full rounded-md border border-gray-200 px-3 text-[12px] outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:h-11 sm:text-[13px] md:text-[14px]" />
                                </div>

                                {/* email */}
                                <div>
                                    <label htmlFor="email" className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>

                                    <div className="relative">
                                        <FiMail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required className="h-10 w-full rounded-md border border-gray-200 pl-9 pr-3 text-[12px] outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:h-11 sm:text-[13px] md:text-[14px]" />
                                    </div>
                                </div>
                            </div>

                            {/* phone */}
                            <div>
                                <label htmlFor="phone" className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                                    Phone Number
                                </label>

                                <div className="relative">
                                    <FiPhone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Your phone number (optional)" className="h-10 w-full rounded-md border border-gray-200 pl-9 pr-3 text-[12px] outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:h-11 sm:text-[13px] md:text-[14px]" />
                                </div>
                            </div>

                            {/* subject */}
                            <div>
                                <label htmlFor="subject" className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                                    Subject <span className="text-red-500">*</span>
                                </label>

                                <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Please enter your subject" required className="h-10 w-full rounded-md border border-gray-200 px-3 text-[12px] outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:h-11 sm:text-[13px] md:text-[14px]" />
                            </div>

                            {/* message */}
                            <div>
                                <label htmlFor="message" className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                                    Message <span className="text-red-500">*</span>
                                </label>

                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your inquiry - B.Tech programs, engineering colleges, admissions, etc." required minLength={10} maxLength={500} rows={5} className="w-full resize-none rounded-md border border-gray-200 px-3 py-2.5 text-[12px] leading-5 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:text-[13px] sm:leading-6 md:text-[14px]" />

                                <div className="mt-1 text-right">
                                    <span className="text-[10px] text-gray-400 sm:text-[11px] md:text-[12px]">
                                        {formData.message.length}/500 characters
                                    </span>
                                </div>
                            </div>

                            {/* submit button */}
                            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-6 py-3 text-[12px] font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 sm:px-7 sm:py-3.5 sm:text-[13px] md:text-[14px]">
                                <FiSend size={16} />
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}