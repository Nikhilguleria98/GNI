const ApplyNowSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-12 sm:py-14 md:py-16 lg:py-20"
      style={{ backgroundImage: "url('/banner.png')" }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[170px] max-w-4xl flex-col items-center justify-center px-5 text-center sm:min-h-[190px] sm:px-8 md:min-h-[210px] lg:min-h-[230px] lg:px-10">

        {/* Heading */}
        <h2 className="max-w-[850px] text-[30px] font-bold leading-[1.15] text-white sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
          Your Future with Great Teachers
          <br />
          Meet Them on Dolan
        </h2>

        {/* Description */}
        <p className="mt-2 max-w-[600px] text-[14px] font-normal leading-6 text-white/90 sm:mt-2 sm:text-[15px] sm:leading-7 md:text-[17px] lg:text-[18px] lg:leading-7">
          Learn from expert faculty dedicated to academic excellence.
        </p>

        {/* Button */}
        <button
          type="button"
          className="mt-4 min-w-[115px] rounded-[2px] bg-[#ff6b00] px-6 py-2 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#e85f00] hover:shadow-lg sm:mt-5 sm:min-w-[125px] sm:px-7 sm:py-2.5 sm:text-[15px] md:text-[17px] lg:min-w-[135px] lg:text-[17px]"
        >
          Apply Now
        </button>

      </div>
    </section>
  );
};

export default ApplyNowSection;