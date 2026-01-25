import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/pages/Landing";

function App() {
  return (
    <div className="max-w-[1728px] mx-auto pl-[45px] pr-[36px] font-rajdhani">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
