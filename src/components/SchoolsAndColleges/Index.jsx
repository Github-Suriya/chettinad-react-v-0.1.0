import DynamicEvents from "../DynamicSections/DynamicEvents";
import DynamicImgCarousel from "../DynamicSections/DynamicImgCarousel";
import BannerSection from "./Partials/BannerSection";
import FacilitiesSection from "./Partials/FacilitiesSection";
import FacultyMembers from "./Partials/FacultyMembers";
import FindOutMoreSection from "./Partials/FindOutMoreSection";
import LatestNewsSection from "./Partials/LatestNewsSection";
import LogoSection from "./Partials/LogoSection";
import OverviewSection from "./Partials/OverviewSection";
import PrincipalSpeakSection from "./Partials/PrincipalSpeakSection";
import ProgramsSection from "./Partials/ProgramsSection";
import StickyNavSection from "./Partials/StickyNavSection";
import StudentLifeSection from "./Partials/StudentLifeSection";
import './index.css';

export const Index = () => {
  return (
    <>
      <BannerSection />
      <main>
        <LatestNewsSection />
        <StickyNavSection />
        <OverviewSection />
        <ProgramsSection />
        <PrincipalSpeakSection />
        <LogoSection />
        <FacultyMembers />
        <FacilitiesSection />
        <StudentLifeSection />
        <section className="event-style1-area">
              <div className="container">
                  <div className="sec-title text-center">
                      <h2>Upcoming Events</h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-6 mb-3">
                        <DynamicImgCarousel groupId={3} />
                      </div>
                      <div className="col-xl-6">
                        <DynamicEvents />
                      </div>
                  </div>
              </div>
          </section>
        <FindOutMoreSection />
      </main>
    </>
  )
}

export default Index;