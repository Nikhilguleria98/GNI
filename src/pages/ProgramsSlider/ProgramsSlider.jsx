import { Link } from "react-router-dom";
const programs = [
  { name: "B.Tech", slug: "btech" },
  { name: "M.Tech", slug: "mtech" },
  { name: "B.B.A", slug: "bba" },
  { name: "MBA", slug: "mba" },
  { name: "PHARMACY", slug: "pharmacy" },
  { name: "Computer Application", slug: "computer-application" },
];
const studyItems = [
  "Experienced & Dedicated Faculty",
  "Modern Smart Classrooms",
  "Advanced Laboratories",
  "Industry-Oriented Curriculum",
  "Excellent Placement Support",
  "Innovation & Research Culture",
  "Vibrant Campus Life",
];

const ProgramsSlider = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto px-3 py-4 sm:px-5 sm:py-6 md:px-8 ${
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
          max-h-[calc(100vh-32px)]
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
          transition-all
          duration-500
          ease-out
          sm:max-h-[calc(100vh-48px)]
          sm:rounded-[24px]
          md:rounded-[28px]
          ${
            isOpen
              ? "translate-x-0 scale-100 opacity-100"
              : "translate-x-[120%] scale-95 opacity-0"
          }
        `}
      >
        {/* Close / Back button */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute right-3 top-3 z-30
            flex h-10 w-10
            items-center justify-center
            rounded-full
            bg-white/80
            text-3xl font-light text-black
            shadow-sm
            transition
            hover:scale-110
            sm:right-5 sm:top-5
          "
          aria-label="Close programs"
        >
          ←
        </button>

        {/* Scrollable Content */}
        <div className="max-h-[calc(100vh-32px)] overflow-y-auto sm:max-h-[calc(100vh-48px)]">
          <div className="w-full px-5 pb-6 pt-16 sm:px-7 sm:pb-8 sm:pt-20 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[38%_62%] lg:gap-6">

              {/* LEFT SECTION */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">

                {/* OUR PROGRAMS */}
                <div>
                  <h3 className="mb-5 text-base font-bold text-[#5146e5] sm:mb-6 sm:text-lg md:text-xl">
                    OUR PROGRAMS
                  </h3>

                  <div className="space-y-1">
                    {programs.map((program) => (
                      <Link
                        key={program.slug}
                        to={`/programs/${program.slug}`}
                        onClick={onClose}
                        className="
                          block
                          rounded-lg
                          px-2 py-2.5
                          text-left
                          text-sm font-semibold
                          text-black
                          transition
                          hover:bg-[#f5f3ff]
                          hover:text-[#f85b0b]
                          sm:text-base
                          md:text-lg
                        "
                      >
                        {program.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* STUDY HERE */}
                <div>
                  <h3 className="mb-5 text-base font-bold text-[#5146e5] sm:mb-6 sm:text-lg md:text-xl">
                    STUDY HERE
                  </h3>

                  <div className="space-y-1">
                    {studyItems.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className="
                          block w-full
                          rounded-lg
                          px-2 py-2.5
                          text-left
                          text-sm font-semibold
                          text-black
                          transition
                          hover:bg-[#f5f3ff]
                          hover:text-[#f85b0b]
                          sm:text-base
                          md:text-lg
                        "
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
                  min-h-[420px]
                  overflow-hidden
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#d8d5ff]
                  via-[#e9dcfa]
                  to-[#ffd1e5]
                  sm:min-h-[460px]
                  md:min-h-[500px]
                  lg:min-h-[520px]
                "
              >
                {/* Text */}
                <div
                  className="
                    relative z-10
                    w-full
                    p-6
                    pb-40
                    sm:p-8
                    sm:pb-44
                    md:p-9
                    md:pb-48
                    lg:w-[70%]
                    lg:p-10
                    lg:pb-10
                  "
                >
                  <h1
                    className="
                      mb-4
                      max-w-[600px]
                      text-3xl
                      font-bold
                      leading-tight
                      text-black
                      sm:text-4xl
                      md:text-5xl
                    "
                  >
                    Admissions Open 2026!
                  </h1>

                  <p
                    className="
                      max-w-xl
                      text-sm
                      leading-relaxed
                      text-black
                      sm:text-base
                      md:text-lg
                      lg:text-xl
                    "
                  >
                    Become part of a vibrant learning community that inspires
                    innovation, leadership, and academic excellence. Explore
                    career-oriented programs designed to prepare you for
                    tomorrow&apos;s opportunities.
                  </p>

                  <button
                    type="button"
                    className="
                      mt-5
                      rounded-lg
                      bg-black
                      px-4 py-2.5
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#5146e5]
                    "
                  >
                    Apply Today →
                  </button>
                </div>

                {/* Student image */}
                <img
                  src="/student.png"
                  alt="Student"
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-[55%]
                    max-w-[280px]
                    object-contain
                    sm:w-[50%]
                    sm:max-w-[300px]
                    md:w-[45%]
                    md:max-w-[340px]
                    lg:w-[43%]
                    lg:max-w-none
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSlider;
