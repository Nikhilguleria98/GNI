import { useParams } from "react-router-dom";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { programCatalog } from "./programCatalog";

const ProgramDetailsPage = () => {
  const { programSlug } = useParams();
  const program =
    programCatalog.find((item) => item.slug === programSlug) ||
    programCatalog.find((item) => item.slug === "btech");

  if (!program) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#171717]">Program not found</h1>
        <p className="mt-4 text-gray-600">
          The program you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="relative min-h-[600px] w-full overflow-hidden sm:min-h-[650px] lg:min-h-[600px]">
        <img
          src="/home.png"
          alt="B.Tech Campus"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f35b0a]/95 via-[#f35b0a]/60 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1440px] items-center px-6 py-16 sm:min-h-[650px] sm:px-10 lg:min-h-[600px] lg:px-20 xl:px-[144px]">
          <div className="w-full max-w-[800px]">
            <div className="mb-6 inline-flex items-center rounded-md bg-[#df2929] px-4 py-2.5 sm:mb-7 sm:px-5 sm:py-3">
              <span className="text-[12px] font-bold text-white sm:text-[13px] lg:text-[14px]">
                Admissions Open for 2026-2027
              </span>
            </div>

            <h1 className="mb-5 max-w-[800px] text-[30px] font-bold leading-[1.15] tracking-tight text-white sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
              {program.title}
            </h1>

            <p className="mb-8 max-w-[610px] text-[14px] font-normal leading-6 text-white sm:text-[15px] sm:leading-7 md:text-[17px] lg:text-[18px] lg:leading-7">
              {program.description}
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="h-[18px] w-[18px] text-green-400 sm:h-5 sm:w-5" strokeWidth={2} aria-hidden="true" />
                <span className="text-[13px] text-white sm:text-[14px] lg:text-[15px]">
                  UGC Recognized
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FiCheckCircle className="h-[18px] w-[18px] text-green-400 sm:h-5 sm:w-5" strokeWidth={2} aria-hidden="true" />
                <span className="text-[13px] text-white sm:text-[14px] lg:text-[15px]">
                  Approved by Govt. of Punjab
                </span>
              </div>
            </div>

            <button type="button" className="group inline-flex h-11 min-w-[170px] items-center justify-center gap-4 rounded-md bg-[#f4510b] px-6 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#df4607] hover:shadow-lg sm:h-12 sm:min-w-[180px] sm:text-[15px] md:h-14 md:min-w-[193px] md:px-7 md:text-[17px]">
              <span>Apply Now</span>
              <FiArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-white p-6 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <button
                type="button"
                className="mb-6 inline-flex items-center rounded-full bg-[#f35b0a] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(243,91,10,0.24)]"
              >
                About Us
              </button>

              <h2 className="text-[42px] font-black leading-[0.95] tracking-[-0.04em] text-[#1c1c1c] sm:text-[52px] lg:text-[64px]">
                {program.title}
              </h2>

              <div className="mt-6 h-1.5 w-24 rounded-full bg-[#f35b0a]" />

              {(program.paragraphs || [program.description]).map((paragraph, index) => (
                <p
                  key={`${program.slug}-paragraph-${index}`}
                  className={`max-w-[700px] text-[18px] leading-8 text-[#2a2a2a] ${
                    index === 0 ? "mt-8" : "mt-6"
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              <button
                type="button"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-[#f35b0a] px-6 py-3 text-[16px] font-bold text-white shadow-[0_10px_24px_rgba(243,91,10,0.24)] transition hover:bg-[#df5208]"
              >
                Register Now →
              </button>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute bottom-[-18px] left-[-18px] h-32 w-32 rounded-full bg-[#e9dffb] blur-xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-[#f8f5f4] p-3 shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
                <img
                  src="/home.png"
                  alt="Student learning on a laptop"
                  className="h-[420px] w-full rounded-[22px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {program.slug === "mba" && (
        <section className="mx-auto max-w-[1240px] px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-[28px] bg-white p-6 sm:p-8 lg:p-10">
            <h2 className="text-center text-[38px] font-black leading-[1.1] tracking-[-0.04em] text-[#1c1c1c] sm:text-[42px] lg:text-[52px]">
              Management Programs
            </h2>

            <p className="mx-auto mt-6 max-w-[1100px] text-center text-[18px] leading-8 text-[#2a2a2a]">
              Guru Nanak Institutions (GNI) offers a comprehensive MBA program designed to develop strategic thinkers, business leaders, and entrepreneurs. Our industry-focused curriculum combines case studies, live projects, internships, expert faculty, and practical learning to prepare students for leadership roles in management, marketing, finance, human resources, operations, and entrepreneurship.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[24px] bg-[#e9e9e9] p-6 shadow-[0_8px_24px_rgba(24,39,75,0.06)]">
                <h3 className="mb-6 text-[26px]  text-blue-800">
                  B.B.A Programs
                </h3>

                <ul className="space-y-4 text-[18px] font-medium text-[#1c1c1c]">
                  {[
                    "MBA – Marketing",
                    "MBA – Finance",
                    "MBA – Human Resource Management",
                    "MBA – Operations Management",
                    "MBA – Business Analytics",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-[20px] text-[#1f59d0]">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] bg-[#e9e9e9] p-6 shadow-[0_8px_24px_rgba(24,39,75,0.06)]">
                <h3 className="mb-6 text-[26px] text-blue-800">
                  Programs Offered
                </h3>

                <ul className="space-y-4 text-[18px] font-medium text-[#1c1c1c]">
                  {[
                    "MBA – Marketing",
                    "MBA – Finance",
                    "MBA – Human Resource Management",
                    "MBA – Operations Management",
                    "MBA – Business Analytics",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-[20px] text-[#1f59d0]">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-[24px] bg-[#f5f5f5] p-6 text-center shadow-[0_8px_24px_rgba(24,39,75,0.04)]">
              <h3 className="text-[30px] text-blue-800  sm:text-[36px]">
                Future-Ready Programs
              </h3>

              <button
                type="button"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-[#f35b0a] px-6 py-3 text-[16px] font-bold text-white shadow-[0_10px_24px_rgba(243,91,10,0.24)] transition hover:bg-[#df5208]"
              >
                view Future-Ready Programs →
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProgramDetailsPage;
