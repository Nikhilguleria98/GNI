import { useState } from "react";
import {
  FiMonitor,
  FiVolume2,
  FiArrowRight,
} from "react-icons/fi";
import { FaLaptop } from "react-icons/fa";
import { studyOverviewData } from "../../data/studyData";
import { useParams } from "react-router-dom";

const StudyOverview = () => {
  const { feature } = useParams();

  const data = studyOverviewData[feature];

  const [activeCard, setActiveCard] = useState(0);

  if (!data) {
    return (
      <div className="py-20 text-center text-xl font-semibold">
        Overview data not found
      </div>
    );
  }

  const cards = data.cards || [];

  const getIcon = (index, isActive) => {
    const iconClass = isActive
      ? "text-white"
      : "text-[#f35b0a]";

    switch (index) {
      case 0:
        return (
          <FiMonitor
            size={40}
            className={iconClass}
          />
        );

      case 1:
        return (
          <FaLaptop
            size={40}
            className={iconClass}
          />
        );

      case 2:
        return (
          <FiVolume2
            size={40}
            className={iconClass}
          />
        );

      default:
        return (
          <FiMonitor
            size={40}
            className={iconClass}
          />
        );
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_1fr]">

          {/* LEFT SIDE */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* Highlight Card */}
            <div className="rounded-[24px] bg-[#f35b0a] p-8 text-white">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h2 className="text-5xl font-bold">
                    {data.highlight?.number}
                  </h2>

                  <h3 className="mt-3 text-3xl font-bold">
                    {data.highlight?.title}
                  </h3>

                  <p className="mt-4 text-white/90">
                    {data.highlight?.description}
                  </p>
                </div>

                <FiArrowRight
                  size={30}
                  className="mt-8"
                />
              </div>
            </div>

            {/* Dynamic Cards */}
            {cards.map((card, index) => {
              const isActive = activeCard === index;

              return (
                <div
                  key={index}
                  onClick={() =>
                    setActiveCard(index)
                  }
                  className={`cursor-pointer rounded-[24px] p-8 transition-all duration-300 ${
                    isActive
                      ? "bg-[#f35b0a] text-white shadow-xl scale-[1.02]"
                      : "bg-[#f8f4f1] text-black hover:shadow-lg"
                  }`}
                >
                  {getIcon(index, isActive)}

                  <h3 className="mt-6 text-2xl font-bold">
                    {card.title}
                  </h3>

                  <p
                    className={`mt-3 ${
                      isActive
                        ? "text-white/90"
                        : "text-gray-600"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT IMAGE */}
          <div className="overflow-hidden rounded-[24px]">
            <img
              src={
                cards[activeCard]?.image ||
                data.image
              }
              alt={
                cards[activeCard]?.title ||
                data.highlight?.title
              }
              className="h-full min-h-[550px] w-full object-cover transition-all duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudyOverview;