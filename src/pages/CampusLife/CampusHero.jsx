import {
  FiCheckCircle,
  FiUsers,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";

export default function CampusHero() {
  const handleExploreCampus = () => {
    const campusContent = document.getElementById("campus-content");

    if (campusContent) {
      campusContent.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative min-h-[420px] overflow-hidden sm:min-h-[500px] lg:min-h-[570px]">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2000&q=85"
        alt="Guru Nanak Institutions Campus"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-700/95 via-orange-600/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-5 py-16 sm:min-h-[500px] sm:px-8 sm:py-20 lg:min-h-[570px] lg:px-12">
        <div className="max-w-3xl text-white">

          {/* Admission Badge */}
          <span className="inline-flex rounded-md bg-red-600 px-3 py-2 text-[14px] font-semibold tracking-wide shadow-sm sm:px-4 sm:text-[15px] md:text-[16px]">
            Admissions Open for 2026-2027
          </span>

          {/* Heading */}
          <h1 className="mt-5 max-w-3xl text-[30px] font-extrabold leading-[1.15] tracking-tight sm:mt-6 sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
            Campus Life at Guru Nanak Institutions
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-[14px] leading-6 text-white/90 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
            Experience a vibrant campus where academics, innovation, culture,
            sports, and student life come together to create an inspiring
            learning environment.
          </p>

          {/* Campus Highlights */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-[14px] font-medium text-white sm:text-[15px] md:text-[17px]">

            {/* Modern Campus */}
            <div className="flex items-center gap-1.5">
              <FiCheckCircle
                className="shrink-0 text-emerald-300"
                size={16}
                aria-hidden="true"
              />

              <span>Modern Campus</span>
            </div>

            {/* Student Clubs */}
            <div className="flex items-center gap-1.5">
              <FiUsers
                className="shrink-0 text-emerald-300"
                size={16}
                aria-hidden="true"
              />

              <span>Student Clubs</span>
            </div>

            {/* Sports & Events */}
            <div className="flex items-center gap-1.5">
              <FiCalendar
                className="shrink-0 text-emerald-300"
                size={16}
                aria-hidden="true"
              />

              <span>Sports &amp; Events</span>
            </div>
          </div>

          {/* Explore Campus Button */}
          <button
            type="button"
            onClick={handleExploreCampus}
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-orange-600 px-6 py-3 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-orange-900 sm:px-7 sm:py-3.5 sm:text-[15px] md:text-[16px]"
          >
            Explore Campus

            <FiArrowRight size={16} aria-hidden="true" />
          </button>

        </div>
      </div>
    </section>
  );
}