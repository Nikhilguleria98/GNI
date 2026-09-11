import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiFacebook, FiLinkedin, FiMail, FiUser } from "react-icons/fi";

const ManagementSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const members = [
    {
      id: 1,
      name: "Dr. Shubhkaman Rathore",
      cardName: "Dr. Shubhkaman",
      role: "Principal",
      image: "/images/management/shubhkaman-rathore.jpg",
      description: "Dr. Shubhkaman Rathore is a dedicated academic leader committed to fostering excellence in education, innovation, and holistic student development. With a strong focus on academic quality, research, and industry-oriented learning, she strives to create an environment where students are empowered with the knowledge, skills, and values needed to excel in their careers and contribute meaningfully to society.",
      email: "principal@example.com",
      facebook: "#",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Ms. Kajal",
      cardName: "Ms. Kajal",
      role: "Asst. Professor",
      image: "/images/management/kajal.jpg",
      description: "Ms. Kajal is an enthusiastic academic professional focused on creating an engaging and student-centric learning environment. Her approach combines conceptual clarity, practical learning, and continuous academic development.",
      email: "kajal@example.com",
      facebook: "#",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Ms. Sakshi",
      cardName: "Ms. Sakshi",
      role: "Asst. Professor",
      image: "/images/management/sakshi.jpg",
      description: "Ms. Sakshi is committed to academic excellence and student development. She encourages students to explore new ideas, develop confidence, and build the professional skills required for a successful future.",
      email: "sakshi@example.com",
      facebook: "#",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Mr. Sanjay",
      cardName: "Mr. Sanjay",
      role: "Asst. Professor",
      image: "/images/management/sanjay.jpg",
      description: "Mr. Sanjay brings a practical and innovative approach to teaching. His focus is on developing technical understanding, problem-solving abilities, and industry-relevant skills among students.",
      email: "sanjay@example.com",
      facebook: "#",
      linkedin: "#"
    },
    {
      id: 5,
      name: "Ms. Pooja",
      cardName: "Ms. Pooja",
      role: "Asst. Professor",
      image: "/images/management/pooja.jpg",
      description: "Ms. Pooja is passionate about mentoring students and supporting their academic journey. She focuses on creating an inclusive environment where students can learn, innovate, and grow with confidence.",
      email: "pooja@example.com",
      facebook: "#",
      linkedin: "#"
    }
  ];

  const activeMember = members[activeIndex];

  const previousMember = () => {
    setActiveIndex((prev) =>
      prev === 0 ? members.length - 1 : prev - 1
    );
  };

  const nextMember = () => {
    setActiveIndex((prev) =>
      prev === members.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageError = (id) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleSocialClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-[#050505] text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-7 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">

        {/* header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.3em] text-[#ff5b00] sm:text-[13px] md:text-[14px]">
            Leadership
          </p>

          <h2 className="text-[30px] font-extrabold leading-tight text-white sm:text-[34px] md:text-[38px] lg:text-[42px]">
            From the Desk of Management
          </h2>

          <p className="mt-4 max-w-3xl text-[14px] leading-[1.65] text-[#a9a9a9] sm:mt-5 sm:text-[15px] sm:leading-[1.7] md:text-[16px] md:leading-[1.75] lg:text-[17px] lg:leading-[1.8]">
            Leadership perspectives that shape institutional direction,
            student outcomes, and academic excellence.
          </p>
        </div>

        {/* profile */}
        <div className="overflow-hidden border border-white/10 bg-[#080808]">
          <div className="grid lg:grid-cols-[32%_68%] xl:grid-cols-[33%_67%]">

            {/* image */}
            <div className="relative h-[250px] bg-[#bdbdbd] sm:h-[280px] md:h-[310px] lg:h-[330px] xl:h-[340px]">
              {!imageErrors[activeMember.id] ? (
                <img src={activeMember.image} alt={activeMember.name} className="h-full w-full object-cover object-top" onError={() => handleImageError(activeMember.id)} />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#d8d8d8] to-[#9e9e9e]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 text-[#777] sm:h-24 sm:w-24">
                    <FiUser className="text-4xl sm:text-5xl" />
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                <span className="border border-white/20 bg-black/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md sm:text-[11px]">
                  Leadership Profile
                </span>
              </div>
            </div>

            {/* content */}
            <div className="relative flex min-h-[320px] flex-col justify-between p-5 sm:min-h-[340px] sm:p-7 md:p-8 lg:min-h-[330px] lg:p-9 xl:p-10">

              {/* arrows */}
              <div className="absolute right-4 top-4 flex gap-1.5 sm:right-5 sm:top-5">
                <button type="button" onClick={previousMember} aria-label="Previous profile" className="flex h-8 w-8 items-center justify-center border border-white/15 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#ff5b00] hover:bg-[#ff5b00] focus:outline-none focus:ring-2 focus:ring-[#ff5b00]/40 sm:h-9 sm:w-9">
                  <FiArrowLeft className="text-sm" />
                </button>

                <button type="button" onClick={nextMember} aria-label="Next profile" className="flex h-8 w-8 items-center justify-center border border-white/15 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#ff5b00] hover:bg-[#ff5b00] focus:outline-none focus:ring-2 focus:ring-[#ff5b00]/40 sm:h-9 sm:w-9">
                  <FiArrowRight className="text-sm" />
                </button>
              </div>

              {/* text */}
              <div className="pr-16 sm:pr-20">
                <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#ff5b00] sm:text-[13px] md:text-[14px]">
                  {activeMember.role}
                </p>

                <h3 className="group relative mt-2 inline-block cursor-default text-[22px] font-extrabold leading-tight text-white sm:text-[25px] md:text-[28px] lg:text-[30px]">
                  {activeMember.name}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#ff5b00] transition-all duration-300 ease-out group-hover:w-full" />
                </h3>

                <p className="mt-5 max-w-3xl text-[14px] leading-[1.65] text-[#bdbdbd] sm:mt-5 sm:text-[15px] sm:leading-[1.7] md:text-[16px] md:leading-[1.75]">
                  {activeMember.description}
                </p>
              </div>

              {/* bottom */}
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 sm:mt-8 sm:pt-5">

                {/* counter */}
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff5b00]" />

                  <span className="text-[11px] font-medium text-[#888] sm:text-[12px] md:text-[13px]">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(members.length).padStart(2, "0")}
                  </span>
                </div>

                {/* social icons */}
                <div className="flex items-center gap-1.5">
                  <button type="button" onClick={handleSocialClick} aria-label={`Email ${activeMember.name}`} className="flex h-8 w-8 cursor-default items-center justify-center border border-white/10 text-[#999] transition-all duration-300 hover:border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white">
                    <FiMail className="text-sm" />
                  </button>

                  <button type="button" onClick={handleSocialClick} aria-label={`Facebook ${activeMember.name}`} className="flex h-8 w-8 cursor-default items-center justify-center border border-white/10 text-[#999] transition-all duration-300 hover:border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white">
                    <FiFacebook className="text-sm" />
                  </button>

                  <button type="button" onClick={handleSocialClick} aria-label={`LinkedIn ${activeMember.name}`} className="flex h-8 w-8 cursor-default items-center justify-center border border-white/10 text-[#999] transition-all duration-300 hover:border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white">
                    <FiLinkedin className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* member cards */}
        <div className="mt-2 sm:mt-3">
          <div className="flex gap-1.5 overflow-x-auto pb-2 sm:gap-2 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {members.map((member, index) => {
              const isActive = activeIndex === index;

              return (
                <button key={member.id} type="button" onClick={() => setActiveIndex(index)} aria-label={`Open ${member.name} profile`} aria-pressed={isActive} className={`group relative min-w-[125px] shrink-0 overflow-hidden border text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff5b00]/30 sm:min-w-[145px] lg:min-w-0 ${isActive ? "border-[#ff5b00]/60 bg-[#101010]" : "border-white/10 bg-[#090909] hover:border-white/25"}`}>

                  {/* image */}
                  <div className="relative h-[110px] overflow-hidden bg-[#bdbdbd] sm:h-[125px] md:h-[135px]">
                    {!imageErrors[member.id] ? (
                      <img src={member.image} alt={member.name} className={`h-full w-full object-cover object-top transition-transform duration-500 ${isActive ? "scale-105" : "group-hover:scale-105"}`} onError={() => handleImageError(member.id)} />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#d8d8d8] to-[#a0a0a0]">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-[#777] sm:h-16 sm:w-16">
                          <FiUser className="text-3xl" />
                        </div>
                      </div>
                    )}

                    <div className={`absolute inset-0 transition-all duration-300 ${isActive ? "bg-[#ff5b00]/10" : "bg-black/20 group-hover:bg-black/5"}`} />
                  </div>

                  {/* text */}
                  <div className="p-2.5 sm:p-3">
                    <h4 className={`text-[12px] font-bold leading-snug transition-colors duration-300 sm:text-[13px] md:text-[14px] ${isActive ? "text-white" : "text-[#d0d0d0] group-hover:text-white"}`}>
                      {member.cardName}
                    </h4>

                    <p className="mt-1 text-[10px] font-medium text-[#777] sm:text-[11px] md:text-[12px]">
                      {member.role}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* mobile indicators */}
        <div className="mt-3 flex justify-center gap-1.5 lg:hidden">
          {members.map((member, index) => (
            <button key={member.id} type="button" onClick={() => setActiveIndex(index)} aria-label={`Select ${member.name}`} className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? "w-6 bg-[#ff5b00]" : "w-1.5 bg-white/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;