import { FiArrowRight, FiBookOpen, FiMail, FiMapPin, FiPhone, FiUser } from "react-icons/fi";

const AdmissionEnquiry = () => {
    return (
        <section className="bg-[#f8f9ff] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-7xl">

                {/* heading */}
                <div className="max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f85b0b] sm:text-sm">
                        Admission Enquiry
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#18233b] sm:text-4xl md:text-5xl">
                        Start Your Journey With GNI
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                        Have questions about admission or a programme? Share your details
                        and our admission team can guide you through the next steps.
                    </p>
                </div>

                {/* content */}
                <div className="mt-8 grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_15px_45px_rgba(24,35,59,0.06)] lg:grid-cols-[0.8fr_1.2fr]">

                    {/* information */}
                    <div className="relative overflow-hidden bg-[#18233b] p-7 text-white sm:p-9 lg:p-10">

                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#f85b0b]/15" />

                        <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#f85b0b]/10" />

                        <div className="relative">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f85b0b]">
                                <FiBookOpen className="h-5 w-5" />
                            </div>

                            <h3 className="mt-6 text-2xl font-extrabold sm:text-3xl">
                                Need Admission Guidance?
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-300">
                                Our admission team can help you understand programmes,
                                admission requirements and the next steps for your application.
                            </p>

                            <div className="mt-7 space-y-5">

                                {/* phone */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#ff6b35]">
                                        <FiPhone className="h-4 w-4" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Call Us
                                        </p>

                                        <p className="mt-1 text-sm font-semibold">
                                            (+91) 98965-00140
                                        </p>

                                        <p className="text-sm font-semibold text-gray-300">
                                            (+91) 99986-00140
                                        </p>
                                    </div>
                                </div>

                                {/* email */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#ff6b35]">
                                        <FiMail className="h-4 w-4" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Email
                                        </p>

                                        <p className="mt-1 text-sm font-semibold">
                                            info@gni.edu.in
                                        </p>
                                    </div>
                                </div>

                                {/* address */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#ff6b35]">
                                        <FiMapPin className="h-4 w-4" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Visit Us
                                        </p>

                                        <p className="mt-1 text-sm leading-6 text-gray-200">
                                            Guru Nanak Institutions
                                            <br />
                                            Hema Majra Road, Mullana (Ambala)
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* form */}
                    <div className="p-7 sm:p-9 lg:p-10">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-[#18233b] sm:text-2xl">
                                Send an Enquiry
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Fill in your details and our team can assist you.
                            </p>
                        </div>

                        <form className="grid gap-5 sm:grid-cols-2">

                            {/* name */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#18233b]">
                                    Full Name
                                </label>

                                <div className="relative">
                                    <FiUser className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                                    <input type="text" placeholder="Enter your name" className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#f85b0b] focus:ring-2 focus:ring-[#f85b0b]/10" />
                                </div>
                            </div>

                            {/* email */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#18233b]">
                                    Email Address
                                </label>

                                <div className="relative">
                                    <FiMail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                                    <input type="email" placeholder="Enter your email" className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#f85b0b] focus:ring-2 focus:ring-[#f85b0b]/10" />
                                </div>
                            </div>

                            {/* phone */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#18233b]">
                                    Mobile Number
                                </label>

                                <div className="relative">
                                    <FiPhone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                                    <input type="tel" placeholder="Enter your mobile number" className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#f85b0b] focus:ring-2 focus:ring-[#f85b0b]/10" />
                                </div>
                            </div>

                            {/* programme */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#18233b]">
                                    Programme
                                </label>

                                <select className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-500 outline-none transition-all duration-300 focus:border-[#f85b0b] focus:ring-2 focus:ring-[#f85b0b]/10">
                                    <option value="">Select programme</option>
                                    <option value="btech">B.Tech</option>
                                    <option value="mtech">M.Tech</option>
                                    <option value="bba">BBA</option>
                                    <option value="mba">MBA</option>
                                    <option value="computer-applications">
                                        Computer Applications
                                    </option>
                                    <option value="bpharm">B.Pharm</option>
                                </select>
                            </div>

                            {/* message */}
                            <div className="sm:col-span-2">
                                <label className="mb-2 block text-sm font-semibold text-[#18233b]">
                                    Your Message
                                </label>

                                <textarea rows="4" placeholder="Tell us how we can help you..." className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#f85b0b] focus:ring-2 focus:ring-[#f85b0b]/10" />
                            </div>

                            {/* submit */}
                            <div className="sm:col-span-2">
                                <button type="submit" className="group inline-flex items-center gap-2 rounded-lg bg-[#f85b0b] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#dc4e08] hover:shadow-lg">
                                    Submit Enquiry

                                    <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionEnquiry;