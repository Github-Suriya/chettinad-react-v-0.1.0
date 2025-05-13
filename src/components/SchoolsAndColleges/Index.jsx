import BannerSection from "./Partials/BannerSection";
import FacilitiesSection from "./Partials/FacilitiesSection";
import FacultyMembers from "./Partials/FacultyMembers";
import LatestNewsSection from "./Partials/LatestNewsSection";
import LogoSection from "./Partials/LogoSection";
import OverviewSection from "./Partials/OverviewSection";
import PrincipalSpeakSection from "./Partials/PrincipalSpeakSection";
import ProgramsSection from "./Partials/ProgramsSection";
import StickyNavSection from "./Partials/StickyNavSection";
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
      </main>
    </>
  )
}

export default Index;