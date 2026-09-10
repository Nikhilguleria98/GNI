const AboutHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[360px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px] xl:min-h-[570px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/contact.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center px-5 py-10 sm:min-h-[420px] sm:px-8 sm:py-12 md:min-h-[480px] md:px-10 lg:min-h-[540px] lg:px-12 xl:min-h-[570px]">

        <div className="group max-w-[520px] bg-black/25 px-4 py-4 backdrop-blur-[1px] sm:max-w-[580px] sm:px-5 sm:py-5 md:max-w-[650px] md:px-6 md:py-6 lg:max-w-[700px] lg:px-7 lg:py-6">

          {/* Heading */}
          <h1 className="text-[30px] font-extrabold leading-[1.15] text-white sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
            About{" "}
            <span className="text-[#ff6b35]">
              Jindal's Guru Nanak
            </span>{" "}
            Institutions, Mullana
          </h1>

          {/* Hover Orange Line */}
          <div className="mt-3 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#ff6b35] transition-transform duration-700 ease-out group-hover:scale-x-100 sm:mt-4" />

          {/* Subtitle */}
          <h2 className="mt-3 text-[14px] font-bold leading-snug text-[#ff6b35] sm:mt-4 sm:text-[15px] md:text-[17px] lg:text-[18px]">
            Inspiring Learning, Shaping Futures
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-[620px] text-[14px] leading-6 text-white sm:mt-4 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
            GNI is a leading educational institution committed to providing
            quality education and developing students into skilled,
            confident and responsible professionals. We believe in creating
            an environment where students can learn, grow and achieve their
            goals.
          </p>

          {/* Bottom Text */}
          <p className="mt-2 text-[12px] leading-5 text-white/90 sm:text-[13px] sm:leading-6 md:text-[14px] lg:text-[15px] lg:leading-6">
            Our programs help students achieve academic excellence,
            professional knowledge and practical experience.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;