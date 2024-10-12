"use client";
import HomePageFilterSection from "@/components/home-page/home-page-filter-section";
import HomePageSearchSection from "@/components/home-page/home-page-search-section";
import { Provider } from "react-redux";
import store from "./store";
import HomePagePhotosSection from "@/components/home-page/home-page-photos-section";
import "@/app/globals.css";
const Home = () => {
  return (
    <Provider store={store}>
      <div className=" px-[13px] ">
        {/* Home Page */}
        <HomePageSearchSection />
        {/* <HomePageFilterSection /> */}
        <HomePagePhotosSection />
      </div>
    </Provider>
  );
};

export default Home;
