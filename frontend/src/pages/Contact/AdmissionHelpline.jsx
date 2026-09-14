import { FiPhone, FiMail } from "react-icons/fi";

export default function AdmissionHelpline() {
    return (
        <section className="bg-gradient-to-r from-emerald-50 via-white to-blue-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-6xl">

                {/* heading */}
                <div className="mx-auto max-w-2xl text-center">

                    <h2 className="text-[30px] font-bold leading-[1.15] text-gray-900 sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
                        Admission Helpline
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-[14px] leading-6 text-gray-500 sm:mt-4 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
                        Need quick assistance with your admission inquiry? Connect with
                        our dedicated helpline team.
                    </p>

                </div>

                {/* contact cards */}
                <div className="mt-7 grid gap-4 sm:mt-8 md:grid-cols-2 md:gap-5">

                    {/* phone card */}
                    <div className="group flex min-h-[105px] items-start gap-4 border border-gray-100 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:px-6 sm:py-6">

                        {/* icon */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white sm:h-11 sm:w-11">
                            <FiPhone size={18} strokeWidth={2} aria-hidden="true" />
                        </div>

                        {/* content */}
                        <div className="min-w-0">

                            <h3 className="text-[14px] font-bold leading-tight text-gray-900 sm:text-[15px] md:text-[17px]">
                                Phone Numbers
                            </h3>

                            <div className="mt-2 flex flex-col gap-1">

                                <a href="tel:+919996500140" className="w-fit text-[12px] leading-5 text-blue-600 underline underline-offset-2 transition-colors hover:text-orange-600 sm:text-[13px] sm:leading-6 md:text-[15px]">
                                    +91-99965-00140
                                </a>

                                <a href="tel:+919996600140" className="w-fit text-[12px] leading-5 text-blue-600 underline underline-offset-2 transition-colors hover:text-orange-600 sm:text-[13px] sm:leading-6 md:text-[15px]">
                                    +91-99966-00140
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* email card */}
                    <div className="group flex min-h-[105px] items-start gap-4 border border-gray-100 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:px-6 sm:py-6">

                        {/* icon */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white sm:h-11 sm:w-11">
                            <FiMail size={18} strokeWidth={2} aria-hidden="true" />
                        </div>

                        {/* content */}
                        <div className="min-w-0">

                            <h3 className="text-[14px] font-bold leading-tight text-gray-900 sm:text-[15px] md:text-[17px]">
                                Email
                            </h3>

                            <a href="mailto:info@gni.edu.in" className="mt-2 block w-fit break-all text-[12px] leading-5 text-blue-600 underline underline-offset-2 transition-colors hover:text-orange-600 sm:text-[13px] sm:leading-6 md:text-[15px]">
                                info@gni.edu.in
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}