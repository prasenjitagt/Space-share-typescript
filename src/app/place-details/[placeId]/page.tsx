

import DetailsPagePhoto from '@/components/detailsPagePhoto';
import DetailsPageAmenities from '@/components/details-page-amenities';
import DetailsPageNav from '@/components/details-page-nav';
import DetailsPageMap from '@/components/details-page-map';
import DetailsPageOperatingHours from '@/components/details-page-operating-hours';


interface Params {
  placeId: string
}

const DetailsPage = ({ params }: { params: Params }) => {




  return (
    <>

      <DetailsPageNav />


      <DetailsPagePhoto
        placeId={params.placeId}
      />

      <DetailsPageAmenities
        placeId={params.placeId}
      />


      <DetailsPageMap />

      <DetailsPageOperatingHours />


    </>
  )
}

export default DetailsPage