import { useAuthContext } from "./authContex";
import { createContext, useState, useEffect } from "react";
import io from "socket.io-client";

export const socketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5000");
      setSocket(socket);
      return () => {
        if (socket) socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, []);

  return <socketContext.Provider value={{ socket, onlineUsers }}>{children}</socketContext.Provider>;
};
