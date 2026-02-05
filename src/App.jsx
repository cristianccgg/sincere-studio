import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./components/pages/Landing";
import Services from "./components/pages/Services";
import AboutUs from "./components/pages/AboutUs";
import Contacts from "./components/pages/Contacts";
import Projects from "./components/pages/Projects";
import Mano from "./components/pages/Mano";
import LShot from "./components/pages/LShot";
import Wedwish from "./components/pages/Wedwish";
import MatchWise from "./components/pages/MatchWise";
import TheFoodCo from "./components/pages/TheFoodCo";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";

function App() {
  return (
    <div className="max-w-[1728px] mx-auto md:pl-[45px] md:pr-[36px] px-5 font-rajdhani">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/mano" element={<Mano />} />
            <Route path="projects/lshot" element={<LShot />} />
            <Route path="projects/wedwish" element={<Wedwish />} />
            <Route path="projects/matchwise" element={<MatchWise />} />
            <Route path="projects/thefoodco" element={<TheFoodCo />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
