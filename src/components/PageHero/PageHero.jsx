import { FiCheckCircle, FiArrowRight, FiUsers, FiCalendar, FiMapPin, FiMail } from "react-icons/fi";

import { FaCheck, FaArrowRight } from "react-icons/fa";

const PageHero = ({
  variant,
  image,
  alt = "",
  badge,
  title,
  titleHighlight,
  subtitle,
  description,
  secondaryDescription,
  features = [],
  contactInfo = [],
  buttonText,
  onButtonClick,
}) => {

  // home hero
  if (variant === "home") {
    return (
      <section className="relative min-h-[600px] w-full overflow-hidden sm:min-h-[650px] lg:min-h-[600px]">

        {/* background image */}
        <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover object-center" />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f35b0a]/95 via-[#f35b0a]/60 to-transparent" />

        {/* content */}
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1440px] items-center px-6 py-16 sm:min-h-[650px] sm:px-10 lg:min-h-[600px] lg:px-20 xl:px-[144px]">
          <div className="w-full max-w-[800px]">

            {/* admission badge */}
            <div className="mb-6 inline-flex items-center rounded-md bg-[#df2929] px-4 py-2.5 sm:mb-7 sm:px-5 sm:py-3">
              <span className="text-[12px] font-bold text-white sm:text-[13px] lg:text-[14px]">
                {badge}
              </span>
            </div>

            {/* heading */}
            <h1 className="mb-5 max-w-[800px] text-[30px] font-bold leading-[1.15] tracking-tight text-white sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
              {title}
            </h1>

            {/* description */}
            <p className="mb-8 max-w-[610px] text-[14px] font-normal leading-6 text-white sm:text-[15px] sm:leading-7 md:text-[17px] lg:text-[18px] lg:leading-7">
              {description}
            </p>

            {/* features */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <FiCheckCircle className="h-[18px] w-[18px] text-green-400 sm:h-5 sm:w-5" strokeWidth={2} aria-hidden="true" />

                  <span className="text-[13px] text-white sm:text-[14px] lg:text-[15px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* button */}
            <button type="button" onClick={onButtonClick} className="group inline-flex h-11 min-w-[170px] items-center justify-center gap-4 rounded-md bg-[#f4510b] px-6 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#df4607] hover:shadow-lg sm:h-12 sm:min-w-[180px] sm:text-[15px] md:h-14 md:min-w-[193px] md:px-7 md:text-[17px]">
              <span>{buttonText}</span>

              <FiArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6" strokeWidth={2} aria-hidden="true" />
            </button>

          </div>
        </div>
      </section>
    );
  }

  // about hero
  if (variant === "about") {
    return (
      <section className="relative w-full overflow-hidden min-h-[360px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px] xl:min-h-[570px]">

        {/* background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${image}')` }} />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* content */}
        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center px-5 py-10 sm:min-h-[420px] sm:px-8 sm:py-12 md:min-h-[480px] md:px-10 lg:min-h-[540px] lg:px-12 xl:min-h-[570px]">

          <div className="group max-w-[520px] bg-black/25 px-4 py-4 backdrop-blur-[1px] sm:max-w-[580px] sm:px-5 sm:py-5 md:max-w-[650px] md:px-6 md:py-6 lg:max-w-[700px] lg:px-7 lg:py-6">

            {/* heading */}
            <h1 className="text-[30px] font-extrabold leading-[1.15] text-white sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
              {title}{" "}
              <span className="text-[#ff6b35]">
                {titleHighlight}
              </span>
            </h1>

            <div className="mt-3 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#ff6b35] transition-transform duration-700 ease-out group-hover:scale-x-100 sm:mt-4" />

            {/* subtitle */}
            <h2 className="mt-3 text-[14px] font-bold leading-snug text-[#ff6b35] sm:mt-4 sm:text-[15px] md:text-[17px] lg:text-[18px]">
              {subtitle}
            </h2>

            {/* description */}
            <p className="mt-3 max-w-[620px] text-[14px] leading-6 text-white sm:mt-4 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
              {description}
            </p>

            {/* bottom text */}
            <p className="mt-2 text-[12px] leading-5 text-white/90 sm:text-[13px] sm:leading-6 md:text-[14px] lg:text-[15px] lg:leading-6">
              {secondaryDescription}
            </p>

          </div>
        </div>
      </section>
    );
  }

  // campus hero
  if (variant === "campus") {
    return (
      <section className="relative min-h-[420px] overflow-hidden sm:min-h-[500px] lg:min-h-[570px]">

        {/* background image */}
        <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700/95 via-orange-600/70 to-transparent" />

        {/* content */}
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-5 py-16 sm:min-h-[500px] sm:px-8 sm:py-20 lg:min-h-[570px] lg:px-12">
          <div className="max-w-3xl text-white">

            {/* admission badge */}
            <span className="inline-flex rounded-md bg-red-600 px-3 py-2 text-[14px] font-semibold tracking-wide shadow-sm sm:px-4 sm:text-[15px] md:text-[16px]">
              {badge}
            </span>

            {/* heading */}
            <h1 className="mt-5 max-w-3xl text-[30px] font-extrabold leading-[1.15] tracking-tight sm:mt-6 sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
              {title}
            </h1>

            {/* description */}
            <p className="mt-5 max-w-2xl text-[14px] leading-6 text-white/90 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
              {description}
            </p>

            {/* campus highlights */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-[14px] font-medium text-white sm:text-[15px] md:text-[17px]">

              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="shrink-0 text-emerald-300" size={16} aria-hidden="true" />

                <span>{features[0]}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <FiUsers className="shrink-0 text-emerald-300" size={16} aria-hidden="true" />

                <span>{features[1]}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <FiCalendar className="shrink-0 text-emerald-300" size={16} aria-hidden="true" />

                <span>{features[2]}</span>
              </div>

            </div>

            {/* explore button */}
            <button type="button" onClick={onButtonClick} className="mt-7 inline-flex items-center gap-2 rounded-md bg-orange-600 px-6 py-3 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-orange-900 sm:px-7 sm:py-3.5 sm:text-[15px] md:text-[16px]">
              {buttonText}

              <FiArrowRight size={16} aria-hidden="true" />
            </button>

          </div>
        </div>
      </section>
    );
  }

  // contact hero
  if (variant === "contact") {
    return (
      <section className="relative min-h-[330px] overflow-hidden sm:min-h-[390px] lg:min-h-[430px]">

        {/* background image */}
        <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* content */}
        <div className="relative z-10 mx-auto flex min-h-[330px] max-w-7xl items-center px-5 py-12 sm:min-h-[390px] sm:px-8 sm:py-16 lg:min-h-[430px] lg:px-12">

          <div className="max-w-xl text-white">

            {/* heading */}
            <div className="group w-fit">

              <h1 className="text-[30px] font-bold leading-[1.15] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
                {title}{" "}
                <span className="text-orange-500">
                  {titleHighlight}
                </span>
                <br />
                Institutions, Mullana
              </h1>

              <div className="mt-3 h-[3px] w-full overflow-hidden sm:mt-4">
                <div className="h-full w-0 bg-orange-500 transition-all duration-700 ease-in-out group-hover:w-full" />
              </div>

            </div>

            {/* description */}
            <p className="mt-4 max-w-lg text-[14px] leading-6 text-white/90 sm:mt-5 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
              {description}
            </p>

            <p className="mt-3 max-w-lg text-[12px] leading-5 text-white/80 sm:text-[13px] sm:leading-6 md:text-[14px] lg:text-[15px] lg:leading-6">
              {secondaryDescription}
            </p>

            {/* contact information */}
            <div className="mt-5 space-y-2 sm:mt-6">

              <div className="flex items-center gap-2">
                <FiMapPin className="shrink-0 text-orange-500" size={17} aria-hidden="true" />

                <p className="text-[12px] leading-5 text-white/90 sm:text-[13px] sm:leading-6 md:text-[14px] lg:text-[15px]">
                  {contactInfo[0]}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FiMail className="shrink-0 text-orange-500" size={17} aria-hidden="true" />

                <p className="text-[12px] leading-5 text-white/90 sm:text-[13px] sm:leading-6 md:text-[14px] lg:text-[15px]">
                  {contactInfo[1]}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    );
  }

  //  placement hero
  if (variant === "placement") {
    return (
      <section className="relative min-h-[520px] w-full overflow-hidden sm:min-h-[580px] lg:min-h-[620px]">

        {/* background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${image}")` }} />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-orange-500/65 to-black/20" />

        {/* content */}
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-16 sm:min-h-[580px] sm:px-8 md:min-h-[600px] md:px-10 lg:min-h-[620px] lg:px-12">

          <div className="max-w-2xl text-white">

            {/* badge */}
            <span className="mb-5 inline-block rounded-sm bg-white/15 px-3 py-1.5 text-[14px] font-semibold uppercase tracking-wide backdrop-blur-sm sm:text-[15px] md:text-[17px] lg:text-[18px]">
              {badge}
            </span>

            {/* title */}
            <h1 className="text-[30px] font-bold leading-[1.15] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
              {title}
            </h1>

            {/* description */}
            <p className="mt-5 max-w-xl text-[14px] leading-6 text-white/95 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
              {description}
            </p>

            {/* bottom info */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] font-medium sm:text-[13px] md:text-[14px]">

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/70">
                  <FaCheck className="h-2.5 w-2.5" />
                </span>

                <span>{features[0]}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/70">
                  <FaCheck className="h-2.5 w-2.5" />
                </span>

                <span>{features[1]}</span>
              </div>

            </div>

            {/* button */}
            <button type="button" onClick={onButtonClick} className="mt-8 inline-flex items-center rounded-md bg-orange-500 px-6 py-3 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl active:scale-95 sm:px-7 sm:py-3.5 sm:text-[15px] md:text-[16px]" >
              {buttonText}

              <FaArrowRight className="ml-2 h-3 w-3" />
            </button>

          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default PageHero;