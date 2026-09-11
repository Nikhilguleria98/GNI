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
    <div className="mx-auto flex min-h-[calc(100vh-180px)] max-w-[1240px] items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative w-full overflow-hidden rounded-[30px] border border-orange-200 bg-white/90 shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
        <div className="grid gap-0 bg-[#f7f7f7] lg:grid-cols-[1.05fr_1.45fr]">
          <div className="bg-[#f7f7f7] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-6 text-[26px] font-black uppercase tracking-wide text-[#5146e5]">
                  Our Programs
                </h3>

                <div className="space-y-4">
                  {programCatalog.map((program) => (
                    <Link
                      key={program.slug}
                      to={`/programs/${program.slug}`}
                      className="block text-left text-[18px] font-semibold text-[#171717] transition hover:text-[#f85b0b]"
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-[26px] font-black uppercase tracking-wide text-[#5146e5]">
                  Study Here
                </h3>

                <div className="space-y-4">
                  {studyHighlights.map((item) => (
                    <div
                      key={item}
                      className="text-[18px] font-semibold text-[#171717]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-stretch bg-[#f7f7f7] p-4 sm:p-5 lg:p-6">
            <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-br from-[#d8d5ff] via-[#e9dcfa] to-[#ffd1e5] px-6 py-6 sm:px-8 lg:px-10 lg:py-10">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl font-light text-black shadow-lg transition hover:scale-105"
                aria-label="Go back"
              >
                ←
              </button>

              <div className="relative z-10 w-full lg:w-[72%]">
                <h1 className="text-4xl font-black leading-none text-[#171717] sm:text-5xl lg:text-[64px]">
                  Admissions Open
                  <span className="mt-1 block">2026!</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#171717] sm:text-lg lg:text-[22px]">
                  Become part of a vibrant learning community that inspires innovation,
                  leadership, and academic excellence. Explore career-oriented programs
                  designed to prepare you for tomorrow&apos;s opportunities.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    className="rounded-full bg-[#f85b0b] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(248,91,11,0.25)] transition hover:bg-[#dc4e08]"
                  >
                    Apply Today →
                  </button>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 right-0 z-0 w-[45%] max-w-[420px]">
                <img
                  src="/student.png"
                  alt="Student"
                  className="w-full object-contain"
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
