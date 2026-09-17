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
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-5 ${
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

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 w-full max-w-7xl h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform transition-opacity duration-500 will-change-transform ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-2xl"
        >
          ←
        </button>

        {/* Content */}
        <div className="h-full overflow-y-auto">
          <div className="h-full p-5 md:p-8">
            <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-[35%_65%]">

              {/* LEFT SIDE */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">

                {/* Programs */}
                <div>
                  <h3 className="mb-5 text-lg font-bold text-[#5146e5]">
                    OUR PROGRAMS
                  </h3>

                  <div className="space-y-1">
                    {programs.map((program) => (
                      <Link
                        key={program.slug}
                        to={`/programs/${program.slug}`}
                        onClick={onClose}
                        className="block rounded-lg px-3 py-2 text-base font-semibold text-black transition hover:bg-[#f5f3ff] hover:text-[#f85b0b]"
                      >
                        {program.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Study Here */}
                <div>
                  <h3 className="mb-5 text-lg font-bold text-[#5146e5]">
                    STUDY HERE
                  </h3>

                  <div className="space-y-1">
                    {studyItems.map((item) => (
                      <button
                        key={item}
                        className="block w-full rounded-lg px-3 py-2 text-left text-base font-semibold text-black transition hover:bg-[#f5f3ff] hover:text-[#f85b0b]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#d8d5ff] via-[#e9dcfa] to-[#ffd1e5]">

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-center p-6 sm:p-8 md:p-10 lg:w-[65%]">
                  <h1 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
                    Admissions Open 2026!
                  </h1>

                  <p className="text-sm leading-relaxed text-black sm:text-base md:text-lg">
                    Become part of a vibrant learning community that inspires
                    innovation, leadership, and academic excellence. Explore
                    career-oriented programs designed to prepare you for
                    tomorrow&apos;s opportunities.
                  </p>

                  <button className="mt-6 w-fit rounded-lg bg-black px-5 py-3 text-white font-semibold transition hover:bg-[#5146e5]">
                    Apply Today →
                  </button>
                </div>

                {/* Student Image */}
                <img
                  src="/student.png"
                  alt="Student"
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-[45%]
                    w-auto
                    object-contain

                    sm:h-[55%]
                    md:h-[65%]
                    lg:h-[80%]
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