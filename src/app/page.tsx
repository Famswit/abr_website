import AdvertPage from "@/components/landingPage/AdvertPage";
import EditorsPicks from "@/components/landingPage/EditorsPick";
import EducationCategory from "@/components/landingPage/Educational categories";
import EntertainmentCategory from "@/components/landingPage/EntertainmentCategories";
import FbnSection from "@/components/landingPage/FbnSection";
import GlobalPartners from "@/components/landingPage/GlobalPartners";
import NewlyAddedEpisodes from "@/components/landingPage/LatestEpisodes";
import NeverStopListening from "@/components/landingPage/NeverStopListening";
import NewsCategory from "@/components/landingPage/NewsCategories";
import OtherCategory from "@/components/landingPage/OtherPodcatsCategories";
import TechCategory from "@/components/landingPage/TechCategories";
import TrendingPodcasts from "@/components/landingPage/TrendingEpisode";

export default function Home() {
  return (
   <main>
    <FbnSection />
    <EditorsPicks />
    <TrendingPodcasts />
    <NewlyAddedEpisodes />
    <NewsCategory />
    <AdvertPage />
    <EducationCategory />
    <EntertainmentCategory />
    <TechCategory />
    <OtherCategory />
    <NeverStopListening />
    <GlobalPartners />
   </main>
  );
}
