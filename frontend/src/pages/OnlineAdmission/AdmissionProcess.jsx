import { FiBookOpen, FiFileText, FiMessageCircle, FiCheckCircle } from "react-icons/fi";

const AdmissionProcess = () => {
    const steps = [
        {
            number: "01",
            icon: FiBookOpen,
            title: "Choose Your Programme",
            text: "Explore the programmes offered at GNI and select the one that matches your academic interests and career goals."
        },
        {
            number: "02",
            icon: FiFileText,
            title: "Submit Your Details",
            text: "Share your basic information and programme preference to begin your admission enquiry."
        },
        {
            number: "03",
            icon: FiMessageCircle,
            title: "Get Admission Guidance",
            text: "Connect with the GNI admission team and get guidance regarding the next steps in the admission process."
        },
        {
            number: "04",
            icon: FiCheckCircle,
            title: "Complete Admission",
            text: "Complete the required documentation and admission formalities as guided by the institution."
        }
    ];

    return (
        <section id="admission-process" className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-7xl">

                <div className="max-w-2xl">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#f85b0b] sm:text-sm">
                        How It Works
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight text-[#171717] sm:text-4xl md:text-5xl">
                        Admission Process
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                        Follow these simple steps to begin your admission journey with
                        Guru Nanak Institutions.
                    </p>
                </div>

                <div className="relative mt-9 grid gap-8 md:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-0">

                    <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-orange-200 lg:block" />

                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div key={step.number} className="relative px-0 lg:px-7 first:lg:pl-0 last:lg:pr-0">
                                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#fff3ed] text-[#f85b0b] shadow-sm">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <div className="mt-4">
                                    <span className="text-xs font-bold tracking-widest text-[#f85b0b]">
                                        STEP {step.number}
                                    </span>

                                    <h3 className="mt-2 text-lg font-bold text-[#171717]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-gray-500">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default AdmissionProcess;