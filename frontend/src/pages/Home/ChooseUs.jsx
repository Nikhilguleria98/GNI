import { FaMapMarkerAlt, FaUsers, FaStar, FaRegStar } from "react-icons/fa";

const ChooseUs = () => {
  const stats = [
    {
      value: "100%",
      label: "PROJECTS DELIVERED TO CLIENTS",
      icon: FaMapMarkerAlt
    },
    {
      value: "180+",
      label: "SATISFIED HAPPY CLIENTS",
      icon: FaUsers
    },
    {
      value: "50+",
      label: "SUCCESSFUL PROJECTS",
      icon: FaStar
    },
    {
      value: "99%",
      label: "CLIENT SATISFACTION",
      icon: FaRegStar
    }
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f4f7ff] py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:px-8 lg:gap-14 lg:px-10">

        {/* content */}
        <div className="min-w-0 w-full">

          {/* heading */}
          <div className="mb-3 flex items-center gap-2">
            <p className="text-[13px] font-bold tracking-[0.15em] sm:text-[15px] sm:tracking-[0.18em] lg:text-[18px]">
              WHY CHOOSE GNI ?
            </p>
          </div>

          <h2 className="w-full max-w-[650px] text-[14px] font-bold leading-[1.25] text-[#18233b] sm:text-[17px] md:text-[18px] lg:text-[21px] xl:text-[24px]">
            <span className="text-[#ff6b35]">
              Your Gateway to Academic Excellence
              <br />
              &amp; Career Success
            </span>
          </h2>

          {/* description */}
          <p className="mt-4 w-full max-w-xl text-[14px] leading-6 text-gray-600 sm:mt-5 sm:text-[15px] sm:leading-7 md:text-[16px] lg:text-[18px] lg:leading-7">
            At Jindal's Guru Nanak Institutions, Mullana, we empower students
            with quality education, industry-focused learning, experienced
            faculty, and modern infrastructure. Our goal is to nurture future
            leaders through innovation, practical exposure, and career-oriented programs.
          </p>

          {/* stats */}
          <div className="mt-7 grid w-full max-w-xl grid-cols-2 gap-x-3 gap-y-6 sm:mt-9 sm:gap-x-7 sm:gap-y-7">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div key={index} className={`flex min-w-0 flex-col items-center justify-center gap-1 py-3 text-center sm:flex-row sm:items-center sm:justify-start sm:gap-3 sm:text-left ${index < 2 ? "border-b border-gray-200" : ""}`}>

                  {/* icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[#ff6b35] sm:h-10 sm:w-10">
                    <Icon className="h-5 w-5 sm:h-5 sm:w-5" />
                  </div>

                  {/* number & label */}
                  <div className="min-w-0">
                    <h3 className="text-[19px] font-bold leading-none text-[#18233b] sm:text-[22px] lg:text-[24px]">
                      {stat.value}
                    </h3>

                    <p className="mx-auto mt-1 w-full max-w-[85px] break-words text-[8px] font-semibold leading-[1.3] tracking-[0.03em] text-gray-500 sm:mx-0 sm:max-w-[130px] sm:text-[11px] lg:text-[12px]">
                      {stat.label}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* image */}
        <div className="min-w-0 w-full">
          <div className="relative w-full overflow-hidden rounded-xl">
            <img src="/choose.png" alt="Our company building" className="block h-[240px] w-full object-cover sm:h-[300px] md:h-[320px] lg:h-[370px]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChooseUs;