import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "@/stylesheets/details-page-price.css";
import { useSelector } from "react-redux";
import { EachSelectedDate } from "@/slices/places/current-place-slice";
import { RootState } from "@/app/store";
// import Image from "next/image";
import DetailsPageBottomSheetCalendar from "./details-page-bottom-sheet-calendar";

interface PropType {
  placeId: string;
}

const DetailsPageBottomSheet: React.FC<PropType> = ({ placeId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedDate: EachSelectedDate | undefined = useSelector(
    (state: RootState) => {
      return state.storeSelectedDate.sliceSelectedDates.find(
        (eachSelectedDate: EachSelectedDate) =>
          eachSelectedDate.SelectedDateId === placeId
      );
    }
  );

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    };
    return date.toLocaleDateString("en-US", options).replace(",", "'");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Ref for the modal content
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal if click is outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="flex justify-between items-center w-full h-[100px] px-[30px] py-[18px] my-shadow bg-white">
        <section className="inter-for-price text-[20px]">
          <div className="flex mb-[6px]">
            <p className="font-semibold">{`₹500`}</p>
            <p className="opacity-50">/hour</p>
          </div>
          {selectedDate ? (
            <button
              className="underline underline-offset-4"
              onClick={handleOpenModal}
            >
              {formatDate(selectedDate.selectedDate)}
            </button>
          ) : (
            <button
              className="underline underline-offset-4 opacity-80 capitalize"
              onClick={handleOpenModal}
            >
              {`Select a Date`}
            </button>
          )}
        </section>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            console.log("button pressed");
          }}
          className="inter-for-price py-[16px] px-[33px] rounded-[9px] text-[20px] font-semibold text-white bg-[#0B74FA]"
        >
          Book Now
        </motion.button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="flex flex-col items-center bg-transparent  rounded-lg p-0 relative"
          >
            {/* Close Icon */}

            {/* <button
                            onClick={handleCloseModal}
                            className="mt-[50px] mb-[10px] mx-[13px] centerAll rounded-full bg-white w-[50px] h-[50px] border-[2px] border-orange-600"
                        >
                            <Image alt='close icon' src="/icons/close.svg" width={20} height={20} />
                        </button> */}

            <DetailsPageBottomSheetCalendar placeId={placeId} />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPageBottomSheet;
