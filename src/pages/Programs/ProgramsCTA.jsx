import { FiArrowRight } from "react-icons/fi";

export default function ProgramsCTA() {
  return (
    <section className="bg-orange-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-12 lg:py-14">

        {/* content */}
        <div className="text-white">

          {/* heading */}
          <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-orange-100 sm:text-[15px] md:text-[17px] lg:text-[18px]">
            Admissions Open for 2026 Session
          </p>

          <h2 className="mt-2 max-w-2xl text-[30px] font-extrabold leading-[1.15] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
            Are you ready to take the next step toward your future career?
          </h2>

          {/* description */}
          <p className="mt-4 max-w-2xl text-[14px] leading-6 text-orange-100 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
            Start your journey with GNI and unlock endless opportunities to
            learn, grow, and achieve your dreams.
          </p>
        </div>

        {/* button */}
        <button type="button" className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/30 bg-black px-6 py-3 text-[14px] font-bold text-white transition hover:bg-gray-900 sm:px-7 sm:py-3.5 sm:text-[15px] md:text-[16px]">
          Apply Now

          <FiArrowRight className="text-[15px] sm:text-[16px]" />
        </button>
      </div>
    </section>
  );
}