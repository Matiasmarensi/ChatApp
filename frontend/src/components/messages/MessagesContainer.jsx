import React from "react";
import Messages from "./Messages";

const MessagesContainer = () => {
  return (
    <div className=" md:min-w-[450px] flex flex-col">
      <>
        <div className=" bg-slate-300 px-4 py-2 mb-2">
          <span className="label-text">To:</span>
          <span className="text-gray-300 font-bold">Juan</span>
        </div>
        <Messages />
      </>
    </div>
  );
};

export default MessagesContainer;
