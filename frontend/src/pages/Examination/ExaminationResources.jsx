import { FiCalendar, FiFileText, FiBookOpen, FiInfo } from "react-icons/fi";

const ExaminationResources = () => {
    const resources = [
        {
            icon: FiCalendar,
            title: "Examination Schedule",
            text: "Examination dates and programme-wise schedules published by the institution will appear here."
        },
        {
            icon: FiFileText,
            title: "Examination Notices",
            text: "Important examination notices and announcements published by the institution will appear here."
        },
        {
            icon: FiBookOpen,
            title: "Date Sheets & Documents",
            text: "Programme-wise date sheets and other examination documents will be available here."
        },
        {
            icon: FiInfo,
            title: "Important Instructions",
            text: "Important examination instructions and academic information will be published here."
        }
    ];

    return (
        <section id="examination-resources" className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f85b0b] sm:text-sm">
                            Examination Updates
                        </p>

                        <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#18233b] sm:text-5xl md:text-[54px]">
                            Examination
                            <span className="block text-[#f85b0b]">
                                Notices & Resources
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-xl lg:pb-1">
                        <p className="text-sm leading-7 text-gray-600 sm:text-base">
                            Students can access examination schedules, notices, date sheets,
                            documents and important academic instructions published by Guru
                            Nanak Institutions.
                        </p>
                    </div>
                </div>

                {/* Resources */}
                <div className="mt-12 border-t-2 border-orange-200 sm:mt-14">
                    {resources.map((resource, index) => {
                        const Icon = resource.icon;

                        return (
                            <div key={resource.title} className="border-b border-gray-200">
                                <div className="flex items-center gap-4 py-7 sm:gap-7 sm:py-8">

                                    {/* Number */}
                                    <div className="w-9 shrink-0 sm:w-12">
                                        <span className="text-sm font-extrabold tracking-[0.12em] text-gray-300 sm:text-base">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-[#fff8f4] text-[#f85b0b] sm:h-14 sm:w-14">
                                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </div>

                                    {/* Content */}
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg font-bold leading-tight text-[#18233b] sm:text-xl">
                                            {resource.title}
                                        </h3>

                                        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                                            {resource.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Empty State */}
                <div className="mt-8 rounded-2xl border border-orange-100 bg-[#fffaf7] px-6 py-8 text-center sm:px-10 sm:py-10">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f85b0b]/10 text-[#f85b0b]">
                        <FiInfo className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[#18233b]">
                        No Examination Updates Available
                    </h3>

                    <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                        Examination schedules, notices, date sheets and other documents
                        will be published here when they are made available by the
                        institution.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ExaminationResources;