'use client'

import store from '@/app/store';
import MyAccountTopSection from '@/components/my-account/my-account-top-section';
import { Provider } from 'react-redux'; 

interface PropType {
  params: { userId: string };
}

const DetailsPage: React.FC<PropType> = ({ params }: PropType) => {
  const userId = params.userId;


  return (
    <Provider store={store}> 
      <MyAccountTopSection userId={userId}/>
    </Provider>
  );
};

export default DetailsPage;
