import { useEffect, useState } from "react";
import "./App.css";

interface Country {
  ccn3: string;
  cca3: string;
  name: {
    common: string;
  };
}

function App() {
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
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ul>
        {countries.map((d) => (
          <li key={d.ccn3 || d.cca3}>
            <a href={`/country/${d.ccn3}`}>{d.name.common}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
