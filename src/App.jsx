import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/pages/Landing";
import Services from "./components/pages/Services";
import AboutUs from "./components/pages/AboutUs";
import Contacts from "./components/pages/Contacts";

function App() {
  return (
    <div className="max-w-[1728px] mx-auto md:pl-[45px] md:pr-[36px] px-5 font-rajdhani">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="services" element={<Services />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
