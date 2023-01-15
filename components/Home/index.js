// import HomeSlider from "../../components/custom/HomeSlider";
// import FeatureSection from "../../components/section/Home/FeatureSection";
// import LatestProduct from "../../components/section/Home/LatestSection";
// import ServicesInfo from "../../components/section/Home/ServicesInfo";
// import useAPI from "../../../hooks/useAPI";
// import productServices from "../../../services/product.services";
// import BannerSection from "../../components/section/Home/BannerSection";
// import TrendingProducts from "../../components/section/Home/TrendingProducts";

import HomeSlider from "./HomeSlider";

// import TopCategory from "../../components/section/Home/TopCategory";
const Home = () => {
  const 
  productsData 

 
  return (
    <div className="max-auto">               
      {/* <HomeSlider /> */}
      <div className="container m-auto">
        {productsData && <FeatureSection />}
        <ServicesInfo />
      </div>
      {/* <BannerSection /> */}
      {/* <TrendingProducts /> */}
      {/* <TopCategory /> */}
    </div>
  );
};

export default Home;
