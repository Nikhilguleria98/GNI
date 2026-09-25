import {
    FiCheckCircle, FiClock, FiFileText, FiInfo
} from "react-icons/fi";

const ExaminationGuidelines = () => {
    const guidelines = [
        {
            number: "01",
            icon: FiFileText,
            title: "Check Examination Information",
            text: "Stay updated with the examination-related information and instructions communicated by the institution."
        },
        {
            number: "02",
            icon: FiClock,
            title: "Be Prepared In Advance",
            text: "Plan your preparation in advance and make sure you are aware of the academic requirements related to your examinations."
        },
        {
            number: "03",
            icon: FiCheckCircle,
            title: "Follow Instructions",
            text: "Follow the examination instructions provided by the institution and cooperate with the concerned academic authorities."
        },
        {
            number: "04",
            icon: FiInfo,
            title: "Stay Informed",
            text: "Keep checking official academic communication channels for important notices, updates and examination-related announcements."
        }
    ];

    return (
        <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-7xl">

                {/* heading */}
                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f85b0b] sm:text-sm">
                        Student Guidance
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#18233b] sm:text-4xl md:text-5xl">
                        Examination{" "}
                        <span className="text-[#f85b0b]">Guidelines</span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                        Keep these simple practices in mind to stay organised and prepared
                        throughout your examination process.
                    </p>

                </div>

                {/* guidelines */}
                <div className="mt-10 grid gap-x-10 gap-y-0 border-t border-gray-200 sm:mt-12 lg:grid-cols-2">

                    {guidelines.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div key={item.number} className="group border-b border-gray-200 py-7 sm:py-8">
                                <div className="flex items-start gap-5">

                                    {/* number */}
                                    <div className="shrink-0">
                                        <span className="text-sm font-extrabold tracking-wider text-[#f85b0b]">
                                            {item.number}
                                        </span>
                                    </div>

                                    {/* icon */}
                                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff3ed] text-[#f85b0b]">
                                        <Icon className="h-4 w-4" />
                                    </div>

                                    {/* content */}
                                    <div className="min-w-0">

                                        <h3 className="text-lg font-bold leading-tight text-[#18233b] sm:text-xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                                            {item.text}
                                        </p>

                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default ExaminationGuidelines;