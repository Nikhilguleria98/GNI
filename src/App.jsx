import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Hero from "./pages/Home/Hero";
import WhyChooseUsSection from "./pages/Home/WhyChooseUs";
import StudyAtGniSection from "./pages/Home/StudyAtGni";
import TestimonialsSection from "./pages/Home/Testimonials";
import ApplyNowSection from "./pages/Home/ApplyNowSection";

import AboutHeroSection from "./pages/About/AboutHero";
import AboutWelcomeSection from "./pages/About/AboutWelcome";
import VisionMissionSection from "./pages/About/VisionMission";
import ManagementSection from "./pages/About/Management";

import PlacementHero from "./pages/Placements/PlacementHero";
import PlacementOverview from "./pages/Placements/PlacementOverview";
import PlacementFaculty from "./pages/Placements/PlacementFaculty";
import PlacementRecruiters from "./pages/Placements/PlacementRecruiters";
import PlacementCTA from "./pages/Placements/PlacementCTA";
import PlacementTestimonials from "./pages/Placements/PlacementTestimonials";

import CampusHero from "./pages/CampusLife/CampusHero";
import CampusGallery from "./pages/CampusLife/CampusGallery";

import ContactHero from "./pages/Contact/ContactHero";
import ContactFormSection from "./pages/Contact/Contact";
import AdmissionHelpline from "./pages/Contact/AdmissionHelpline";
import DepartmentContacts from "./pages/Contact/DepartmentContacts";

function App() {
  const placementData = {
    heroImage: "/placement.png",
    badge: "Placements",
    title: "Building Careers, Creating Opportunities",
    heroDescription:
      "Our placement initiatives connect students with leading companies and help them develop the skills, confidence, and industry exposure required to build successful careers.",
  };

  const facultyData = [
    {
      name: "Dr. Shubhkaman Rathore",
      role: "Principal",
      department: "Management",
    },
    {
      name: "Ms. Kajal",
      role: "Asst. Professor",
      department: "Management",
    },
    {
      name: "Ms. Sakshi",
      role: "Asst. Professor",
      department: "Computer Applications",
    },
    {
      name: "Mr. Sanjay",
      role: "Asst. Professor",
      department: "Engineering",
    },
    {
      name: "Ms. Pooja",
      role: "Asst. Professor",
      department: "Management",
    },
  ];

  const recruiterData = [
    "TCS",
    "Infosys",
    "Wipro",
    "HCL",
    "Chetu",
    "IBM",
    "Bajaj",
    "HDFC",
    "Genus",
    "EduSkills",
    "NASSCOM",
    "Intellipaat",
  ];

  const placementTestimonialsData = [
    {
      name: "Student Name 1",
      course: "B.Tech",
      text: "GNI provided excellent placement support and helped me develop the skills required to start my professional career.",
    },
    {
      name: "Student Name 2",
      course: "MBA",
      text: "The training and placement team guided me throughout the recruitment process and helped me build confidence.",
    },
    {
      name: "Student Name 3",
      course: "BBA",
      text: "The industry exposure and career guidance at GNI prepared me well for professional opportunities.",
    },
    {
      name: "Student Name 4",
      course: "B.Tech",
      text: "The placement training helped me improve my technical knowledge, communication skills, and interview preparation.",
    },
  ];

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyChooseUsSection />
              <StudyAtGniSection />
              <TestimonialsSection />
              <ApplyNowSection />
            </>
          }
        />

        {/* ================= ABOUT ================= */}
        <Route
          path="/about"
          element={
            <>
              <AboutHeroSection />
              <AboutWelcomeSection />
              <VisionMissionSection />
              <ManagementSection />
            </>
          }
        />

        {/* ================= PLACEMENTS ================= */}
        <Route
          path="/placements"
          element={
            <>
              <PlacementHero data={placementData} />

              <PlacementOverview />

              <PlacementFaculty data={facultyData} />

              <PlacementRecruiters data={recruiterData} />

              <PlacementCTA />

              <PlacementTestimonials data={placementTestimonialsData} />
            </>
          }
        />

        {/* ================= CAMPUS LIFE ================= */}
        <Route
          path="/campus-life"
          element={
            <>
              <CampusHero />
              <CampusGallery />
            </>
          }
        />

        {/* ================= CONTACT ================= */}
        <Route
          path="/contact"
          element={
            <>
              <ContactHero />
              <ContactFormSection />
              <AdmissionHelpline />
              <DepartmentContacts />
            </>
          }
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;