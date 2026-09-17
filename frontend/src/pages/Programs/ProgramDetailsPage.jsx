import { Link, useParams } from "react-router-dom";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import {
  programCatalog,
  programs,
  programData,
  whyChooseData,
} from "./programCatalog";

const ProgramDetailsPage = () => {
  const { program: programSlug } = useParams();

  const program =
    programCatalog.find((item) => item.slug === programSlug) ||
    programCatalog.find((item) => item.slug === "btech");

  const programDetails = programs[programSlug] || programs.btech;

  const descriptionParagraphs = Array.isArray(programDetails?.description)
    ? programDetails.description
    : [program?.description];

  if (!program) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#171717]">
          Program not found
        </h1>

        <p className="mt-4 text-gray-600">
          The program you are looking for does not exist.
        </p>
      </div>
    );
  }

  const data =
    programData[programSlug] ||
    programData[program?.slug] ||
    programData.btech;

  const whyChoose =
    whyChooseData[programSlug] || whyChooseData.btech;

  // Invalid URL
  if (!data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          Program Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <section className="relative min-h-[600px] w-full overflow-hidden sm:min-h-[650px] lg:min-h-[600px]">
        <img
          src={program.heroImage || "/i1.png"}
          alt={`${program.title} Campus`}
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
                <FiCheckCircle
                  className="h-[18px] w-[18px] text-green-400 sm:h-5 sm:w-5"
                  strokeWidth={2}
                  aria-hidden="true"
                />

                <span className="text-[13px] text-white sm:text-[14px] lg:text-[15px]">
                  UGC Recognized
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FiCheckCircle
                  className="h-[18px] w-[18px] text-green-400 sm:h-5 sm:w-5"
                  strokeWidth={2}
                  aria-hidden="true"
                />

                <span className="text-[13px] text-white sm:text-[14px] lg:text-[15px]">
                  Approved by Govt. of Punjab
                </span>
              </div>
            </div>

            <button
              type="button"
              className="group inline-flex h-11 min-w-[170px] items-center justify-center gap-4 rounded-md bg-[#f4510b] px-6 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#df4607] hover:shadow-lg sm:h-12 sm:min-w-[180px] sm:text-[15px] md:h-14 md:min-w-[193px] md:px-7 md:text-[17px]"
            >
              <span>Apply Now</span>

              <FiArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6"
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </section>

      <section className="min-h-screen overflow-hidden bg-white text-black">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:px-10 lg:px-14 lg:py-24">
          {/* Top Label */}
          <div className="mb-12">
            <span className="inline-flex rounded-full bg-[#ff6500] px-6 py-2 text-sm font-medium text-black sm:text-base">
              About Us
            </span>
          </div>

          {/* Main Content */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT CONTENT */}
            <div className="order-2 lg:order-1">
              {/* Orange Line */}
              <div className="mb-8 h-[6px] w-24 bg-[#ff6500]" />

              {/* Program Name */}
              <h1 className="mb-6 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
                {programDetails.name}
              </h1>

              {/* Description */}
              <div className="space-y-6">
                {descriptionParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="max-w-[700px] font-medium sm:text-lg sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-3 rounded-lg bg-[#ff6500] px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-[#ff7a1a] hover:shadow-lg hover:shadow-orange-500/20"
                >
                  Register Now
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-[full]">
                {/* Orange Circle */}
                <div className="absolute -left-5 -top-7 h-24 w-24 rounded-full bg-[#ff6500] sm:h-28 sm:w-28" />

                {/* Blue Circle */}
                <div className="absolute -bottom-6 -right-5 h-24 w-24 rounded-full bg-[#165cff] sm:h-28 sm:w-28" />

                {/* Image */}
                <div className="relative w-[full] overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
                  <img
                    src={programDetails.image}
                    alt={programDetails.name}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="min-h-screen px-5 py-12">
          {/* Heading */}
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="mb-5 text-4xl font-bold text-black md:text-5xl">
              {data.title}
            </h1>

            <p className="mx-auto max-w-5xl text-base leading-7 text-gray-600 md:text-lg">
              {data.description}
            </p>
          </div>

          {/* Cards */}
          <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
            {/* Left */}
            <div className="rounded-[28px] bg-gray-100 p-8 text-gray-700">
              <h2 className="mb-7 text-2xl font-bold text-blue-600">
                {data.leftTitle}
              </h2>

              <ul className="space-y-4">
                {data.leftPrograms.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base md:text-lg"
                  >
                    <span>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="rounded-[28px] bg-gray-100 p-8 text-gray-700">
              <h2 className="mb-7 text-2xl font-bold text-blue-600">
                {data.rightTitle}
              </h2>

              <ul className="space-y-4">
                {data.rightPrograms.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base md:text-lg"
                  >
                    <span>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Future Ready */}
          <div className="mx-auto mt-10 max-w-6xl rounded-[28px] bg-gray-100 px-6 py-9 text-center">
            <h2 className="mb-6 text-2xl font-bold text-blue-600">
              Future-Ready Programs
            </h2>

            <button className="rounded-lg bg-orange-500 px-7 py-3 text-white transition hover:bg-orange-600">
              View Future-Ready Programs

              <span className="ml-5 text-xl">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-black md:text-4xl">
              {whyChoose.title}
            </h2>

            <p className="mb-10 max-w-3xl leading-7 text-black md:text-lg">
              {whyChoose.description}
            </p>

            <p className="mb-10 max-w-3xl text-base leading-7 text-black text-bold md:text-lg">
              key Highlights
            </p>

            {/* Points */}
            <div className="space-y-5">
              {(whyChoose.points || []).map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl font-bold text-orange-500">
                    →
                  </span>

                  <span className="text-base text-gray-700 md:text-lg">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <p className="mt-10 max-w-3xl text-base leading-7 text-gray-700 md:text-lg">
              {whyChoose.bottomText}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={whyChoose.image}
              alt={whyChoose.title}
              className="h-[400px] w-full object-cover md:h-[500px] lg:h-[600px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramDetailsPage;

