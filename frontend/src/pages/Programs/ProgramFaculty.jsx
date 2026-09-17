import { useEffect, useRef } from "react";

const ProgramFaculty = ({ data }) => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || data.length === 0) return;

    const speed = 0.5;

    const animate = () => {
      if (!isPausedRef.current) {
        positionRef.current += speed;

        const firstSetWidth = slider.scrollWidth / 2;

        if (positionRef.current >= firstSetWidth) {
          positionRef.current = 0;
        }

        slider.style.transform = `translate3d(-${positionRef.current}px,0,0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [data]);

  const sliderData = [...data, ...data];

  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-[#ff5b00] sm:text-3xl md:text-4xl lg:text-5xl">
            Distinguished Faculty at Jindal's Guru Nanak Institutions, Mullana
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7 md:text-lg">
            Our experienced faculty combines academic excellence, research
            expertise, and industry knowledge to provide students with
            advanced technical education and personalized mentorship.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
        >
          <div
            ref={sliderRef}
            className="flex w-max will-change-transform"
          >
            {sliderData.map((faculty, index) => (
              <div
                key={`${faculty.name}-${index}`}
                className="
                  shrink-0
                  px-2

                  w-[85vw]
                  sm:w-[48vw]
                  md:w-[35vw]
                  lg:w-[24vw]
                  xl:w-[20vw]
                "
              >
                <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                  {/* Faculty Image Placeholder */}
                  <div className="flex h-48 items-end justify-center overflow-hidden bg-gray-200 sm:h-56 md:h-60 lg:h-64">

                    <div className="flex flex-col items-center">
                      <div className="h-14 w-14 rounded-full bg-gray-500 sm:h-16 sm:w-16" />

                      <div className="mt-2 h-24 w-32 rounded-t-[55px] bg-gray-500 sm:h-28 sm:w-36" />
                    </div>

                  </div>

                  {/* Details */}
                  <div className="border-t border-gray-100 px-4 py-4 text-center">

                    <h3 className="line-clamp-2 min-h-[48px] text-sm font-bold text-gray-800 sm:text-base md:text-lg">
                      {faculty.name}
                    </h3>

                    <p className="mt-2 text-xs text-gray-500 sm:text-sm md:text-base">
                      {faculty.role}
                    </p>

                    <p className="mt-1 truncate text-xs text-gray-400 sm:text-sm">
                      {faculty.department}
                    </p>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramFaculty;