import React from "react";
import UserNav from "../Components/Foryou/UserNav";
import UserLanding from "../Components/Foryou/UserLanding";
import Search from "../Components/Search";
import Maininfo from "../Components/Foryou/maininfo";
import Footer from "../Components/Footer";

export default function foryou() {
  return (
    <>
      <div className="relative flex flex-col ml-[200px] w-[calc(100% - 200px)">
        <UserLanding />
        <Footer />

      </div>
    </>
  );
}
