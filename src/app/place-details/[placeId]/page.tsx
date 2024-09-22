
'use client'

import DetailsPagePhoto from '@/components/detailsPagePhoto';
import DetailsPageAmenities from '@/components/details-page-amenities';
import DetailsPageNav from '@/components/details-page-nav';
import DetailsPageMap from '@/components/details-page-map';
import DetailsPageOperatingHours from '@/components/details-page-operating-hours';
import { Provider } from 'react-redux';
import store from '@/app/store';


interface Params {
  placeId: string
}

const DetailsPage = ({ params }: { params: Params }) => {




  return (
    <>

      <Provider store={store}>

        <DetailsPageNav />


        <DetailsPagePhoto
          placeId={params.placeId}
        />

        <DetailsPageAmenities
          placeId={params.placeId}
        />


        <DetailsPageMap />

        <DetailsPageOperatingHours placeId={params.placeId} />

      </Provider>

    </>
  )
}

export default DetailsPage