import { FiBookOpen, FiCalendar, FiCheckCircle, FiFileText } from "react-icons/fi";

const ExaminationOverview = () => {
    const information = [
        {
            icon: FiBookOpen,
            title: "Academic Examinations",
            text: "Examinations are an important part of the academic journey and help assess students' understanding of their respective programmes."
        },
        {
            icon: FiFileText,
            title: "Examination Information",
            text: "Students can refer to the information shared by the institution for examination-related procedures, instructions and academic requirements."
        },
        {
            icon: FiCalendar,
            title: "Important Updates",
            text: "Keep checking the official academic communication channels for examination schedules, notices and other important updates."
        },
        {
            icon: FiCheckCircle,
            title: "Student Guidance",
            text: "Students are encouraged to stay informed, follow the prescribed examination instructions and complete the required academic formalities on time."
        }
    ];

    return (
        <section id="examination-overview" className="bg-[#f8f9ff] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-7xl">

                {/* heading */}
                <div className="max-w-3xl">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f85b0b] sm:text-sm">
                        Examination Overview
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#18233b] sm:text-4xl md:text-5xl">
                        Stay Prepared For Your
                        <span className="text-[#f85b0b]"> Examinations</span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                        Access important examination-related guidance and stay aware of
                        the academic information you need throughout your programme at
                        Guru Nanak Institutions.
                    </p>
                </div>

                {/* information cards */}
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
                    {information.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div key={item.title} className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-[0_8px_30px_rgba(24,35,59,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f85b0b]/30 hover:shadow-[0_18px_40px_rgba(248,91,11,0.08)]">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f85b0b]/10 text-[#f85b0b] transition-all duration-300 group-hover:bg-[#f85b0b] group-hover:text-white">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <h3 className="mt-5 text-lg font-bold leading-tight text-[#18233b]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ExaminationOverview;