
'use client'


import DetailsPageAmenities from '@/components/details-page/details-page-amenities';
import DetailsPageNav from '@/components/details-page/details-page-nav';
import DetailsPageMap from '@/components/details-page/details-page-map';
import DetailsPageOperatingHours from '@/components/details-page/details-page-operating-hours';
import { Provider } from 'react-redux';
import store from '@/app/store';
import DetailsPageCalendar from '@/components/details-page/details-page-calender';
import DetailsPageReviews from '@/components/details-page/details-page-reviews';
import DetailsPagePhotoSection from '@/components/details-page/details-page-photo-section';


interface Params {
  placeId: string
}

const DetailsPage = ({ params }: { params: Params }) => {




  return (
    <>

      <Provider store={store}>

        <DetailsPageNav />


        <DetailsPagePhotoSection
          placeId={params.placeId}
        />

        <DetailsPageAmenities
          placeId={params.placeId}
        />


        <DetailsPageMap />

        <DetailsPageOperatingHours placeId={params.placeId} />

        <DetailsPageCalendar />


        {/* <DetailsPageReviews placeId={params.placeId} /> */}

      </Provider>

    </>
  )
}

export default DetailsPage