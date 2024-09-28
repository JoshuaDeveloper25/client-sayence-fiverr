import Header from "./components/Header";
import CountriesCarousel from "./components/CountriesCarousel";
import LanguagesCarousel from "./components/LanguagesCarousel";
import GetStartedEasy from "./components/GetStartedEasy";
import MeetOurServices from "./components/MeetOurServices";
import OurLessons from "./components/OurLessons";
import LearningEcosystem from "./components/LearningEcosystem";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Countries */}
      <CountriesCarousel />

      {/* Browser Subjects and Tutors */}
      <LanguagesCarousel />

      {/* Get Started Easy */}
      <GetStartedEasy />

      {/* Meet our services */}
      <MeetOurServices />

      {/* Get Started Not Easy*/}
      <GetStartedEasy />

      {/* Discover how our lessons support you */}
      <OurLessons />

      {/* Save learning environment */}
      <LearningEcosystem />

      {/* Footer */}
      <Footer />
    </main>
  );
}
