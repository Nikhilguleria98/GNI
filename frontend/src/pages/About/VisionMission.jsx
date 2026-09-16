import { useState } from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

const philosophyPoints = [
  {
    title: "Academic Excellence",
    description:
      "Deliver quality education through innovative teaching methods, industry-oriented curriculum, and continuous academic improvement.",
  },
  {
    title: "Student Empowerment",
    description:
      "Equip students with technical expertise, leadership qualities, and critical thinking skills to excel in their chosen careers.",
  },
  {
    title: "Industry & Innovation",
    description:
      "Promote research, entrepreneurship, innovation, and strong industry collaborations to prepare students for global opportunities.",
  },
  {
    title: "Ethical & Social Responsibility",
    description:
      "Develop socially responsible professionals who uphold integrity, embrace diversity, and contribute positively to society and sustainable development.",
  },
];

const missionPoints = [
  {
    title: "Excellence in Education",
    description:
      "To be recognized as a premier institution delivering world-class education, innovation, and academic excellence.",
  },
  {
    title: "Future-Ready Leaders",
    description:
      "To nurture creative thinkers, skilled professionals, and ethical leaders equipped to drive technological and societal transformation.",
  },
  {
    title: "Global Competence",
    description:
      "To create graduates with global perspectives, research capabilities, and industry-ready skills that meet international standards.",
  },
  {
    title: "Sustainable Growth",
    description:
      "To foster a culture of continuous learning and innovation that benefits students, industries, and society.",
  },
];

const VisionMissionSection = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);
  const [activeMission, setActiveMission] = useState(0);

  return (
    <section className="w-full bg-[#edf3ff]">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-7 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">

        {/* header */}
        <div className="text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ff5b00] sm:text-[13px] md:text-[14px]">
            Vision &amp; Direction
          </p>

          <h2 className="mt-2 text-[30px] font-extrabold leading-[1.15] text-[#111827] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
            Our Philosophy
          </h2>
        </div>

        {/* intro */}
        <p className="mx-auto mt-6 max-w-5xl text-center text-[14px] font-medium leading-6 text-[#202020] sm:mt-7 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
          At Guru Nanak Institutions (GNI), we believe education is the
          foundation of innovation, leadership, and lifelong success. Our
          philosophy is to create a transformative learning environment where
          knowledge, values, and practical skills come together to shape
          confident professionals and responsible citizens.
        </p>

        {/* mission */}
        <div className="mt-10 grid items-center gap-8 sm:mt-12 sm:grid-cols-[170px_1fr] sm:gap-8 md:mt-14 md:grid-cols-[190px_1fr] md:gap-10 lg:mt-16 lg:grid-cols-[210px_1fr] lg:gap-12">

          {/* icon */}
          <div className="flex flex-col items-center justify-center">
            <div className="m:h-[115px] flex h-[105px] w-[105px] items-center justify-center rounded-full border-[3px] border-[#ff5b00] transition-transform duration-500 hover:scale-105 sm:w-[115px] md:h-[125px] md:w-[125px]">
              <FaBullseye className="text-[62px] text-[#ff5b00] sm:text-[70px] md:text-[76px]" />
            </div>

            <h3 className="mt-4 text-[24px] font-extrabold text-[#ff5b00] sm:text-[27px] md:text-[30px]">
              MISSION
            </h3>
          </div>

          {/* points */}
          <div className="relative">
            <div className="absolute bottom-2 left-[9px] top-2 w-[2px] bg-[#ffb38d] sm:left-[10px]">
              <div
                className="absolute left-0 top-0 w-full rounded-full bg-[#ff5b00] transition-all duration-500 ease-out"
                style={{
                  height: `${(activePhilosophy / (philosophyPoints.length - 1)) * 100}%`,
                }}
              />
            </div>

            <div className="relative space-y-5 sm:space-y-6">
              {philosophyPoints.map((item, index) => {
                const isActive = activePhilosophy === index;

                return (
                  <div key={item.title} className="relative">
                    <button type="button" onClick={() => setActivePhilosophy(index)} aria-label={`Select ${item.title}`} className="group flex w-full items-start gap-4 text-left sm:gap-5">
                      <span className={`relative z-10 flex h-[21px] w-[21px] shrink-0 items-center justify-center text-[10px] font-bold text-white transition-all duration-300 sm:h-[23px] sm:w-[23px] sm:text-[11px] ${isActive ? "scale-110 bg-[#ff5b00] shadow-[0_0_0_3px_rgba(255,91,0,0.15)]" : "bg-[#ff7a26]"}`}>
                        {index + 1}
                      </span>

                      <div className="flex-1">
                        <span className={`block text-[15px] font-bold leading-tight transition-colors duration-300 sm:text-[16px] md:text-[17px] ${isActive ? "text-[#ff5b00]" : "text-[#202020] group-hover:text-[#ff5b00]"}`}>
                          {item.title}
                        </span>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "mt-1.5 max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
                          <p className="max-w-3xl text-[13px] leading-6 text-gray-600 sm:text-[14px] sm:leading-7 md:text-[15px] md:leading-7">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* vision */}
        <div className="mt-14 grid items-center gap-8 pt-12 sm:mt-16 sm:grid-cols-[1fr_170px] sm:gap-8 sm:pt-14 md:mt-18 md:grid-cols-[1fr_190px] md:gap-10 md:pt-16 lg:mt-20 lg:grid-cols-[1fr_210px] lg:gap-12 lg:pt-18">

          {/* points */}
          <div className="relative order-2 sm:order-1">
            <div className="absolute bottom-2 left-[9px] top-2 w-[2px] bg-[#ffb38d] sm:left-[10px]">
              <div className="absolute left-0 top-0 w-full rounded-full bg-[#ff5b00] transition-all duration-500 ease-out" style={{ height: `${(activeMission / (missionPoints.length - 1)) * 100}%` }} />
            </div>

            <div className="relative space-y-5 sm:space-y-6">
              {missionPoints.map((item, index) => {
                const isActive = activeMission === index;

                return (
                  <div key={item.title} className="relative">
                    <button type="button" onClick={() => setActiveMission(index)} aria-label={`Select ${item.title}`} className="group flex w-full items-start gap-4 text-left sm:gap-5">
                      <span className={`relative z-10 flex h-[21px] w-[21px] shrink-0 items-center justify-center text-[10px] font-bold text-white transition-all duration-300 sm:h-[23px] sm:w-[23px] sm:text-[11px] ${isActive ? "scale-110 bg-[#ff5b00] shadow-[0_0_0_3px_rgba(255,91,0,0.15)]" : "bg-[#ff7a26]"}`}>
                        {index + 1}
                      </span>

                      <div className="flex-1">
                        <span className={`block text-[15px] font-bold leading-tight transition-colors duration-300 sm:text-[16px] md:text-[17px] ${isActive ? "text-[#ff5b00]" : "text-[#202020] group-hover:text-[#ff5b00]"}`}>
                          {item.title}
                        </span>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "mt-1.5 max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
                          <p className="max-w-3xl text-[13px] leading-6 text-gray-600 sm:text-[14px] sm:leading-7 md:text-[15px] md:leading-7">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* icon */}
          <div className="order-1 flex flex-col items-center justify-center sm:order-2">
            <div className="flex h-[105px] w-[105px] items-center justify-center sm:h-[115px] sm:w-[115px] md:h-[125px] md:w-[125px]">
              <FaLightbulb className="text-[76px] text-[#ff5b00] transition-transform duration-500 hover:scale-110 sm:text-[86px] md:text-[96px]" />
            </div>

            <h3 className="mt-3 text-[24px] font-extrabold text-[#ff5b00] sm:text-[27px] md:text-[30px]">
              VISION
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;