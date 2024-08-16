import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessagesContainer from "../../components/messages/MessagesContainer";

const Home = () => {
  console.log("2");
  return (
    <div>
      <div className=" p-2 flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-zinc-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0.5">
        <SideBar />
        <MessagesContainer />
      </div>
    </div>
  );
};

export default Home;
