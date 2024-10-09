import RecentLocationButtons from "./RecentLocationButtons";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="bg-[url('/images/hero-bg.jpg')] h-[30vh] h-max-[30vh] py-12">
      <div className="flex flex-col items-center px-6 gap-10">
        <Search />
        <RecentLocationButtons />
      </div>
    </div>
  );
};

export default Hero;
