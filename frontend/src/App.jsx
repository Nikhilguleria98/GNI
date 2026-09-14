import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Hero from "./pages/Home/Hero";
import WhyChooseUsSection from "./pages/Home/WhyChooseUs";
import StudyAtGniSection from "./pages/Home/StudyAtGNI";
import TestimonialsSection from "./pages/Home/Testimonials";
import ApplyNowSection from "./pages/Home/ApplyNowSection";

import ProgramsPage from "./pages/Programs/ProgramsPage";
import ProgramDetailsPage from "./pages/Programs/ProgramDetailsPage";
import ProgramFaculty from "./pages/Programs/ProgramFaculty";
import ProgramTestimonial from "./pages/Programs/ProgramTestinomial";
import ProgramRecruiters from "./pages/Programs/ProgramRecruiters";
import ProgramInfrastructure from "./pages/Programs/ProgramInfrastructure";
import ProgramsCTA from "./pages/Programs/ProgramsCTA";

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

import { placementData, facultyData, recruiterData, placementTestimonialsData } from "./data/placementData";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* home */}
        <Route path="/" element={
          <>
            <Hero />
            <WhyChooseUsSection />
            <StudyAtGniSection />
            <TestimonialsSection />
            <ApplyNowSection />
          </>
        }
        />

        {/* about */}
        <Route path="/about" element={
          <>
            <AboutHeroSection />
            <AboutWelcomeSection />
            <VisionMissionSection />
            <ManagementSection />
          </>
        }
        />
        {/* programs */}
        <Route path="/programs" element={<><ProgramDetailsPage /><ProgramFaculty data={facultyData} /><ProgramTestimonial data={placementTestimonialsData} /><ProgramRecruiters data={recruiterData} /><ProgramInfrastructure /><ProgramsCTA /></>} />
        <Route path="/programs/:programSlug" element={<><ProgramDetailsPage /><ProgramFaculty data={facultyData} /><ProgramTestimonial data={placementTestimonialsData} /><ProgramRecruiters data={recruiterData} /><ProgramInfrastructure /><ProgramsCTA /></>} />
        <Route path="/programfaculty" element={<ProgramFaculty data={facultyData} />} />
        <Route path="/programTestinomial" element={<ProgramTestimonial data={placementTestimonialsData} />} />
        <Route path="/programs/:programSlug" element={<ProgramInfrastructure />} />
        <Route path="/programscta" element={<ProgramsCTA />} />


        {/* placements */}
        <Route path="/placements" element={
          <>
            <PlacementHero data={placementData} />
            <PlacementOverview />
            <PlacementFaculty data={facultyData} />
            <PlacementTestimonials data={placementTestimonialsData} />
            <PlacementRecruiters data={recruiterData} />
            <PlacementCTA />
          </>
        }
        />

        {/* campus-life */}
        <Route path="/campus-life" element={
          <>
            <CampusHero />
            <CampusGallery />
          </>
        }
        />

        {/* contact */}
        <Route path="/contact" element={
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