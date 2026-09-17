import { FaArrowRight } from "react-icons/fa";

const ProgramRecruiters = ({ data }) => {
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
    <section className="w-full bg-white py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#ff5b00] sm:text-sm md:text-base">
            Our Industry Connections
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#111827] sm:text-4xl md:text-5xl">
            Industry-Top Recruiters
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7 md:text-lg">
            Our students are recruited by leading global companies, reflecting
            the quality of our education, training and industry-focused
            learning.
          </p>
        </div>

        {/* Recruiters Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {data.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="
                group
                flex
                min-h-[180px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-4
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-orange-300
                hover:shadow-md
              "
            >
              {/* Logo */}
              <div
                className="
                  mb-4
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-gray-50
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-orange-50

                  sm:h-24
                  sm:w-24
                "
              >
                <img
                  src={getCompanyImage(company)}
                  alt={`${company} logo`}
                  className="
                    h-14
                    w-14
                    object-contain

                    sm:h-16
                    sm:w-16
                    md:h-18
                    md:w-18
                  "
                />
              </div>

              {/* Company Name */}
              <p className="text-sm font-bold text-gray-700 transition-colors duration-300 group-hover:text-blue-900 sm:text-base">
                {company}
              </p>

              {/* Subtitle */}
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:text-xs">
                Industry Partner
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-orange-500
              px-5
              py-3
              text-sm
              font-bold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:bg-orange-600
              hover:shadow-md
              active:scale-95

              sm:px-7
              sm:text-base
            "
          >
            View All Recruiters
            <FaArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProgramRecruiters;