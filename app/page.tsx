import Hero from "./components/Hero";
import HomeNote from "./components/HomeNote";
import HomeSampleGallery from "./components/HomeSampleGallery";

const Home = () => {
  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 lg:px-8 space-y-6">
        <Hero />
        <HomeNote />
        <HomeSampleGallery />
      </div>
    </div>
  );
};

export default Home;
