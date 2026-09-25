import React from "react";
import { studyBenefitsData } from "../../data/studyData";
import { useParams } from "react-router-dom";

const StudyBenefits = () => {
  const { feature } = useParams();

  const benefitsData =
    studyBenefitsData[feature] ||
    studyBenefitsData.faculty;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          {benefitsData.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefitsData.benefits.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyBenefits;