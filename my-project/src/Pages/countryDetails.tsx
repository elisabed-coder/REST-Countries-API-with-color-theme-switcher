import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetails() {
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<any>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
      const data = await res.json();
      setCountry(data[0]);
    };

    fetchCountry();
  }, [id]);

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital && country.capital[0]}</p>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </div>
  );
}

export default CountryDetails;
