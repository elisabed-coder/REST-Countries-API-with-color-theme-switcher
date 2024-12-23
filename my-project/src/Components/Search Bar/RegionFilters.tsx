import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface RegionFilterProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const RegionFilter: React.FC<RegionFilterProps> = ({
  selectedRegion,
  onRegionChange,
}) => {
  const [open, setOpen] = useState(false);
  const regions = [
    "All Regions",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  return (
    <section className="relative mt-6 w-48">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-5 py-4 shadow-[0_7px_29px_0_rgba(100,100,111,.2)] bg-white dark:bg-[rgb(43,57,69)] dark:shadow-md dark:text-white rounded-md text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="font-medium text-sm">
          {selectedRegion || "Filter by Region"}
        </span>
        <motion.span variants={iconVariants} animate={open ? "open" : "closed"}>
          <IoIosArrowDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        animate={open ? "open" : "closed"}
        variants={wrapperVariants}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white dark:bg-[rgb(43,57,69)] dark:shadow-md dark:text-white shadow-xl absolute top-[120%] left-0 w-full overflow-hidden z-10"
      >
        {regions.map((region) => (
          <motion.li
            key={region}
            variants={itemVariants}
            onClick={() => {
              onRegionChange(region === "All Regions" ? "" : region);
              setOpen(false);
            }}
            className={`flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md ${
              selectedRegion === region
                ? "bg-indigo-100 text-indigo-500 dark:bg-indigo-700 dark:text-white"
                : "text-gray-700 hover:bg-gray-100 hover:text-indigo-500 dark:text-white dark:hover:bg-gray-600"
            } transition-colors cursor-pointer`}
          >
            {region}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.2,
    },
  },
};

export default RegionFilter;
