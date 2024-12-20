import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetails() {
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        if (!res.ok) throw new Error("Failed to fetch country details");
        const data = await res.json();
        setCountry(data[0]);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchCountry();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital ? country.capital[0] : "Not Available"}</p>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </div>
  );
}

export default CountryDetails;
