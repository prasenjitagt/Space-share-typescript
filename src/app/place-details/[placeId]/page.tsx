"use client";

import DetailsPageAmenities from "@/components/details-page/details-page-amenities";
// import DetailsPageNav from "@/components/details-page/details-page-nav";
import DetailsPageMap from "@/components/details-page/details-page-map";
import DetailsPageOperatingHours from "@/components/details-page/details-page-operating-hours";
import store from "@/app/store";
import DetailsPageCalendar from "@/components/details-page/details-page-calendar";
import DetailsPageReviews from "@/components/details-page/details-page-reviews";
import DetailsPagePhotoSection from "@/components/details-page/details-page-photo-section";
import DetailsPageHost from "@/components/details-page/details-page-host";
import DetailsPageAbout from "@/components/details-page/details-page-about";
import React, { useState } from "react";
import { Provider } from "react-redux"; // Provider should be at the top level
import DetailsPageBottomSheet from "@/components/details-page/details-page-bottom-sheet";

interface PropType {
  params: { placeId: string };
}

const DetailsPage: React.FC<PropType> = ({ params }: PropType) => {
  const placeId = params.placeId;

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

  return (
    <Provider store={store}>
      {" "}
      {/* Wrap the entire component inside Provider */}
      <div className=" mx-0 mt-0 mb-[130px] p-0">
        <div
          style={isBottomSheetOpen ? { display: "none" } : { display: "block" }}
          className="w-full   fixed bottom-0 z-50"
        >
          <DetailsPageBottomSheet placeId={placeId} />
        </div>

        {/* Main Content */}
        {/* <DetailsPageNav /> */}

        <DetailsPagePhotoSection placeId={placeId} />

        <DetailsPageHost placeId={placeId} />

        <DetailsPageAbout placeId={placeId} />

        <DetailsPageAmenities
          setIsBottomSheetOpen={setIsBottomSheetOpen}
          placeId={placeId}
        />

        <DetailsPageMap />

        <DetailsPageOperatingHours placeId={placeId} />

        <DetailsPageCalendar placeId={placeId} />

        <DetailsPageReviews
          setIsBottomSheetOpen={setIsBottomSheetOpen}
          placeId={placeId}
        />
      </div>
    </Provider>
  );
};

export default DetailsPage;
