import { Link } from "react-router-dom";
import { FaCogs, FaSun, FaCapsules, FaArrowRight } from "react-icons/fa";

const programs = [
  {
    title: "Engineering",
    description: "GNI Engineering provides students with extraordinary learning opportunities.",
    icon: <FaCogs />,
  },
  {
    title: "Management",
    description: "Management programs help business executives build valuable skills, to leverage new opportunities.",
    icon: <FaSun />,
  },
  {
    title: "Pharmacy",
    description: "Modern research facilities with cutting edge technology and faculty with extensive research.",
    icon: <FaCapsules />,
  },
];

const recruiters = ["/intel.png", "/hp.png", "/manpower.png", "/ranbaxy.png", "/sap.png", "/intel.png"];

const events = [
  {
    date: "FEB 14, 2026",
    title: "University 2026 Scholarship Result Declared",
    description: "We are pleased to announce the scholarship results for our deserving students.",
    slug: "scholarship-result"
  },
  {
    date: "FEB 17, 2026",
    title: "Faculty Development Program (FDP)",
    description: "We are pleased to announce our upcoming faculty development program.",
    slug: "faculty-development"
  },
  {
    date: "FEB 18, 2026",
    title: "Research & Innovation Conference",
    description: "Join us for an inspiring conference focused on research and innovation.",
    slug: "research-innovation"
  },
  {
    date: "FEB 19, 2026",
    title: "Skill Development Workshop",
    description: "A practical workshop designed to enhance professional and technical skills.",
    slug: "skill-development"
  }
];

const StudyAtGni = () => {
  return (
    <section className="w-full overflow-hidden bg-white">

      {/* study at gni */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        {/* heading */}
        <div className="text-center">
          <div className="group inline-block cursor-pointer">

            <h2 className="text-[30px] font-extrabold tracking-wide text-[#18233b] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
              STUDY AT GNI
            </h2>

            <div className="mx-auto mt-3 h-[3px] w-0 rounded-full bg-[#ff6b35] transition-all duration-500 ease-out group-hover:w-16" />

          </div>

          <p className="mx-auto mt-6 max-w-5xl text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 md:text-[17px] lg:text-[18px] lg:leading-7">
            Sixteen years back when we took off, it was a humble beginning.
            And one thing that has kept us moving is INSPIRATION: From life,
            from each other and from every little milestone that we have
            achieved. And today, after a rigorous journey, we have carved a
            niche for ourselves by becoming the most preferred institute in
            the region.
          </p>
        </div>

        {/* programs */}
        <div className="mt-9 grid overflow-hidden rounded-md md:grid-cols-2 lg:grid-cols-4">

          {/* intro card */}
          <div className="min-w-0 bg-[#ff5b00] p-6 text-white sm:p-7 lg:p-6">

            <h3 className="text-[15px] font-bold sm:text-[16px] lg:text-[17px]">
              Programs Offered
            </h3>

            <p className="mt-3 text-[13px] leading-5 sm:text-[14px] sm:leading-6 lg:text-[15px]">
              GNI Programmes are challenging and intensive: we expect a lot
              from our graduate & post-graduate students. Our approach to
              graduate & post-graduate study emphasises your ability to work
              independently, while supported by a world-class academic
              community.
            </p>

            <p className="mt-3 text-[13px] leading-5 sm:text-[14px] lg:text-[15px]">
              Explore our academic programs and discover your path to success.
            </p>

          </div>

          {/* program cards */}
          {programs.map((program, index) => (
            <div key={program.title} className={`flex min-h-[220px] min-w-0 flex-col justify-center p-6 text-white sm:p-7 lg:min-h-[225px] lg:p-6 ${index === 0 ? "bg-[#858383]" : index === 1 ? "bg-[#6d6d6d]" : "bg-[#4d4d4d]"}`}>

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

      {/* placement & recruiters */}
      <div className="w-full bg-[#f5f5f5] lg:bg-[linear-gradient(to_right,#f5f5f5_50%,#dedede_50%)]">

        <div className="mx-auto grid min-w-0 max-w-7xl lg:grid-cols-2">

          {/* placements */}
          <div className="min-w-0 bg-[#f5f5f5] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-12">

            {/* heading & stats */}
            <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div className="min-w-0">
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

            {/* content */}
            <div className="flex min-w-0 gap-5">

              <div className="min-w-0 flex-1">

                <p className="text-[14px] leading-[1.65] text-gray-600 sm:text-[15px] sm:leading-[1.7] md:text-[16px]">
                  Guru Nanak Institutions has been a great contributor to the
                  development of my personality. I have established my
                  leadership, time management and team skills and have also
                  been able to advance these skills to the whole new augment
                  level. The infrastructure of GNI is one of the finest
                  in the NCR region is what stands out the most.
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
                  <img
                    src="/placement.png"
                    alt="GNI student"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

            </div>

          </div>

          {/* recruiters */}
          <div className="min-w-0 bg-[#dedede] px-5 py-10 sm:px-8 sm:py-12 lg:bg-transparent lg:px-10 lg:py-12">

            <h3 className="text-[14px] font-extrabold tracking-[0.12em] text-[#ff5b00] sm:text-[15px] md:text-[16px]">
              RECRUITERS
            </h3>

            {/* stats */}
            <div className="mt-3 grid grid-cols-2 gap-5">

              <div className="min-w-0">
                <p className="text-[30px] font-extrabold leading-none text-[#111] sm:text-[35px] md:text-[38px]">
                  250+
                </p>

                <p className="mt-1 text-[13px] font-medium text-gray-700 sm:text-[14px] md:text-[15px]">
                  Companies Visited
                </p>
              </div>

              <div className="min-w-0">
                <p className="text-[30px] font-extrabold leading-none text-[#111] sm:text-[35px] md:text-[38px]">
                  20+
                </p>

                <p className="mt-1 text-[13px] font-medium text-gray-700 sm:text-[14px] md:text-[15px]">
                  Industry Interaction
                </p>
              </div>

            </div>

            {/* logos */}
            <div className="mt-7 grid grid-cols-2 gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-3">

              {recruiters.map((logo, index) => (
                <div key={index} className="group flex h-[82px] w-full min-w-0 items-center justify-center overflow-hidden rounded-sm bg-white px-2 py-2 transition-all duration-300 hover:shadow-md sm:h-[92px] sm:px-3">
                  <img src={logo} alt="Recruiter company" width="160" height="75" className="h-auto w-auto max-h-[55px] max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105 sm:max-h-[62px] sm:max-w-[160px]" />
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
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        {/* header */}
        <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <h2 className="text-[20px] font-extrabold tracking-wide text-[#18233b] sm:text-[22px] md:text-[24px] lg:text-[25px]">
            LATEST UPDATES{" "}
            <span className="text-[#ff5b00]">&amp; EVENTS</span>
          </h2>

          <div className="flex min-w-0 flex-col items-start gap-2 sm:items-end">

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
        <div className="mt-7 grid min-w-0 gap-4 lg:grid-cols-[1.05fr_1.5fr]">

          {/* featured event */}
          <article className="group relative min-h-[300px] min-w-0 overflow-hidden rounded-xl sm:min-h-[340px] lg:min-h-[380px]">

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

              <Link to="/events/scholarship-result" className="mt-3 flex items-center gap-1 text-[12px] font-semibold text-white sm:text-[13px] md:text-[14px]">
                Read More
                <FaArrowRight className="text-[#ff5b00]" />
              </Link>

            </div>

          </article>

          {/* event cards */}
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">

            {events.map((event, index) => (
              <article key={index} className="min-w-0 rounded-xl border border-[#b8c1d4] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5">

                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400 sm:text-[12px] md:text-[13px]">
                  {event.date}
                </p>

                <h3 className="mt-2 text-[16px] font-bold leading-snug text-[#18233b] sm:text-[17px] md:text-[18px]">
                  {event.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-[12px] leading-5 text-gray-500 sm:text-[13px] md:text-[14px]">
                  {event.description}
                </p>

                <Link to={`/events/${event.slug}`} className="mt-3 flex items-center gap-1 text-[12px] font-semibold text-[#ff5b00] sm:text-[13px] md:text-[14px]">
                  Read More
                  <FaArrowRight />
                </Link>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default StudyAtGni;