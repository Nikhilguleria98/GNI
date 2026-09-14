import { Link } from "react-router-dom";
const programs = [
  { name: "B.Tech", slug: "btech" },
  { name: "M.Tech", slug: "mtech" },
  { name: "B.B.A", slug: "bba" },
  { name: "MBA", slug: "mba" },
  { name: "PHARMACY", slug: "pharmacy" },
  { name: "Computer Application", slug: "computer-application" },
];

const ProgramsSlider = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden px-4 ${
        isOpen ? "visible" : "pointer-events-none invisible"
      }`}
      onClick={onClose}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Main Slider */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10
          w-full
          max-w-[1120px]
          h-[600px]
          max-h-[calc(100vh-40px)]
          overflow-hidden
          rounded-[28px]
          bg-white
          shadow-2xl
          transition-all
          duration-500
          ease-out
          ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-[120%] opacity-0"
          }
        `}
      >
        {/* Close / Back button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center text-4xl font-light text-black transition hover:scale-110"
          aria-label="Close programs"
        >
          ←
        </button>

        {/* Content */}
        <div className="h-full w-full overflow-hidden px-6 pb-8 pt-20 sm:px-8 md:px-10 lg:px-12">
          <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-[38%_62%]">

            {/* LEFT SECTION */}
            <div className="grid min-h-0 grid-cols-1 gap-6 sm:grid-cols-2">

              {/* OUR PROGRAMS */}
              <div>
                <h3 className="mb-7 text-lg font-bold text-[#5146e5] sm:text-xl">
                  OUR PROGRAMS
                </h3>

                <div className="space-y-5">
                  {programs.map((program) => (
                    <Link
                      key={program.slug}
                      to={`/programs/${program.slug}`}
                      onClick={onClose}
                      className="block text-left text-base font-semibold text-black transition hover:text-[#f85b0b] sm:text-lg"
                    >
                      {program.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* STUDY HERE */}
              <div>
                <h3 className="mb-7 text-lg font-bold text-[#5146e5] sm:text-xl">
                  STUDY HERE
                </h3>

                <div className="space-y-5">
                  {[
                    "Experienced & Dedicated Faculty",
                    "Modern Smart Classrooms",
                    "Advanced Laboratories",
                    "Industry-Oriented Curriculum",
                    "Excellent Placement Support",
                    "Innovation & Research Culture",
                    "Vibrant Campus Life",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="block text-left text-base font-semibold text-black transition hover:text-[#f85b0b] sm:text-lg"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT ADMISSION CARD */}
            <div
              className="
                relative
                min-h-0
                h-full
                overflow-hidden
                rounded-2xl
                bg-gradient-to-br
                from-[#d8d5ff]
                via-[#e9dcfa]
                to-[#ffd1e5]
              "
            >
              {/* Text */}
              <div className="relative z-10 w-full p-6 sm:w-[70%] sm:p-8 lg:p-10">
                <h1 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Admissions Open 2026!
                </h1>

                <p className="max-w-xl text-base leading-relaxed text-black sm:text-lg lg:text-xl">
                  Become part of a vibrant learning community that inspires
                  innovation, leadership, and academic excellence. Explore
                  career-oriented programs designed to prepare you for
                  tomorrow&apos;s opportunities.
                </p>

                <button
                  type="button"
                  className="mt-5 text-sm font-semibold text-black transition hover:text-[#5146e5]"
                >
                  CTA: Apply Today →
                </button>
              </div>

              {/* Student image */}
              <img
                src="/student.png"
                alt="Student"
                className="absolute bottom-0 right-0 w-[65%] object-contain sm:w-[50%] lg:w-[43%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSlider;


