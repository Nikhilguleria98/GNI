import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const OnlineAdmissionHero = ({ onApply }) => {
  const admissionInfo = [
    "Explore programmes",
    "Get admission guidance",
    "Understand the admission process",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      <div className="relative mx-auto max-w-7xl">

        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

          {/* left content */}
          <div className="max-w-4xl">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#f85b0b] sm:text-sm">
              Student Corner
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight text-[#171717] sm:text-6xl md:text-7xl lg:text-[70px]">
              Online Admission
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Begin your academic journey with Guru Nanak Institutions. Explore
              the programmes available at GNI, understand the admission process,
              and connect with the admission team for the guidance you need.
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base">
              Whether you are planning your next academic step or looking for
              information about a programme, our admission team can help you
              move forward with clarity.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">

              <button type="button" onClick={onApply} className="group inline-flex items-center gap-2 rounded-md bg-[#f85b0b] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#dc4e08] hover:shadow-lg">
                Apply Now

                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a href="#admission-process" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#171717] transition-all duration-300 hover:border-[#f85b0b] hover:text-[#f85b0b]">
                Admission Process
              </a>

            </div>

          </div>

          {/* image */}
          <div className="relative lg:pl-4">

            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-[0_20px_50px_rgba(24,35,59,0.10)]">
              <img src="/home.png" alt="GNI Campus" className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[440px]" />
            </div>

          </div>

        </div>

        {/* admission information */}
        <div className="mt-9 border-t border-orange-200 pt-6 sm:mt-12 sm:pt-7">

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">

            {admissionInfo.map((item, index) => (
              <div key={item} className={`flex items-center gap-3 ${index !== 0 ? "sm:border-l sm:border-orange-200 sm:pl-8" : ""}`}>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f85b0b]/10 text-[#f85b0b]">
                  <FiCheckCircle className="h-4 w-4" />
                </div>

                <p className="text-sm font-semibold text-[#303030]">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default OnlineAdmissionHero;