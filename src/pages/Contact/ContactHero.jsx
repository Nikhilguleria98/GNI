import { FiMapPin, FiMail } from "react-icons/fi";

export default function ContactHero() {
    return (
        <section className="relative min-h-[330px] overflow-hidden sm:min-h-[390px] lg:min-h-[430px]">

            {/* background image */}
            <img src="/contact.png" alt="Jindal's Guru Nanak Institutions, Mullana" className="absolute inset-0 h-full w-full object-cover" />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* content */}
            <div className="relative z-10 mx-auto flex min-h-[330px] max-w-7xl items-center px-5 py-12 sm:min-h-[390px] sm:px-8 sm:py-16 lg:min-h-[430px] lg:px-12">

                <div className="max-w-xl text-white">

                    {/* heading */}
                    <div className="group w-fit">

                        <h1 className="text-[30px] font-bold leading-[1.15] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
                            Contact{" "}
                            <span className="text-orange-500">
                                Jindal's Guru Nanak
                            </span>
                            <br />
                            Institutions, Mullana
                        </h1>

                        <div className="mt-3 h-[3px] w-full overflow-hidden sm:mt-4">
                            <div className="h-full w-0 bg-orange-500 transition-all duration-700 ease-in-out group-hover:w-full" />
                        </div>

                    </div>

                    {/* description */}
                    <p className="mt-4 max-w-lg text-[14px] leading-6 text-white/90 sm:mt-5 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
                        Jindal&apos;s Guru Nanak Institutions, Mullana is committed to
                        providing quality education and creating an environment where
                        students can learn, grow and achieve their professional goals.
                    </p>

                    <p className="mt-3 max-w-lg text-[12px] leading-5 text-white/80 sm:text-[13px] sm:leading-6 md:text-[14px] lg:text-[15px] lg:leading-6">
                        Connect with us to know more about our academic programmes,
                        admissions, campus facilities and student opportunities.
                    </p>

                    {/* contact information */}
                    <div className="mt-5 space-y-2 sm:mt-6">

                        {/* location */}
                        <div className="flex items-center gap-2">
                            <FiMapPin className="shrink-0 text-orange-500" size={17} aria-hidden="true" />

                            <p className="text-[12px] leading-5 text-white/90 sm:text-[13px] sm:leading-6 md:text-[14px] lg:text-[15px]">
                                Mullana, Ambala, Haryana
                            </p>
                        </div>

                        {/* email */}
                        <div className="flex items-center gap-2">
                            <FiMail className="shrink-0 text-orange-500" size={17} aria-hidden="true" />

                            <p className="text-[12px] leading-5 text-white/90 sm:text-[13px] sm:leading-6 md:text-[14px] lg:text-[15px]">
                                admissions@example.com
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}