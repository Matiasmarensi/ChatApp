import { useAuthContext } from "./authContex";
import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";

export const socketContext = createContext();

export const useSocketContext = () => {
  return useContext(socketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5000", {
        query: {
          userId: authUser.user._id,
        },
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => {
        if (socket) socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return <socketContext.Provider value={{ socket, onlineUsers }}>{children}</socketContext.Provider>;
};
