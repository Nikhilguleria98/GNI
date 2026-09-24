import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GniScrollEffect from "./components/effects/GniScrollEffect";
import HeroSection from "./pages/Home/Hero";
import ChooseUs from "./pages/Home/ChooseUs";
import StudyAtGniSection from "./pages/Home/StudyAtGni";
import TestimonialsSection from "./pages/Home/Testimonials";
import CTA from "./pages/Home/CTA";

import ProgramsPage from "./pages/Programs/ProgramsPage";
import ProgramDetailsPage from "./pages/Programs/ProgramDetailsPage";
import ProgramFaculty from "./pages/Programs/ProgramFaculty";
import ProgramTestimonial from "./pages/Programs/ProgramTestinomial";
import ProgramRecruiters from "./pages/Programs/ProgramRecruiters";
import ProgramInfrastructure from "./pages/Programs/ProgramInfrastructure";
import ProgramsCTA from "./pages/Programs/ProgramsCTA";

import AboutHeroSection from "./pages/About/Hero";
import Welcome from "./pages/About/Welcome";
import VisionMissionSection from "./pages/About/VisionMission";
import Management from "./pages/About/Management";

import PlacementHero from "./pages/Placements/Hero";
import PlacementOverview from "./pages/Placements/PlacementOverview";
import PlacementFaculty from "./pages/Placements/PlacementFaculty";
import PlacementRecruiters from "./pages/Placements/PlacementRecruiters";
import PlacementCTA from "./pages/Placements/CTA";
import PlacementTestimonials from "./pages/Placements/PlacementTestimonials";

import CampusHero from "./pages/CampusLife/CampusHero";
import CampusGallery from "./pages/CampusLife/CampusGallery";

import ApplyNowPage from "./pages/ApplyNow/ApplyNowPage";

import ContactHero from "./pages/Contact/ContactHero";
import ContactFormSection from "./pages/Contact/Contact";
import AdmissionHelpline from "./pages/Contact/AdmissionHelpline";
import DepartmentContacts from "./pages/Contact/DepartmentContacts";

import EventDetailsPage from "./pages/Events/EventDetailsPage";

import {placementData,facultyData,recruiterData,placementTestimonialsData} from "./data/placementData";

import ScrollToTop from "./components/ScrollTop/ScrollToTop";
import OnlineAdmissionHero from "./pages/OnlineAdmission/OnlineAdmissionHero";
import AdmissionProcess from "./pages/OnlineAdmission/AdmissionProcess";
import AdmissionProgrammes from "./pages/OnlineAdmission/AdmissionProgrammes";
import AdmissionEnquiry from "./pages/OnlineAdmission/AdmissionEnquiry";
import OnlineAdmissionCTA from "./pages/OnlineAdmission/OnlineAdmissionCTA";

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
              <HeroSection />
              <ChooseUs />
              <StudyAtGniSection />
              <TestimonialsSection />
              <CTA />
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
              <Welcome />
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

        <Route path="/online-admission" element={
          <>
        <OnlineAdmissionHero />
        <AdmissionProcess />
        <AdmissionProgrammes />
        <AdmissionEnquiry />
        <OnlineAdmissionCTA />
        </>
        }
       />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;