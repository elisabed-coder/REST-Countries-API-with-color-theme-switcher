import { useState, useEffect } from "react";
import { Country } from "../Interface/country.interface";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SearchInput from "./Search Bar/SearchInput";
import RegionFilter from "./Search Bar/RegionFilters";

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const countriesPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };

    fetchData();
  }, []);

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((country) => {
      if (selectedRegion) {
        return country.region.toLowerCase() === selectedRegion.toLowerCase();
      }
      return true;
    });

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Total pages
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setCurrentPage(1);
  };

  return (
    <div className="px-4 md:px-16 pb-6">
      <div className="flex justify-between flex-col md:flex-row">
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <RegionFilter
          selectedRegion={selectedRegion}
          onRegionChange={handleRegionChange}
        />
      </div>

      <div className="flex justify-end mt-6 ">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          <IoIosArrowBack />
        </button>

        <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
          {currentPage}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {currentCountries.map((d) => (
          <div key={d.ccn3 || d.cca3} className="country-card">
            <a href={`/country/${d.ccn3 || d.cca3}`}>
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={d.flags.svg || "/default-flag.svg"}
                alt={d.name.common}
              />
            </a>
            <div className="p-5">
              <a href={`/country/${d.ccn3 || d.cca3}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {d.name.common}
                </h5>
              </a>
              <p className="country-info-text">
                <strong>Population:</strong> {d.population.toLocaleString()}
              </p>
              <p className="country-info-text">
                <strong>Region:</strong> {d.region}
              </p>
              <p className="country-info-text mb-3">
                <strong>Capital:</strong> {d.capital ? d.capital[0] : "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
