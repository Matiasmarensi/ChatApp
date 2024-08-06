import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <div className="loading loading-spinner"></div>
      ) : (
        conversations.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} lastIdx={conversations.length - 1} />
        ))
      )}
    </div>
  );
};
export default Conversations;
