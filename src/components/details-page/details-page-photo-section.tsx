import DetailsPageImageCard from "./details-page-image-card";
import Places, { eachPlace } from "@/data/place-data";
import DetailsPageNav from "./details-page-nav";

interface PropsType {
  placeId: string;
}

const DetailsPagePhotoSection: React.FC<PropsType> = (props: PropsType) => {
  return Places.filter((place: eachPlace) => place.id === props.placeId).map(
    (place: eachPlace) => {
      const {
        areaInSqft,
        id,
        images,
        location,
        nameOfPlace,
        peopleCount,
        reviewCount,
      } = place;

      return (
        <div key={id} className="w-full flex flex-col items-center ">
          <DetailsPageNav />

          <DetailsPageImageCard
            areaInSqft={areaInSqft}
            images={images}
            location={location}
            nameOfPlace={nameOfPlace}
            peopleCount={peopleCount}
            reviewCount={reviewCount}
          />
          <div className="h-[10px]"></div>
        </div>
      );
    }
  );
};

export default DetailsPagePhotoSection;
