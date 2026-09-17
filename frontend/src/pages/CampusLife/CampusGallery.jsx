import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CampusGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

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

    const nextImage = () => {
        const { images, index } = selectedImage;

        setSelectedImage({
            images,
            index: (index + 1) % images.length
        });
    };

    const previousImage = () => {
        const { images, index } = selectedImage;

        setSelectedImage({
            images,
            index: (index - 1 + images.length) % images.length
        });
    };

    return (
        <>
            <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-7xl">

                    {sections.map((section, sectionIndex) => (
                        <div key={section.title} className={sectionIndex ? "mt-10 sm:mt-12 lg:mt-14" : ""}>

                            {/* heading */}
                            <div className="group mb-5 text-center sm:mb-6 md:mb-7">
                                <h2 className="text-[22px] font-bold leading-tight text-gray-900 sm:text-[26px] md:text-[30px] lg:text-[34px]">
                                    {section.title}
                                </h2>

                                <div className="mx-auto mt-3 h-[2px] w-10 overflow-hidden sm:w-12">
                                    <div className="h-full w-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full" />
                                </div>
                            </div>

                            {/* gallery */}
                            <div className="grid grid-cols-1 gap-2.5 p-4 md:grid-cols-3 lg:gap-4">
                                {section.images.map((image, index) => (
                                    <div key={index} onClick={() => setSelectedImage({ images: section.images, index })} className="group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-md bg-gray-100 shadow-sm">
                                        <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />

                                        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedImage(null)}>
                    <button onClick={() => setSelectedImage(null)} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                        <FiX className="text-2xl" />
                    </button>

                    <button onClick={(e) => { e.stopPropagation(); previousImage(); }} className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6">
                        <FiChevronLeft className="text-2xl" />
                    </button>

                    <div className="max-h-[90vh] max-w-6xl text-center" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.images[selectedImage.index].src} alt={selectedImage.images[selectedImage.index].alt} className="max-h-[80vh] max-w-full rounded-md object-contain" />

                        <p className="mt-3 text-sm font-medium text-white">
                            {selectedImage.index + 1} / {selectedImage.images.length}
                        </p>
                    </div>

                    <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6">
                        <FiChevronRight className="text-2xl" />
                    </button>
                </div>
            )}
        </>
    );
}