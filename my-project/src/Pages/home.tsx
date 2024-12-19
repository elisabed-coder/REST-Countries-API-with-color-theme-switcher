import { useDarkMode } from "../context/DarkModeContext";
import { useState, useEffect } from "react";
import Country from "../Interface/country.interface";

function Home() {
  const { isDarkMode } = useDarkMode();
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };

    fetchData();
  }, []);

  return (
    <div
      className={`transition-colors duration-500 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ul>
        {countries.map((d) => (
          <li key={d.ccn3 || d.cca3}>
            <a href={`/country/${d.ccn3 || d.cca3}`}>{d.name.common}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
