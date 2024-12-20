import { useDarkMode } from "../context/DarkModeContext";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="sticky top-0 z-[20] mx-auto w-full flex items-center justify-between flex-row min:flex-col p-4 md:px-16-custom-dark min-h-[10vh] bg-white dark:bg-[#2b3945] shadow-custom-dark">
      <h1
        className="text-xl sm:text-2xl md:text-3xl font-bold 
      "
      >
        Where in the world?
      </h1>{" "}
      <div
        onClick={toggleDarkMode}
        className="px-4 py-2 text-lg  cursor-pointer font-bold gap-3 rounded-lg  transition-transform duration-300 flex  items-center justify-center hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 gap:0.5rem"
      >
        {isDarkMode ? <IoMoonSharp /> : <IoMoonOutline />}
        <p className=" transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
};
export default Header;
