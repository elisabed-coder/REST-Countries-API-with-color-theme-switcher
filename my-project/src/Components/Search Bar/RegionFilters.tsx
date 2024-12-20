interface RegionFilterProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const RegionFilter: React.FC<RegionFilterProps> = ({
  selectedRegion,
  onRegionChange,
}) => {
  return (
    <div className="mt-6 cursor-pointer">
      <label htmlFor="region" className="mr-2 text-sm text-gray-700">
        Filter by Region:
      </label>
      <select
        id="region"
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default RegionFilter;
