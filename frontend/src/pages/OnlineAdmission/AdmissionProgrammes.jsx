import { FiArrowRight, FiBarChart2, FiBookOpen, FiBriefcase, FiLink2, FiMonitor, FiTool } from "react-icons/fi";

const AdmissionProgrammes = () => {
    const programmes = [
        {
            number: "01",
            title: "B.Tech",
            slug: "btech",
            category: "Engineering",
            text: "Build a strong foundation in engineering with technical knowledge and practical learning.",
            icon: FiTool
        },
        {
            number: "02",
            title: "M.Tech",
            slug: "mtech",
            category: "Engineering",
            text: "Develop advanced technical expertise through postgraduate engineering education.",
            icon: FiBookOpen
        },
        {
            number: "03",
            title: "BBA",
            slug: "bba",
            category: "Management",
            text: "Develop business understanding, management skills and professional capabilities.",
            icon: FiBriefcase
        },
        {
            number: "04",
            title: "MBA",
            slug: "mba",
            category: "Management",
            text: "Build advanced management knowledge and skills for the professional world.",
            icon: FiBarChart2
        },
        {
            number: "05",
            title: "Computer Applications",
            slug: "computer-application",
            category: "Computer Applications",
            text: "Gain computing knowledge and application-focused skills for technology careers.",
            icon: FiMonitor
        },
        {
            number: "06",
            title: "B.Pharm",
            slug: "pharmacy",
            category: "Pharmacy",
            text: "Develop a strong foundation in pharmaceutical sciences and professional practice.",
            icon: FiLink2
        }
    ];

    return (
        <section className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-7xl">

                {/* heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f85b0b] sm:text-sm">
                        Study at GNI
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#18233b] sm:text-4xl md:text-5xl">
                        Explore Our{" "}
                        <span className="text-[#f85b0b]">Programmes</span>
                    </h2>

                    {/* divider */}
                    <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                        <span className="h-[2px] w-14 rounded-full bg-[#f85b0b] sm:w-20" />

                        <span className="h-[5px] w-3 rounded-full bg-[#f85b0b]" />

                        <span className="h-[2px] w-14 rounded-full bg-[#f85b0b] sm:w-20" />
                    </div>

                    <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                        Choose from a diverse range of programmes designed to build your
                        skills, expand your knowledge and create better career
                        opportunities.
                    </p>
                </div>

                {/* view all programmes */}
                <div className="mt-6 flex justify-end">
                    <a href="/programs" className="group inline-flex items-center gap-2 text-sm font-bold text-[#f85b0b] transition-colors duration-300 hover:text-[#dc4e08]">
                        View All Programmes

                        <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>

                {/* programme cards */}
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:mt-7 lg:grid-cols-3">
                    {programmes.map((program) => {
                        const Icon = program.icon;

                        return (
                            <a href={`/programs/${program.slug}`} key={program.number} className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-orange-100 bg-white p-7 shadow-[0_8px_30px_rgba(24,35,59,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f85b0b]/40 hover:shadow-[0_20px_45px_rgba(248,91,11,0.10)]">
                                {/* soft corner shape */}
                                <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-[#fff4ec] transition-transform duration-500 group-hover:scale-[1.8]" />

                                {/* number */}
                                <span className="absolute right-5 top-4 text-4xl font-extrabold leading-none text-[#f7d8c5] transition-colors duration-300 group-hover:text-[#f2b996]">
                                    {program.number}
                                </span>

                                {/* icon */}
                                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#f85b0b] text-white shadow-[0_8px_20px_rgba(248,91,11,0.18)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_25px_rgba(248,91,11,0.25)]">
                                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                                </div>

                                {/* content */}
                                <div className="relative mt-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f85b0b]">
                                        {program.category}
                                    </p>

                                    <h3 className="mt-2 text-2xl font-extrabold leading-tight text-[#18233b] transition-colors duration-300 group-hover:text-[#f85b0b]">
                                        {program.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#52627a]">
                                        {program.text}
                                    </p>
                                </div>

                                {/* bottom link */}
                                <div className="relative mt-5 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm font-bold text-[#f85b0b]">
                                        Explore Programme

                                        <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>

                                    <span className="h-[2px] w-10 bg-[#f85b0b] transition-all duration-300 group-hover:w-14" />
                                </div>
                            </a>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default AdmissionProgrammes;