import { FaArrowRight } from "react-icons/fa";

const PlacementRecruiters = ({ data }) => {
  const getCompanyImage = (company) => {
    switch (company) {
      case "TCS":
        return "/tcs.png";

      case "Infosys":
        return "/infosys.png";

      case "Wipro":
        return "/wipro.png";

      case "HCL":
        return "/hcl.png";

      case "Chetu":
        return "/chetu.png";

      case "IBM":
        return "/ibm.png";

      case "Bajaj":
        return "/bajaj.png";

      case "HDFC":
        return "/hdfc.png";

      case "Genus":
        return "/genus.png";

      case "EduSkills":
        return "/eduskills.png";

      case "NASSCOM":
        return "/nasscom.png";

      case "Intellipaat":
        return "/intellipaat.png";

      default:
        return "/company.png";
    }
  };

  return (
    <section className="w-full bg-white py-10 font-sans sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-10 lg:px-12">

        {/* heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 md:mb-12">

          <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#ff5b00] sm:text-[14px] sm:tracking-[0.3em] md:text-[16px]">
            Our Industry Connections
          </p>

          <h2 className="text-[25px] font-extrabold leading-[1.15] tracking-tight text-[#111827] sm:text-[34px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
            Industry-Top Recruiters
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-5 text-gray-500 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px]">
            Our students are recruited by leading global companies, reflecting
            the quality of our education, training and industry-focused
            learning.
          </p>
        </div>

        {/* logos */}
        <div className="grid grid-cols-2 overflow-hidden rounded-lg border border-gray-200 bg-white sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

          {data.map((company, index) => (
            <div key={`${company}-${index}`} className="group flex min-h-[170px] items-center justify-center rounded-2xl gap-4 m-2 border border-gray-400 bg-white px-3 py-6 transition-all duration-300 hover:bg-gray-50 sm:min-h-[150px] sm:px-4 sm:py-5 md:min-h-[155px] lg:min-h-[160px]">

              <div className="flex w-full flex-col items-center justify-center text-center">

                {/* image */}
                <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gray-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-50 sm:mb-4 sm:h-24 sm:w-24 md:h-24 md:w-24 lg:h-22 lg:w-22">
                  <img src={getCompanyImage(company)} alt={`${company} logo`} width={140} height={140} className="h-24 w-24 object-contain sm:h-20 sm:w-20 md:h-[82px] md:w-[82px] lg:h-20 lg:w-20" />
                </div>

                {/* company name */}
                <p className="text-[14px] font-bold leading-tight tracking-tight text-gray-700 transition-colors duration-300 group-hover:text-blue-900 sm:text-[15px] md:text-[16px] lg:text-[17px]">
                  {company}
                </p>

                {/* partner text */}
                <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[10px] sm:tracking-[0.16em] md:text-[11px] lg:text-[12px]">
                  Industry Partner
                </span>

              </div>
            </div>
          ))}

        </div>

        {/* button */}
        <div className="mt-6 flex justify-center sm:mt-8 md:mt-9">

          <button type="button" className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-300 hover:bg-orange-600 hover:shadow-md active:scale-95 sm:px-7 sm:py-3 sm:text-[15px] md:text-[16px]">
            View All Recruiters

            <FaArrowRight className="ml-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default PlacementRecruiters;