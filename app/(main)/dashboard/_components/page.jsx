import { redirect } from "next/navigation";
import React from "react";

const IndustryInsigthsPage = async() => {
  const {isOnboarded}  = await getUserOnboardingStatus();
  
      if(isOnboarded) {
          redirect('/dashboard');
      }
   
  return <div className="text-white">IndustryInsigthsPage</div>;
};

export default IndustryInsigthsPage;
