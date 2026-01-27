import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/pages/Landing";

function App() {
  return (
    <div className="max-w-[1728px] mx-auto md:pl-[45px] md:pr-[36px] px-5 font-rajdhani">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
