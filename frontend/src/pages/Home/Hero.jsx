import PageHero from "../../components/PageHero/PageHero";

const HeroSection = () => {
  return (
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
      buttonText="Apply Now"
    />
  );
};

export default HeroSection;