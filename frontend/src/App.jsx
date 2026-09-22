import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GniScrollEffect from "./components/effects/GniScrollEffect";
import Hero from "./pages/Home/Hero";
import WhyChooseUsSection from "./pages/Home/WhyChooseUs";
import StudyAtGniSection from "./pages/Home/StudyAtGni";
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
import Management from "./pages/About/Management";

import PlacementHero from "./pages/Placements/PlacementHero";
import PlacementOverview from "./pages/Placements/PlacementOverview";
import PlacementFaculty from "./pages/Placements/PlacementFaculty";
import PlacementRecruiters from "./pages/Placements/PlacementRecruiters";
import PlacementCTA from "./pages/Placements/PlacementCTA";
import PlacementTestimonials from "./pages/Placements/PlacementTestimonials";

import CampusHero from "./pages/CampusLife/CampusHero";
import CampusGallery from "./pages/CampusLife/CampusGallery";

import ApplyNowPage from "./pages/ApplyNow/ApplyNowPage";

import ContactHero from "./pages/Contact/ContactHero";
import ContactFormSection from "./pages/Contact/Contact";
import AdmissionHelpline from "./pages/Contact/AdmissionHelpline";
import DepartmentContacts from "./pages/Contact/DepartmentContacts";

import EventDetailsPage from "./pages/Events/EventDetailsPage";

import {
  placementData,
  facultyData,
  recruiterData,
  placementTestimonialsData,
} from "./data/placementData";

import ScrollToTop from "./components/ScrollTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GniScrollEffect />

      <Navbar />

      <Routes>
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

        <Route path="/programs" element={<ProgramsPage />} />

        <Route
          path="/programs/:program"
          element={<><ProgramDetailsPage />
            <ProgramFaculty data={facultyData} />
            <ProgramTestimonial  data={placementTestimonialsData} />
            <ProgramRecruiters data={recruiterData} />
            <ProgramInfrastructure />
            <ProgramsCTA />  
            </>
          }
        />

       

      

        <Route
          path="/about"
          element={
            <>
              <AboutHeroSection />
              <AboutWelcomeSection />
              <VisionMissionSection />
              <Management />
            </>
          }
        />

        <Route
          path="/placements"
          element={
            <>
              <PlacementHero data={placementData} />
              <PlacementOverview />
              <PlacementFaculty data={facultyData} />
              <PlacementRecruiters data={recruiterData} />
              <PlacementTestimonials
                data={placementTestimonialsData}
              />
              <PlacementCTA />
            </>
          }
        />

        <Route
          path="/campus-life"
          element={
            <>
              <CampusHero />
              <CampusGallery />
            </>
          }
        />
        <Route path="/apply-now" element={<ApplyNowPage />} />

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

        {/* Events */}
        <Route
          path="/events/:eventSlug"
          element={<EventDetailsPage />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;