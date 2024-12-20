import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetails from "./Components/CountryDetails";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";

const AppLayout = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`w-full h-full min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-[#202c37] text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <AppLayout />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
