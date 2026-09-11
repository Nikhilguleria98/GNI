import { FaMapMarkerAlt, FaUsers, FaStar, FaRegStar } from "react-icons/fa";

const WhyChooseUs = () => {
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
    <section className="w-full bg-[#f4f7ff] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:gap-14 lg:px-10">

        {/* content */}
        <div className="w-full lg:w-1/2">

          {/* heading */}
          <div className="mb-3 flex items-center gap-2">
            <p className="text-[12px] font-bold tracking-[0.18em] text-[#ff6b35] sm:text-[13px] lg:text-[14px]">
              WHY CHOOSE US
            </p>
          </div>

          <h2 className="max-w-xl text-[30px] font-bold leading-[1.15] text-[#18233b] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
            Your Trusted Partner for{" "}
            <span className="text-[#ff6b35]">
              Digital Success
            </span>
          </h2>

          {/* description */}
          <p className="mt-5 max-w-xl text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 md:text-[17px] lg:text-[18px] lg:leading-7">
            At our company, we combine innovative technology, an experienced
            team, and a client-first approach to deliver exceptional digital
            solutions. From design to development, we focus on creating
            impactful solutions that help your business grow.
          </p>

          {/* stats */}
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-7 sm:mt-10 sm:gap-x-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div key={index} className="flex items-center gap-3">

                  {/* icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[24px] text-[#ff6b35]">
                    <Icon />
                  </div>

                  {/* number & label */}
                  <div>
                    <h3 className="text-[20px] font-bold text-[#18233b] sm:text-[22px] lg:text-[24px]">
                      {stat.value}
                    </h3>

                    <p className="mt-1 max-w-[130px] text-[10px] font-semibold leading-[1.3] tracking-wide text-gray-500 sm:text-[11px] lg:text-[12px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* image */}
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-xl">
            <img src="/choose.png" alt="Our company building" className="h-[280px] w-full object-cover sm:h-[350px] lg:h-[370px]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;