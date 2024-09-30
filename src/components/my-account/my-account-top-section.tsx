import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { EachUser } from "@/data/user-data";

interface PropType {
  userId: string;
}

const MyAccountTopSection: React.FC<PropType> = ({ userId }) => {
  const allUsers = useSelector(
    (state: RootState) => state.storeUsers.sliceUsers
  );

  const currentUser: EachUser | undefined = allUsers.find(
    (eachUser: EachUser) => eachUser.userId === userId
  );

  return (
    <>
      {currentUser ? (
        <div className="mx-[13px] flex flex-col items-center justify-center h-[250px] ">
          {/* Image Section */}
          <div className=" w-[100px] h-[100px] rounded-full  relative overflow-hidden">
            <Image
              src={`/images/${currentUser.userImageUrl}`}
              className="object-cover"
              alt="profile"
              priority
              fill
            />
          </div>

          {/* Name and Email */}
          <div className="bg-white/30 rounded-lg mb-[8px] mt-[10px] leading-[20px]">
            <h1 className="my-inter font-[600] text-[22px] text-center">{currentUser.userName}</h1>
            <p className="my-inter font-[400] text-[13px] text-center text-[#565656]">{currentUser.userEmail}</p>
          </div>

          {/* Edit Profile */}
          <button className="px-[13px] py-[8px] bg-[#EFEFEF] rounded-[37px]">
            <p className="my-inter font-[500] text-[13px] text-center">Edit Profile</p>
          </button>


        </div>
      ) : (
        <p>User not found</p>
      )}
    </>
  );
};

export default MyAccountTopSection;
