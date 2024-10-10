"use client";

import store from "@/app/store";
import MyAccountSettings from "@/components/my-account/my-account-settings";
import MyAccountTopSection from "@/components/my-account/my-account-top-section";
import "@/app/globals.css";
import { Provider } from "react-redux";

interface PropType {
  params: { userId: string };
}

const DetailsPage: React.FC<PropType> = ({ params }: PropType) => {
  const userId = params.userId;

  return (
    <Provider store={store}>
      <MyAccountTopSection userId={userId} />
      <MyAccountSettings />
    </Provider>
  );
};

export default DetailsPage;
