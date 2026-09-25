import { FiArrowRight, FiCheckCircle, FiFileText, FiBookOpen } from "react-icons/fi";

const ExaminationHero = () => {
    const examinationInfo = [
        "Examination Information",
        "Academic Guidance",
        "Student Resources",
    ];

    return (
        <section className="relative overflow-hidden bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-7xl">

                {/* main hero */}
                <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

                    {/* left content */}
                    <div className="max-w-4xl pt-2 lg:pt-8">

                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#f85b0b] sm:text-sm">
                            Student Corner
                        </p>

                        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight text-[#171717] sm:text-6xl md:text-7xl lg:text-[70px]">
                            Examination
                        </h1>

                        <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                            Stay informed about examination-related information, academic
                            procedures and important resources for students at Guru Nanak
                            Institutions.
                        </p>

                        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base">
                            Find the guidance you need for examinations and stay connected
                            with the latest academic information provided by the institution.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-4">

                            <a href="#examination-overview" className="group inline-flex items-center gap-2 rounded-md bg-[#f85b0b] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#dc4e08] hover:shadow-lg">
                                Explore Examination

                                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            <a href="#examination-resources" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#171717] transition-all duration-300 hover:border-[#f85b0b] hover:text-[#f85b0b]">
                                Student Resources
                            </a>

                        </div>

                    </div>

                    {/* right image */}
                    <div className="relative lg:pt-2">
                        <div className="overflow-hidden rounded-2xl border border-orange-100 bg-gray-50 shadow-[0_20px_50px_rgba(24,35,59,0.10)]">
                            <img src="/home.png" alt="GNI Campus" className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[430px]" />
                        </div>
                    </div>

                </div>

                {/* bottom information */}
                <div className="mt-9 border-t border-orange-200 pt-6 sm:mt-12 sm:pt-7">

                    <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">

                        {examinationInfo.map((item, index) => (
                            <div key={item} className={`flex items-center gap-3 ${index !== 0 ? "sm:border-l sm:border-orange-200 sm:pl-8" : ""}`}>

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f85b0b]/10 text-[#f85b0b]">
                                    {index === 0 ? (
                                        <FiFileText className="h-4 w-4" />
                                    ) : index === 1 ? (
                                        <FiBookOpen className="h-4 w-4" />
                                    ) : (
                                        <FiCheckCircle className="h-4 w-4" />
                                    )}
                                </div>

                                <p className="text-sm font-semibold text-[#303030]">
                                    {item}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ExaminationHero;