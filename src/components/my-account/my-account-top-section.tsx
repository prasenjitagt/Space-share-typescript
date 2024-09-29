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
        <div className="mx-[13px] flex flex-col items-center justify-center h-[300px] check">
          {/* Image Section */}
          <div className=" w-[100px] h-[100px] rounded-full relative overflow-hidden">
            <Image
              src={`/images/${currentUser.userImageUrl}`}
              className="object-cover"
              alt="profile"
              priority
              fill
            />
          </div>

          {/* Name and Email */}
          <div className="bg-white/30 rounded-lg">
            <h1 className="text-2xl font-bold">{currentUser.userName}</h1>
            <p className="mt-2">{currentUser.userEmail}</p>
          </div>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </>
  );
};

export default MyAccountTopSection;
