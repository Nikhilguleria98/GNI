import PageHero from "../../components/PageHero/PageHero";

const PlacementHero = () => {
  const data = {
    heroImage: "/placement2.png",
    badge: "Placements",
    title: "Building Careers, Creating Opportunities",
    heroDescription: "Our placement initiatives connect students with leading companies and help them develop the skills, confidence, and industry exposure required to build successful careers."
  };

  return (
    <PageHero
      variant="placement"
      image={data.heroImage}
      badge={data.badge}
      title={data.title}
      description={data.heroDescription}
      features={[
        "Industry-Focused",
        "Approved & Recognized",
      ]}
      buttonText="Apply Now"
    />
  );
};

export default PlacementHero;