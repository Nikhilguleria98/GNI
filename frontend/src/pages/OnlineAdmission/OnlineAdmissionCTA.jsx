import { FiArrowRight, FiPhone } from "react-icons/fi";

const OnlineAdmissionCTA = () => {
    return (
        <section className="relative overflow-hidden bg-[#f85b0b] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="relative mx-auto max-w-7xl">
                <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto] lg:gap-14">

                    {/* content */}
                    <div className="max-w-3xl">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-100 sm:text-sm">
                            Take The Next Step
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Your Journey
                            <br />
                            Starts Here.
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-orange-50 sm:text-base sm:leading-7">
                            Take the next step towards your academic goals at Guru Nanak
                            Institutions. Explore your programme options and connect with
                            our admission team for guidance.
                        </p>
                    </div>

                    {/* actions */}
                    <div className="flex flex-col items-start gap-3 lg:items-end">

                        <a href="#admission-enquiry" className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-[#f85b0b] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto">
                            Start Your Enquiry

                            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>

                        <a href="tel:+919896500140" className="group inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/60 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto">
                            <FiPhone className="h-4 w-4" />

                            Talk to Admission Team
                        </a>

                    </div>
                </div>

                {/* bottom information */}
                <div className="relative mt-7 border-t border-white/20 pt-5 sm:mt-8 sm:pt-6">
                    <div className="flex flex-col gap-2 text-xs text-orange-100 sm:flex-row sm:items-center sm:justify-between sm:text-sm">

                        <span>
                            Admissions guidance available for prospective students
                        </span>

                        <span className="font-semibold text-white">
                            info@gni.edu.in
                        </span>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnlineAdmissionCTA;