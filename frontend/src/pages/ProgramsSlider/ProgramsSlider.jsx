import { Link } from "react-router-dom";
import { IoArrowUndo } from "react-icons/io5";

const programs = [
  { name: "B.Tech", slug: "btech" },
  { name: "M.Tech", slug: "mtech" },
  { name: "B.B.A", slug: "bba" },
  { name: "MBA", slug: "mba" },
  { name: "PHARMACY", slug: "pharmacy" },
  { name: "Computer Application", slug: "computer-application" },
];

const studyItems = [
  {
    name: "Experienced & Dedicated Faculty",
    slug: "faculty",
  },
  {
    name: "Modern Smart Classrooms",
    slug: "classrooms",
  },
  {
    name: "Advanced Laboratories",
    slug: "laboratories",
  },
  {
    name: "Industry-Oriented Curriculum",
    slug: "curriculum",
  },
  {
    name: "Excellent Placement Support",
    slug: "placements",
  },
  {
    name: "Innovation & Research Culture",
    slug: "research",
  },
  {
    name: "Vibrant Campus Life",
    slug: "campus",
  },
];

const ProgramsSlider = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-5 ${
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
        className={`relative z-10 h-[92vh] w-full max-w-[1400px] overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-500 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg"
        >
          <IoArrowUndo size={30} />
        </button>

        {/* Scroll Area */}
        <div className="h-full overflow-y-auto">
          <div className="p-4 md:p-7">
            <div className="grid min-h-[820px] grid-cols-1 lg:grid-cols-[42%_58%]">

              {/* LEFT SECTION */}
              <div className="grid grid-cols-1 gap-10 bg-white p-4 md:p-8 lg:grid-cols-2">

                {/* Programs */}
                <div>
                  <h3 className="mb-8 text-lg font-bold uppercase tracking-wide text-[#5146e5] md:text-xl">
                    Our Programs
                  </h3>

                  <div className="space-y-6">
                    {programs.map((program) => (
                      <Link
                        key={program.slug}
                        to={`/programs/${program.slug}`}
                        onClick={onClose}
                        className="block text-lg font-semibold text-black transition-all duration-300 hover:text-[#f35b0a]"
                      >
                        {program.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Study Here */}
                <div>
                  <h3 className="mb-8 text-lg font-bold uppercase tracking-wide text-[#5146e5] md:text-xl">
                    Study Here
                  </h3>

                  <div className="space-y-6">
  {studyItems.map((item) => (
    <Link
      key={item.slug}
      to={`/study/${item.slug}`}
      onClick={onClose}
      className="block text-lg font-semibold text-black transition-all duration-300 hover:text-[#f35b0a]"
    >
      {item.name}
    </Link>
  ))}
</div>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div className="p-2 md:p-4">
                <div className="relative flex h-full min-h-[500px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#d8d5ff] via-[#ece4ff] to-[#ffd8e7]">

                  {/* Content */}
                  <div className="relative z-10 flex w-full flex-col p-6 sm:p-8 md:p-10 lg:w-[65%] lg:p-12">
                    <h1 className="mb-5 text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl">
                      Admissions Open
                      <br />
                      2026!
                    </h1>

                    <p className="max-w-[550px] text-base leading-relaxed text-black sm:text-lg md:text-[20px] md:leading-9">
                      Become part of a vibrant learning community that inspires
                      innovation, leadership, and academic excellence. Explore
                      career-oriented programs designed to prepare you for
                      tomorrow&apos;s opportunities.
                    </p>

                    <button className="mt-8 w-fit rounded-lg bg-black px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#f35b0a]">
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
                      w-[220px]
                      object-contain

                      sm:w-[280px]
                      md:w-[340px]
                      lg:w-[420px]
                    "
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSlider;