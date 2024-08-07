import React from "react";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={
          "flex gap-3 items-center hover:bg-sky-200 rounded px-2 p-y cursor-pointer" + (isSelected ? " bg-sky-500" : "")
        }
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="avatar" />
          </div>
        </div>
        <div className=" flex flex-col  flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-500 ">{conversation.username}</p>
            <span className="text-lg ">emoji</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
