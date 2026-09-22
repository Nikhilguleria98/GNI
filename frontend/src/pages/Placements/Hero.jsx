import { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import ApplyNowForm from "../../components/ApplyNowForm/ApplyNowForm";

const Hero = () => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const data = {
    heroImage: "/placement2.png",
    badge: "Admissions Open for 2026-2027",
    title: "Placements",
    heroDescription: "At Guru Nanak Institutions (GNI), we prepare students for successful careers through industry-focused training, skill development, internships, and strong industry partnerships. Our dedicated Training & Placement Cell connects students with leading recruiters across multiple sectors."
  };

  return (
    <>
      <PageHero
        variant="placement"
        image={data.heroImage}
        badge={data.badge}
        title={data.title}
        description={data.heroDescription}
        features={[
          "UGC Recognized",
          "Approved by Govt. of Punjab",
        ]}
        buttonText="Apply Now" onButtonClick={() => setIsApplyOpen(true)} />

      <ApplyNowForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
};

export default Hero;