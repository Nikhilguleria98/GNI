import React, { useState } from "react";
import { studyBenefitsData } from "../../data/studyData";
import { useParams } from "react-router-dom";

const StudyBenefits = () => {
  const { studySlug } = useParams();
  const [activeCard, setActiveCard] = useState(null);

  const benefitsData =
    studyBenefitsData[studySlug] ||
    studyBenefitsData.faculty;

  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-orange-500">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            {benefitsData.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {benefitsData.benefits.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                onClick={() => setActiveCard(index)}
                className={`
                  group relative overflow-hidden
                  rounded-[30px]
                  border bg-white p-8
                  transition-all duration-500 cursor-pointer

                  ${
                    isActive
                      ? "border-orange-400 shadow-2xl -translate-y-2"
                      : "border-orange-200"
                  }

                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-orange-300
                `}
              >
                {/* Number */}
                <div
                  className={`
                    absolute -top-6 -right-6
                    flex h-32 w-32 items-center justify-center
                    rounded-full
                    transition-all duration-500

                    ${
                      isActive
                        ? "scale-125 bg-orange-200"
                        : "bg-orange-50"
                    }
                  `}
                >
                  <span
                    className={`
                      text-6xl font-bold transition-all duration-500
                      ${
                        isActive
                          ? "text-orange-600"
                          : "text-orange-100"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`
                    mb-6 flex h-16 w-16 items-center justify-center
                    rounded-2xl text-2xl text-white
                    transition-all duration-300

                    ${
                      isActive
                        ? "bg-orange-600 scale-110"
                        : "bg-orange-500"
                    }
                  `}
                >
                  {Icon && <Icon size={28} />}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div
                  className={`
                    h-1 bg-orange-500 transition-all duration-300
                    ${isActive ? "w-24 bg-orange-600" : "w-12"}
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudyBenefits;