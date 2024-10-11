import LocationButton from "./LocationButton";

interface IProps {
  recentSearches: string[];
}

const RecentLocationButtons = ({ recentSearches }: IProps) => {
  return (
    <div className="flex max-w-100 flex-wrap justify-center gap-3">
      {[...recentSearches].map((item) => (
        <LocationButton selectedLocation={item} key={item} />
      ))}
    </div>
  );
};

export default RecentLocationButtons;
