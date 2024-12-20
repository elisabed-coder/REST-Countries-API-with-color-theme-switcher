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
    <div className="relative mt-6">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-48 flex items-center gap-8 p-5 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
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
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-10"
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
                ? "bg-indigo-100 text-indigo-500"
                : "text-gray-700 hover:bg-gray-100 hover:text-indigo-500"
            } transition-colors cursor-pointer`}
          >
            {region}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default RegionFilter;

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
