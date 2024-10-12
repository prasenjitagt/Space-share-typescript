import React, { useState } from "react";
import Image from "next/image"; // Make sure to import Image from 'next/image'
import Amenities, { eachAmenity } from "@/data/amenities-data";

const HomePageFilterAmenities: React.FC = () => {
  // State to keep track of the selected amenities
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (amenityId: string) => {
    setSelected(
      (prev) =>
        prev.includes(amenityId)
          ? prev.filter((item) => item !== amenityId) // Deselect if already selected
          : [...prev, amenityId] // Add to selected if not already selected
    );
  };

  return (
    <div className="">
      {Amenities.map((eachAmenity: eachAmenity) => {
        const isSelected = selected.includes(eachAmenity.amenityId);

        return (
          <div
            key={eachAmenity.amenityId}
            onClick={() => handleSelect(eachAmenity.amenityId)} // Handle amenity select/deselect
            className={`flex py-[7px] px-[25px] border-[1px] mb-[5px] w-max rounded-full justify-center cursor-pointer ${
              isSelected ? "border-blue-600 " : "border-black"
            }`}
          >
            {/* Display amenity icon */}
            <Image
              alt={eachAmenity.amenityName}
              src={`/icons/${eachAmenity.amenityIconName}`}
              width={20}
              height={20}
            />
            <p className="ml-[3px]">{eachAmenity.amenityName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomePageFilterAmenities;
