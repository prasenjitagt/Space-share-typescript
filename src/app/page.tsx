
'use client'


import FilterSection from "@/components/filterSection"
import HomeSearchSection from "@/components/homeSearchSection"
import { PhotoSection } from "@/components/photosSection"
import { Provider } from "react-redux"
import store from "./store"
const Home = () => {

  return (
    <>
      <Provider store={store}>

        {/* Home Page */}
        <HomeSearchSection />
        <FilterSection />
        <PhotoSection />

      </Provider>
    </>
  )


}

export default Home