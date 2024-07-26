import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: reciverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, reciverId] },
    });
    if (!conversation) {
      const newConversation = Conversation({
        participants: [senderId, reciverId],
      });

      const newMessage = new Message({
        senderId,
        reciverId,
        message,
      });
      console.log(newMessage);
      if (newMessage) {
        newConversation.messages.push(newMessage._id);
        return res.status(201).json(newMessage);
      }
      await newConversation.save();
      return res.status(201).json(newConversation.messages);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error sending message" });
  }
};
