import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProgramsCTA() {
  return (
    <section className="bg-orange-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-16">

        {/* Content */}
        <div className="text-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-100 sm:text-sm md:text-base">
            Admissions Open for 2026 Session
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
            Are you ready to take the next step toward your future career?
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-orange-100 sm:text-base sm:leading-7 md:text-lg">
            Start your journey with GNI and unlock endless opportunities to
            learn, grow, and achieve your dreams.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-start lg:justify-end">
          <Link
            to="/apply-now"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/30
              bg-black
              px-6
              py-3
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-gray-900
              hover:scale-105
              sm:px-7
              sm:py-3.5
              sm:text-base
              whitespace-nowrap
            "
          >
            Apply Now
            <FiArrowRight className="text-base" />
          </Link>
        </div>

      </div>
    </section>
  );
}