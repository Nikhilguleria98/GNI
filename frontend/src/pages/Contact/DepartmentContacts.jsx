import { useState } from "react";
import { FiBookOpen, FiFileText, FiCreditCard, FiHeart, FiClipboard, FiUserCheck, FiSearch, FiBriefcase } from "react-icons/fi";

export default function DepartmentContacts() {
    const [showAll, setShowAll] = useState(false);

    const departments = [
        {
            title: "Academics & Programs",
            icon: FiBookOpen,
            description: "For inquiries about academic programs, curriculum, admissions, and course details at Guru Nanak Institutions (GNI).",
            email: "academics@gni.edu.in"
        },
        {
            title: "Admissions",
            icon: FiFileText,
            description: "Get assistance with admissions, eligibility, application procedures, scholarships, and enrollment.",
            email: "admissions@gni.edu.in"
        },
        {
            title: "Accounts & Fees",
            icon: FiCreditCard,
            description: "Contact our Accounts Department for fee structure, payment assistance, scholarships, and financial queries.",
            email: "accounts@gni.edu.in"
        },
        {
            title: "Student Welfare",
            icon: FiHeart,
            description: "Support for student life, counselling, extracurricular activities, and campus welfare services.",
            email: "studentwelfare@gni.edu.in"
        },
        {
            title: "Controller of Examinations",
            icon: FiClipboard,
            description: "Get information about examination schedules, results, academic records, and evaluation queries.",
            email: "examinations@gni.edu.in"
        },
        {
            title: "Registrar",
            icon: FiUserCheck,
            description: "For administrative services, official documentation, certificates, and institutional records.",
            email: "registrar@gni.edu.in"
        },
        {
            title: "Research & Innovations",
            icon: FiSearch,
            description: "Explore research opportunities, innovation initiatives, industry collaborations, and academic projects.",
            email: "research@gni.edu.in"
        },
        {
            title: "Career & Placements",
            icon: FiBriefcase,
            description: "Connect with our Training & Placement Cell for internships, career guidance, recruitment drives, and placement opportunities.",
            email: "placements@gni.edu.in"
        }
    ];

    const visibleDepartments = showAll ? departments : departments.slice(0, 6);

    return (
        <section className="bg-gradient-to-b from-white via-white to-orange-50/40 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-6xl">

                {/* header */}
                <div className="mx-auto max-w-3xl text-center">

                    <h2 className="text-[30px] font-bold leading-[1.15] text-gray-900 sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
                        Department Contacts
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-6 text-gray-500 sm:mt-4 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
                        Connect with the appropriate department at Guru Nanak
                        Institutions (GNI) for admissions, academics, placements, or
                        general inquiries. Our dedicated team is here to guide you and
                        answer your questions about programs, campus life, and career
                        opportunities.
                    </p>

                </div>

                {/* department grid */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                    {visibleDepartments.map((department) => {
                        const Icon = department.icon;

                        return (
                            <div key={department.title} className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md sm:p-6">

                                {/* title */}
                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white sm:h-11 sm:w-11">
                                        <Icon size={18} strokeWidth={2} aria-hidden="true" />
                                    </div>

                                    <h3 className="text-[14px] font-bold leading-tight text-gray-900 sm:text-[15px] md:text-[17px]">
                                        {department.title}
                                    </h3>

                                </div>

                                {/* description */}
                                <p className="mt-4 text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-6 md:text-[15px] md:leading-7">
                                    {department.description}
                                </p>

                                {/* email */}
                                <a href={`mailto:${department.email}`} className="mt-3 block w-fit break-all text-[12px] font-medium leading-5 text-gray-800 underline decoration-gray-300 underline-offset-2 transition-color duration-300 hover:text-orange-600 hover:decoration-orange-600 sm:text-[13px] sm:leading-6 md:text-[15px]">
                                    {department.email}
                                </a>

                            </div>
                        );
                    })}
                </div>

                {/* show more / less */}
                {departments.length > 6 && (
                    <div className="mt-8 flex justify-center">
                        <button type="button" onClick={() => setShowAll((prev) => !prev)} className="rounded-md border border-orange-500 px-6 py-2.5 text-[12px] font-semibold text-orange-600 transition-all duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 sm:text-[13px] md:text-[15px]">
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}