import { Link, useParams } from "react-router-dom";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import {programCatalog,programs,programData,whyChooseData} from "./programCatalog";
const ProgramDetailsPage = () => {
  const { programSlug } = useParams();
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
        <h1 className="text-3xl font-bold text-[#171717]">Program not found</h1>
        <p className="mt-4 text-gray-600">
          The program you are looking for does not exist.
        </p>
      </div>
    );
  }
 

  const data = programData[programSlug] || programData[program?.slug] || programData.btech;
  const whyChoose = whyChooseData[programSlug] || whyChooseData.btech;

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
      <section className="relative min-h-[500px] w-full overflow-hidden sm:min-h-[600px] lg:min-h-[700px]">
  <img
    src={program.heroImage || "/i1.png"}
    alt={`${program.title} Campus`}
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#f35b0a]/95 via-[#f35b0a]/60 to-transparent" />

  <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-12 sm:min-h-[600px] sm:px-8 lg:min-h-[700px] lg:px-12">
    <div className="w-full max-w-3xl">
      <div className="mb-5 inline-flex items-center rounded-md bg-[#df2929] px-3 py-2 sm:px-5 sm:py-3">
        <span className="text-xs font-bold text-white sm:text-sm">
          Admissions Open for 2026-2027
        </span>
      </div>

      <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
        {program.title}
      </h1>

      <p className="mb-8 text-sm leading-6 text-white sm:text-base sm:leading-7 md:text-lg">
        {program.description}
      </p>

      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
        <div className="flex items-center gap-2">
          <FiCheckCircle className="h-5 w-5 text-green-400" />
          <span className="text-sm text-white">
            UGC Recognized
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FiCheckCircle className="h-5 w-5 text-green-400" />
          <span className="text-sm text-white">
            Approved by Govt. of Punjab
          </span>
        </div>
      </div>

      <button className="group inline-flex items-center gap-3 rounded-md bg-[#f4510b] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#df4607] sm:text-base">
        Apply Now
        <FiArrowRight className="transition group-hover:translate-x-1" />
      </button>
    </div>
  </div>
</section>
    </>
  );
};

export default ProgramDetailsPage;
