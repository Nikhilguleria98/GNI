import { FaCheck, FaArrowRight } from "react-icons/fa";

const PlacementHero = ({ data }) => {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden sm:min-h-[580px] lg:min-h-[620px]">

      {/* background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${data.heroImage}")`, }} />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-orange-500/65 to-black/20" />

      {/* content */}
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-16 sm:min-h-[580px] sm:px-8 md:min-h-[600px] md:px-10 lg:min-h-[620px] lg:px-12">

        <div className="max-w-2xl text-white">

          {/* badge  */}
          <span className="mb-5 inline-block rounded-sm bg-white/15 px-3 py-1.5 text-[14px] font-semibold uppercase tracking-wide backdrop-blur-sm sm:text-[15px] md:text-[17px] lg:text-[18px]">
            {data.badge}
          </span>

          {/* title */}
          <h1 className="text-[30px] font-bold leading-[1.15] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
            {data.title}
          </h1>

          {/* description  */}
          <p className="mt-5 max-w-xl text-[14px] leading-6 text-white/95 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
            {data.heroDescription}
          </p>

          {/* bottom info  */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] font-medium sm:text-[13px] md:text-[14px]">

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/70">
                <FaCheck className="h-2.5 w-2.5" />
              </span>

              <span>Industry-Focused</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/70">
                <FaCheck className="h-2.5 w-2.5" />
              </span>

              <span>Approved &amp; Recognized</span>
            </div>
          </div>

          {/* button  */}
          <button type="button" className="mt-8 inline-flex items-center rounded-md bg-orange-500 px-6 py-3 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl active:scale-95 sm:px-7 sm:py-3.5 sm:text-[15px] md:text-[16px]">
            Apply Now

            <FaArrowRight className="ml-2 h-3 w-3" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default PlacementHero;