import { useState } from "react";
import RecentLocationButtons from "./RecentLocationButtons";
import Search from "./Search";

const Hero = () => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const handleChangeRecentSearch = (location: string) => {
    setRecentSearches((prev) => {
      const updatedSearches = [location, ...prev];
      const uniqueSearches = new Set(updatedSearches);

      return Array.from(uniqueSearches).slice(0, 5);
    });
  };

  return (
    <div className="bg-[url('/images/hero-bg.jpg')] h-[30vh] h-max-[30vh] py-12">
      <div className="flex flex-col items-center px-6 gap-10">
        <Search onRecentSearchChange={handleChangeRecentSearch} />
        <RecentLocationButtons recentSearches={recentSearches} />
      </div>
    </div>
  );
};

export default Hero;
