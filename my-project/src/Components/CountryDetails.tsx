import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Country } from "../Interface/country.interface";
import Loader from "./Loader";

function CountryDetails() {
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<Country | null>(null);
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

  if (!country) return <Loader />;

  return (
    <section className="p-4 md:px-16 md:pt-16">
      <Link to="/">
        <button className="animated_button local_shadow">
          <IoArrowBack />
          <span>Back</span>
        </button>
      </Link>

      <div className="flex items-center justify-center flex-col lg:flex-row pt-10">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="sm:w-10/12 lg:w-6/12 h-full"
        />
        <div className="sm:w-10/12 lg:w-6/12 pt-10 lg:pl-5 pb-22">
          <h1 className="text-2xl font-extrabold">{country.name.common}</h1>
          <div className="md:flex flex-row justify-between my-6 mb-16 leading-[25px] ">
            <div className="">
              <p>
                <strong>Native Name:</strong>{" "}
                {Object.values(country.name.nativeName || {})
                  .map((name) => name.common)
                  .join(", ")}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {country.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain:</strong> {country.tld?.join(", ")}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {Object.values(country.languages || {}).join(", ")}
              </p>
            </div>
          </div>
          <div className="lg:flex items-baseline gap-1">
            <strong>Border Countries:</strong>{" "}
            <div className="flex flex-wrap gap-2 mt-2">
              {country.borders ? (
                country.borders.map((border) => (
                  <div
                    key={border}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
                  >
                    {border}
                  </div>
                ))
              ) : (
                <div>{`${country.name.common} has no border countries`}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetails;
