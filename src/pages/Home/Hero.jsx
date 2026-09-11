import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden sm:min-h-[650px] lg:min-h-[600px]">

      {/* background image */}
      <img src="/home.png" alt="B.Tech Campus" className="absolute inset-0 h-full w-full object-cover object-center" />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f35b0a]/95 via-[#f35b0a]/60 to-transparent" />

      {/* content */}
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1440px] items-center px-6 py-16 sm:min-h-[650px] sm:px-10 lg:min-h-[600px] lg:px-20 xl:px-[144px]">
        <div className="w-full max-w-[800px]">

          {/* admission badge */}
          <div className="mb-6 inline-flex items-center rounded-md bg-[#df2929] px-4 py-2.5 sm:mb-7 sm:px-5 sm:py-3">
            <span className="text-[12px] font-bold text-white sm:text-[13px] lg:text-[14px]">
              Admissions Open for 2026-2027
            </span>
          </div>

          {/* heading */}
          <h1 className="mb-5 max-w-[800px] text-[30px] font-bold leading-[1.15] tracking-tight text-white sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
            Bachelor of Technology (B.Tech)
          </h1>

          {/* description */}
          <p className="mb-8 max-w-[610px] text-[14px] font-normal leading-6 text-white sm:text-[15px] sm:leading-7 md:text-[17px] lg:text-[18px] lg:leading-7">
            Build a strong foundation in engineering through industry-focused
            learning, practical experience, and cutting-edge technology to
            become a future-ready professional.
          </p>

          {/* features */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">

            {/* feature 1 */}
            <div className="flex items-center gap-2">
              <FiCheckCircle className="h-[18px] w-[18px] text-green-400 sm:h-5 sm:w-5" strokeWidth={2} aria-hidden="true" />

              <span className="text-[13px] text-white sm:text-[14px] lg:text-[15px]">
                UGC Recognized
              </span>
            </div>

            {/* feature 2 */}
            <div className="flex items-center gap-2">
              <FiCheckCircle className="h-[18px] w-[18px] text-green-400 sm:h-5 sm:w-5" strokeWidth={2} aria-hidden="true" />

              <span className="text-[13px] text-white sm:text-[14px] lg:text-[15px]">
                Approved by Govt. of Punjab
              </span>
            </div>
          </div>

          {/* button */}
          <button type="button" className="group inline-flex h-11 min-w-[170px] items-center justify-center gap-4 rounded-md bg-[#f4510b] px-6 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#df4607] hover:shadow-lg sm:h-12 sm:min-w-[180px] sm:text-[15px] md:h-14 md:min-w-[193px] md:px-7 md:text-[17px]">
            <span>Apply Now</span>

            <FiArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6" strokeWidth={2} aria-hidden="true" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;