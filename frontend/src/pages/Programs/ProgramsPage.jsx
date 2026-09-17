import { Link } from "react-router-dom";
import { programCatalog } from "./programCatalog";

const studyHighlights = [
  "Experienced & Dedicated Faculty",
  "Modern Smart Classrooms",
  "Advanced Laboratories",
  "Industry-Oriented Curriculum",
  "Excellent Placement Support",
  "Innovation & Research Culture",
  "Vibrant Campus Life",
];

const ProgramsPage = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr]">

          {/* LEFT SECTION */}
          <div className="bg-[#f7f7f7] p-5 sm:p-8 lg:p-10">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

              {/* Programs */}
              <div>
                <h3 className="mb-5 text-xl font-black uppercase tracking-wide text-[#5146e5] sm:text-2xl">
                  Our Programs
                </h3>

                <div className="space-y-3">
                  {programCatalog.map((program) => (
                    <Link
                      key={program.slug}
                      to={`/programs/${program.slug}`}
                      className="block text-base font-semibold text-[#171717] transition hover:text-[#f85b0b] sm:text-lg"
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Study Here */}
              <div>
                <h3 className="mb-5 text-xl font-black uppercase tracking-wide text-[#5146e5] sm:text-2xl">
                  Study Here
                </h3>

                <div className="space-y-3">
                  {studyHighlights.map((item) => (
                    <div
                      key={item}
                      className="text-base font-semibold text-[#171717] sm:text-lg"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="bg-[#f7f7f7] p-3 sm:p-5 lg:p-6">
            <div className="relative flex min-h-[500px] flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#d8d5ff] via-[#e9dcfa] to-[#ffd1e5] p-6 sm:p-8 lg:p-10">

              {/* Back Button */}
              <button
                type="button"
                onClick={() => window.history.back()}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow-md transition hover:scale-105 sm:h-12 sm:w-12 sm:text-3xl"
                aria-label="Go back"
              >
                ←
              </button>

              {/* Content */}
              <div className="relative z-10 max-w-full lg:max-w-[65%]">
                <h1 className="text-3xl font-black leading-tight text-[#171717] sm:text-5xl md:text-6xl">
                  Admissions Open
                  <span className="block">2026!</span>
                </h1>

                <p className="mt-5 text-sm leading-7 text-[#171717] sm:text-base md:text-lg lg:text-xl">
                  Become part of a vibrant learning community that inspires
                  innovation, leadership, and academic excellence. Explore
                  career-oriented programs designed to prepare you for
                  tomorrow&apos;s opportunities.
                </p>

                <button
                  type="button"
                  className="mt-6 rounded-full bg-[#f85b0b] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#dc4e08] sm:px-6 sm:py-3.5 sm:text-base"
                >
                  Apply Today →
                </button>
              </div>

              {/* Student Image */}
              <div
                className="
                  mt-8
                  flex
                  justify-center
                  lg:absolute
                  lg:bottom-0
                  lg:right-0
                  lg:mt-0
                  lg:w-[42%]
                  xl:w-[40%]
                "
              >
                <img
                  src="/student.png"
                  alt="Student"
                  className="
                    h-auto
                    w-[220px]
                    object-contain
                    sm:w-[280px]
                    md:w-[320px]
                    lg:w-full
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

export default ProgramsPage;