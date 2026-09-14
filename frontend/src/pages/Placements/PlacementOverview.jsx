const PlacementOverview = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12">

        {/* heading */}
        <div className="max-w-4xl">
          <h2 className="text-[30px] font-extrabold leading-[1.15] text-[#111827] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
            Placements Overview
          </h2>

          <p className="mt-3 max-w-4xl text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
            At Guru Nanak Institutions (GNI), we prepare students for successful
            careers through industry-oriented training, skill development,
            internships, and campus recruitment.
          </p>

          <p className="mt-3 max-w-4xl text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
            Our Training &amp; Placement Cell bridges the gap between academic
            learning and industry expectations by providing technical training,
            aptitude development, communication skills, and career guidance.
          </p>
        </div>

        {/* training & placement cell */}
        <div className="mt-7 border border-gray-200 bg-gray-50 px-5 py-5 sm:mt-8 sm:px-7 sm:py-6 md:mt-9 md:px-8 md:py-7 lg:mt-10 lg:px-8">
          <h3 className="text-[16px] font-bold leading-tight text-gray-900 sm:text-[17px] md:text-[18px] lg:text-[19px]">
            Training &amp; Placement Cell
          </h3>

          <p className="mt-2 text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
            The Training &amp; Placement Cell at GNI works closely with leading
            companies to provide training, career guidance, internships, and
            placement opportunities. We focus on developing technical,
            practical, and communication skills to help students achieve
            successful careers.
          </p>

          <p className="mt-3 text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7">
            Our objective is to make every student a 100% employable asset
            through continuous skill development, real-world exposure, and
            structured placement support - aligned with our vision of
            "One Person One Job".
          </p>
        </div>

        {/* image  */}
        <div className="mt-3 overflow-hidden border border-gray-200 sm:mt-4">

          <div className="relative h-[220px] w-full sm:h-[300px] md:h-[360px] lg:h-[420px]">
            <img src="/placement1.png" alt="Training and Placement Cell" className="h-full w-full object-cover object-center" />
          </div>

          {/* image bottom labels  */}
          <div className="flex min-h-[38px] items-center justify-between gap-4 bg-white px-3 sm:min-h-[42px] sm:px-4">

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500 sm:text-[11px] md:text-[12px]">
              Training &amp; Placement Cell
            </span>

            <span className="text-right text-[10px] font-bold uppercase tracking-[0.16em] text-orange-500 sm:text-[11px] md:text-[12px]">
              Industry-Ready Outcomes
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlacementOverview;