export default function CampusGallery() {
    const sections = [
        {
            title: "Modern Campus",
            images: [
                { src: "/g1.png", alt: "Modern campus facility" },
                { src: "/g2.png", alt: "Students at campus event" },
                { src: "/g3.png", alt: "Students together" },
                { src: "/g4.png", alt: "Campus celebration" },
                { src: "/g5.png", alt: "College event" },
                { src: "/g6.png", alt: "Technology and innovation" }
            ]
        },

        {
            title: "Student Clubs",
            images: [
                { src: "/g1.png", alt: "Student club activity" },
                { src: "/g2.png", alt: "Student club event" },
                { src: "/g3.png", alt: "Students participating in club" },
                { src: "/g4.png", alt: "Student cultural event" },
                { src: "/g5.png", alt: "Student activities" },
                { src: "/g6.png", alt: "Students on campus" }
            ]
        },

        {
            title: "Sports & Events",
            images: [
                { src: "/g1.png", alt: "Sports activity" },
                { src: "/g2.png", alt: "Sports event" },
                { src: "/g3.png", alt: "Students at sports event" },
                { src: "/g4.png", alt: "Campus event" },
                { src: "/g5.png", alt: "College sports event" },
                { src: "/g6.png", alt: "Sports activity on campus" }
            ]
        }
    ];

    return (
        <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-7xl">

                {sections.map((section, sectionIndex) => (
                    <div key={section.title} className={sectionIndex !== 0 ? "mt-10 sm:mt-12 lg:mt-14" : ""}>

                        {/* heading */}
                        <div className="group mb-5 text-center sm:mb-6 md:mb-7">

                            <h2 className="text-[22px] font-bold leading-tight text-gray-900 sm:text-[26px] md:text-[30px] lg:text-[34px]">
                                {section.title}
                            </h2>

                            <div className="mx-auto mt-3 h-[2px] w-10 overflow-hidden sm:mt-3.5 sm:w-12">
                                <div className="h-full w-0 rounded-full bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
                            </div>

                        </div>

                        {/* image grid */}
                        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-1 p-4 md:grid-cols-3 lg:gap-4">

                            {section.images.map((image, index) => (
                                <div key={`${section.title}-${index}`} className="group relative aspect-[16/10] overflow-hidden rounded-md bg-gray-100 shadow-sm">
                                    <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />

                                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
                                </div>
                            ))}

                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}