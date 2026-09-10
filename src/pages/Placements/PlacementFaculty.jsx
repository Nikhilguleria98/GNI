import { useEffect, useRef } from "react";

const PlacementFaculty = ({ data }) => {
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

        slider.style.transform = `translate3d(-${positionRef.current}px, 0, 0)`;
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
    <section className="w-full overflow-hidden bg-white py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 md:mb-12">

          <p className="mb-2 text-[14px] font-bold uppercase tracking-[0.3em] text-[#ff5b00] sm:text-[15px] md:text-[17px] lg:text-[18px]">
            Placement Spotlight
          </p>

          <h2 className="text-[30px] font-extrabold leading-[1.15] text-[#111827] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
            Placement Excellence
          </h2>

          <p className="mt-3 text-[14px] leading-6 text-gray-500 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
            Consistent outcomes built through training quality, industry
            engagement, and focused execution.
          </p>
        </div>

        {/* Automatic Infinite Slider */}
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
                className="w-[75vw] shrink-0 px-2 sm:w-[45vw] md:w-[30vw] lg:w-[20vw]"
              >

                <div className="group overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

                  {/* Faculty Image */}
                  <div className="relative flex h-44 items-end justify-center overflow-hidden bg-gray-200 sm:h-52 md:h-54 lg:h-56">

                    {/* Person Icon */}
                    <div className="flex flex-col items-center">

                      {/* Head */}
                      <div className="h-14 w-14 rounded-full bg-gray-500 sm:h-16 sm:w-16" />

                      {/* Body */}
                      <div className="mt-2 h-24 w-32 rounded-t-[55px] bg-gray-500 sm:h-28 sm:w-36" />

                    </div>
                  </div>

                  {/* Faculty Details */}
                  <div className="border-t border-gray-100 px-3 py-3 text-center sm:px-4 sm:py-4">

                    <h3 className="truncate text-[14px] font-bold leading-tight text-gray-800 sm:text-[15px] md:text-[17px] lg:text-[18px]">
                      {faculty.name}
                    </h3>

                    <p className="mt-1 text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7 md:text-[15px] md:leading-7">
                      {faculty.role}
                    </p>

                    <p className="mt-1 truncate text-[10px] leading-5 text-gray-400 sm:text-[11px] md:text-[13px]">
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

export default PlacementFaculty;