import { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import ApplyNowForm from "../../components/ApplyNowForm/ApplyNowForm";

const HeroSection = () => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <PageHero
        variant="home"
        image="/home.png"
        alt="B.Tech Campus"
        badge="Admissions Open for 2026-2027"
        title="Bachelor of Technology (B.Tech)"
        description="Build a strong foundation in engineering through industry-focused learning, practical experience, and cutting-edge technology to become a future-ready professional."
        features={[
          "UGC Recognized",
          "Approved by Govt. of Punjab",
        ]}
        buttonText="Apply Now" onButtonClick={() => setIsApplyOpen(true)} />

      <ApplyNowForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)}/>
    </>
  );
};

export default HeroSection;