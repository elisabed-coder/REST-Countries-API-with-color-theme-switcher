import { SearchInputProps } from "../../Interface/SearchInputProps";
import { IoIosSearch } from "react-icons/io";

const SearchInput: React.FC<SearchInputProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <section className="mt-6 relative bg-white dark:bg-[rgb(43,57,69)] dark:shadow-md dark:text-white shadow-[0_7px_29px_0_rgba(100,100,111,.2)] rounded-[4px] transition-all duration-[1000ms] ease-in-out sm:w-[300px] md:w-[400px] lg:w-[480px] h-[50px]">
      <IoIosSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#858585] dark:text-white" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full h-full pl-[40px] pr-[20px] py-[10px] text-[#858585] dark:text-white text-[14px] font-[600] bg-white dark:bg-[rgb(43,57,69)] border-none rounded-[4px] focus:outline-none"
      />
    </section>
  );
};

export default SearchInput;
