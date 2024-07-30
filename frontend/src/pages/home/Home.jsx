import React from "react";
import SideBar from "../../components/sidebar/SideBar";

const Home = () => {
  return (
    <div>
      <div className=" p-2 flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <SideBar />
        {/* <MessageContainer /> */}
      </div>
    </div>
  );
};

export default Home;
