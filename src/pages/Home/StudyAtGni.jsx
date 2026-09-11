import { FaCogs, FaSun, FaCapsules, FaArrowRight } from "react-icons/fa";

const programs = [
  {
    title: "Engineering",
    description: "B.E. in Engineering provides students with strong technical knowledge and practical experience.",
    icon: <FaCogs />
  },
  {
    title: "Management",
    description: "Management programs help students build leadership, business and professional management skills.",
    icon: <FaSun />
  },
  {
    title: "Pharmacy",
    description: "Modern pharmacy teaching with strong practical knowledge and professional experience.",
    icon: <FaCapsules />
  }
];

const recruiters = ["/intel.png", "/hp.png", "/manpower.png", "/ranbaxy.png", "/sap.png", "/intel.png"];

const events = [
  {
    date: "FEB 14, 2026",
    title: "University 2026 Scholarship Result Declared",
    description: "We are pleased to announce the scholarship results for our deserving students.",
  },
  {
    date: "FEB 17, 2026",
    title: "Faculty Development Program (FDP)",
    description: "We are pleased to announce our upcoming faculty development program.",
  },
  {
    date: "FEB 18, 2026",
    title: "Research & Innovation Conference",
    description: "Join us for an inspiring conference focused on research and innovation.",
  },
  {
    date: "FEB 19, 2026",
    title: "Skill Development Workshop",
    description: "A practical workshop designed to enhance professional and technical skills.",
  },
];

const StudyAtGniSection = () => {
  return (
    <section className="w-full bg-white">

      {/* study at gni */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        {/* heading */}
        <div className="text-center">

          <div className="group inline-block cursor-pointer">

            <h2 className="text-[30px] font-extrabold tracking-wide text-[#18233b] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
              STUDY AT GNI
            </h2>

            <div className="mx-auto mt-3 h-[3px] w-0 rounded-full bg-[#ff6b35] transition-all duration-500 ease-out group-hover:w-16" />

          </div>

          <p className="mx-auto mt-6 max-w-5xl text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 md:text-[17px] lg:text-[18px] lg:leading-7">
            Since years back when we took it, it was a humble beginning,
            and one thing that has kept us moving is INSPIRATION from
            students, from their dreams and aspirations. We believe that
            our students are the foundation of our success.
          </p>

        </div>

        {/* programs */}
        <div className="mt-9 grid overflow-hidden rounded-md md:grid-cols-2 lg:grid-cols-4">

          {/* intro card */}
          <div className="bg-[#ff5b00] p-6 text-white sm:p-7 lg:p-6">

            <h3 className="text-[15px] font-bold sm:text-[16px] lg:text-[17px]">
              Programs Offered
            </h3>

            <p className="mt-3 text-[13px] leading-5 sm:text-[14px] sm:leading-6 lg:text-[15px]">
              GNI provides students with a wide range of programs designed
              to develop professional knowledge, practical skills and
              career opportunities for their bright future.
            </p>

            <p className="mt-3 text-[13px] leading-5 sm:text-[14px] lg:text-[15px]">
              Explore our academic programs and discover your path to
              success.
            </p>

          </div>

          {/* program cards */}
          {programs.map((program, index) => (
            <div key={program.title} className={`flex min-h-[220px] flex-col justify-center p-6 text-white sm:p-7 lg:min-h-[225px] lg:p-6 ${index === 0 ? "bg-[#858383]" : index === 1 ? "bg-[#6d6d6d]" : "bg-[#4d4d4d]"}`}>

              {/* icon */}
              <div className="mb-5 text-[34px] font-light text-white sm:text-[38px] md:text-[40px]">
                {program.icon}
              </div>

              {/* title */}
              <h3 className="text-[17px] font-bold sm:text-[19px] md:text-[20px]">
                {program.title}
              </h3>

              {/* description */}
              <p className="mt-3 text-[13px] leading-5 text-gray-100 sm:text-[14px] sm:leading-6 md:text-[15px]">
                {program.description}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* placement recruiters */}
      <div className="w-full bg-[#f5f5f5]">

        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">

          {/* placements */}
          <div className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-12">

            {/* heading & stats */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <h3 className="text-[14px] font-extrabold tracking-[0.12em] text-[#ff5b00] sm:text-[15px] md:text-[16px]">
                  PLACEMENTS
                </h3>

                <p className="mt-2 text-[30px] font-extrabold leading-none text-[#111] sm:text-[35px] md:text-[38px]">
                  500+
                </p>
              </div>

              <div className="sm:pb-1">
                <p className="text-[13px] font-medium leading-5 text-gray-700 sm:text-[14px] md:text-[15px]">
                  Students Placed
                  <br />
                  in 100%.
                </p>
              </div>

            </div>

            {/* divider */}
            <div className="my-6 h-px w-full bg-gray-300" />

            {/* placement content */}
            <div className="flex gap-5">

              <div className="flex-1">

                <p className="text-[14px] leading-[1.65] text-gray-600 sm:text-[15px] sm:leading-[1.7] md:text-[16px]">
                  Guru Nanak Institutions has been a great contributor to
                  the development of any personality. We have empowered
                  our leadership, skill development and helped students
                  excel and gain confidence to enter the corporate world.
                </p>

                <p className="mt-5 text-[14px] font-bold text-[#ff5b00] sm:text-[15px] md:text-[16px]">
                  Panel Badge
                </p>

                <p className="mt-1 text-[12px] font-bold text-gray-700 sm:text-[13px] md:text-[14px]">
                  GNI TECHNOLOGIES
                </p>

                <button type="button" className="mt-6 flex items-center gap-1 text-[12px] font-bold tracking-wide text-gray-700 transition-colors hover:text-[#ff5b00] sm:text-[13px] md:text-[14px]">
                  VIEW MORE
                  <FaArrowRight className="text-[10px] text-[#ff5b00] sm:text-[11px]" />
                </button>

              </div>

              {/* student image */}
              <div className="hidden w-[100px] shrink-0 sm:block sm:w-[115px]">
                <div className="relative h-[145px] w-full overflow-hidden">
                  <img src="/placement.png" alt="GNI student" className="absolute inset-0 h-full w-full object-cover" />
                </div>
              </div>

            </div>

          </div>

          {/* recruiters */}
          <div className="bg-[#dedede] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-12">

            <h3 className="text-[14px] font-extrabold tracking-[0.12em] text-[#ff5b00] sm:text-[15px] md:text-[16px]">
              RECRUITERS
            </h3>

            {/* recruiter stats */}
            <div className="mt-3 grid grid-cols-2 gap-5">

              <div>
                <p className="text-[30px] font-extrabold leading-none text-[#111] sm:text-[35px] md:text-[38px]">
                  250+
                </p>

                <p className="mt-1 text-[13px] font-medium text-gray-700 sm:text-[14px] md:text-[15px]">
                  Companies Visited
                </p>
              </div>

              <div>
                <p className="text-[30px] font-extrabold leading-none text-[#111] sm:text-[35px] md:text-[38px]">
                  20+
                </p>

                <p className="mt-1 text-[13px] font-medium text-gray-700 sm:text-[14px] md:text-[15px]">
                  Industry Interaction
                </p>
              </div>

            </div>

            {/* recruiter logos */}
            <div className="mt-7 grid grid-cols-2 gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-3">

              {recruiters.map((logo, index) => (
                <div key={index} className="group flex h-[82px] w-full items-center justify-center overflow-hidden rounded-sm bg-white px-2 py-2 transition-all duration-300 hover:shadow-md sm:h-[92px] sm:px-3">
                  <img src={logo} alt="Recruiter company" width="160" height="75" className="h-auto w-auto max-h-[55px] max-w-[145px] object-contain transition-transform duration-300 ease-out group-hover:scale-105 sm:max-h-[62px] sm:max-w-[160px]" />
                </div>
              ))}

            </div>

            <button type="button" className="mt-7 flex items-center gap-1 text-[12px] font-bold tracking-wide text-gray-700 transition-colors hover:text-[#ff5b00] sm:text-[13px] md:text-[14px]">
              VIEW MORE
              <FaArrowRight className="text-[10px] text-[#ff5b00] sm:text-[11px]" />
            </button>

          </div>

        </div>

      </div>

      {/* latest updates and events */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        {/* header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <h2 className="text-[20px] font-extrabold tracking-wide text-[#18233b] sm:text-[22px] md:text-[24px] lg:text-[25px]">
            LATEST UPDATES{" "}
            <span className="text-[#ff5b00]">&amp; EVENTS</span>
          </h2>

          <div className="flex flex-col items-start gap-2 sm:items-end">

            <p className="max-w-[310px] text-[12px] leading-5 text-gray-500 sm:text-right sm:text-[13px] md:text-[14px]">
              Stay updated with the latest college news, academic
              achievements, events and opportunities.
            </p>

            <button type="button" className="rounded-full bg-[#ff5b00] px-5 py-2 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#e64f00] sm:text-[13px] md:text-[14px]">
              View All
            </button>

          </div>

        </div>

        {/* events */}
        <div className="mt-7 grid gap-4 lg:grid-cols-[1.05fr_1.5fr]">

          {/* featured event */}
          <article className="group relative min-h-[300px] overflow-hidden rounded-xl sm:min-h-[340px] lg:min-h-[380px]">

            <img src="/latest-event.png" alt="Latest GNI event" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

              <p className="text-[11px] font-medium uppercase tracking-wide text-white/80 sm:text-[12px] md:text-[13px]">
                Feb 2026
              </p>

              <h3 className="mt-2 text-[17px] font-bold leading-snug text-white sm:text-[19px] md:text-[21px]">
                University 2026 Scholarship Result Declared
              </h3>

              <p className="mt-2 max-w-md text-[12px] leading-5 text-white/80 sm:text-[13px] md:text-[14px]">
                We are pleased to announce the scholarship results for
                deserving students.
              </p>

              <button type="button" className="mt-3 flex items-center gap-1 text-[12px] font-semibold text-white sm:text-[13px] md:text-[14px]">
                Read More
                <FaArrowRight className="text-[#ff5b00]" />
              </button>

            </div>

          </article>

          {/* event cards */}
          <div className="grid gap-4 sm:grid-cols-2">

            {events.map((event, index) => (
              <article key={index} className="rounded-xl border border-[#b8c1d4] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5">

                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400 sm:text-[12px] md:text-[13px]">
                  {event.date}
                </p>

                <h3 className="mt-2 text-[16px] font-bold leading-snug text-[#18233b] sm:text-[17px] md:text-[18px]">
                  {event.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-[12px] leading-5 text-gray-500 sm:text-[13px] md:text-[14px]">
                  {event.description}
                </p>

                <button type="button" className="mt-3 flex items-center gap-1 text-[12px] font-semibold text-[#ff5b00] sm:text-[13px] md:text-[14px]">
                  Read More
                  <FaArrowRight />
                </button>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default StudyAtGniSection;