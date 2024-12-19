import { useDarkMode } from "../context/DarkModeContext";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="w-full p-4">
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 text-lg font-bold rounded-lg border transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </header>
  );
};
export default Header;
