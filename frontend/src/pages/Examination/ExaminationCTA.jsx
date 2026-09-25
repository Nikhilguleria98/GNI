import { FiArrowRight, FiPhone } from "react-icons/fi";

const ExaminationCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#f85b0b] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">

          {/* content */}
          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-100 sm:text-sm">
              Need Assistance?
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
              Have Questions About
              <span className="block">
                Your Examination?
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-orange-50 sm:text-base">
              For examination-related information or academic guidance,
              connect with the concerned department at Guru Nanak Institutions.
            </p>

          </div>

          {/* actions */}
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-[#f85b0b] transition-all duration-300 hover:shadow-xl"
            >
              Contact GNI
              <FiArrowRight className="h-4 w-4" />
            </a>

            <a
              href="tel:+919896500140"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/60 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
            >
              <FiPhone className="h-4 w-4" />
              Contact Admission Team
            </a>

          </div>

        </div>

        {/* bottom information */}
        <div className="mt-8 border-t border-white/20 pt-5">

          <div className="flex flex-col gap-2 text-xs text-orange-100 sm:flex-row sm:items-center sm:justify-between sm:text-sm">

            <span>
              Stay connected with official examination updates.
            </span>

            <span className="font-semibold text-white">
              info@gni.edu.in
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ExaminationCTA;