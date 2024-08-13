import { useAuthContext } from "../../context/authContex";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  if (!authUser) return null;

  const fromMe = message.senderId === authUser.user._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe ? authUser.user.profilePic : selectedConversation?.profilePic;

  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-500";
  const shakeClass = message.shouldShake ? "shake" : "";
  const formattedTime = message.createdAt ? new Date(message.createdAt).toLocaleTimeString() : "Now";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble pb-2 text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
      <div className="chat-footer text-slate-400 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
};

export default Message;
