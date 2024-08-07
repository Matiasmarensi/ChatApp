import React from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  console.log("mensajeeee", messages);

  return (
    <div className="px-4 flex-1 overflow-auto ">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />

      <Message />
      <Message />
    </div>
  );
};

export default Messages;
