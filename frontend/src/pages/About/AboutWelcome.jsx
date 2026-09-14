import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Welcome to",
    heading: "Jindal's Guru Nanak Institutions, Mullana",
    image: "/choose.png",
    description: "Guru Nanak Institutions (GNI), established in 2008, is one of the leading institutes for engineering and management education in Haryana. Nestled in a peaceful, green campus, GNI combines modern infrastructure with experienced faculty to deliver quality education and holistic student development. Approved by AICTE, affiliated with Kurukshetra University, and supported by Mela Singh Memorial Educational Trust, GNI equips students with technical expertise, leadership skills, and industry exposure, preparing them for successful careers in a rapidly evolving global environment.",
  },
  {
    title: "Our Institution",
    heading: "Learning, Innovation & Excellence",
    image: "/choose.png",
    description: "GNI provides students with a modern learning environment focused on academic excellence, practical knowledge and professional development. With experienced faculty, modern infrastructure and industry-oriented education, students are encouraged to explore their potential and build confidence for their future careers.",
  },
  {
    title: "Our Vision",
    heading: "Building Successful Futures",
    image: "/choose.png",
    description: "Our vision is to create an environment where students can learn, innovate and grow. GNI focuses on developing strong technical knowledge, professional skills, leadership qualities and responsible values so that students are well prepared to meet the challenges of a rapidly changing world.",
  },
];

const AboutWelcomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const current = slides[currentSlide];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">

        {/* slider */}
        <div className="grid items-center gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">

          {/* image */}
          <div className="relative w-full">
            <div className="relative h-[240px] w-full overflow-hidden sm:h-[300px] md:h-[330px] lg:h-[360px] xl:h-[380px]">
              <img src={current.image} alt={current.heading} className="h-full w-full object-cover transition-all duration-700 ease-out" />
            </div>
          </div>

          {/* content */}
          <div className="relative pr-10 sm:pr-12 md:pr-14">

            {/* heading */}
            <div>
              <p className="text-[14px] font-medium leading-none text-[#ff5b00] sm:text-[15px] md:text-[17px] lg:text-[18px]">
                {current.title}
              </p>

              <h2 className="mt-2 text-[30px] font-semibold leading-[1.15] text-[#111111] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
                {current.heading}
              </h2>
            </div>

            {/* quote & description */}
            <div className="relative mt-5 sm:mt-6">

              {/* opening quote */}
              <FaQuoteLeft className="mb-1 text-[20px] text-[#ff5b00] sm:text-[22px] md:text-[24px]" />

              <p className="pr-2 text-[14px] leading-6 text-gray-700 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
                {current.description}
              </p>

              {/* closing quote */}
              <FaQuoteRight className="ml-auto mt-1 text-[18px] text-[#ff5b00] sm:text-[20px] md:text-[22px]" />
            </div>

            {/* right arrow */}
            <button type="button" onClick={nextSlide} aria-label="Next slide" className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-[#333] transition-all duration-300 hover:bg-[#ff5b00] hover:text-white sm:h-10 sm:w-10 md:h-11 md:w-11">
              <FaChevronRight className="text-[16px] sm:text-[18px]" />
            </button>
          </div>
        </div>

        {/* slider dots */}
        <div className="mt-7 flex items-center justify-center gap-2 sm:mt-8">
          {slides.map((_, index) => (
            <button key={index} type="button" onClick={() => goToSlide(index)} aria-label={`Go to slide ${index + 1}`} className={`h-[4px] rounded-full transition-all duration-500 ease-out ${currentSlide === index ? "w-12 bg-[#ff5b00]" : "w-2 bg-gray-300 hover:bg-gray-400"}`} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutWelcomeSection;