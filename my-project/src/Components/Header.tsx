import { useDarkMode } from "../context/DarkModeContext";
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="sticky top-0 z-[20] mx-auto flex w-full items-center justify-between px-4 md:px-16 py-4 shadow-md min-h-[10vh] bg-white dark:bg-black">
      <h1 className="text-3xl font-bold">Where in the world?</h1>
      <div
        onClick={toggleDarkMode}
        className="px-4 py-2 text-lg  cursor-pointer font-bold rounded-lg border transition-transform duration-300 flex  items-center justify-center hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 gap:0.5rem"
      >
        {isDarkMode ? <CiSun /> : <IoMoonOutline />}
        <p className=" transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
};
export default Header;
