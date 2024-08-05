import { useState } from "react";
import { useAuthContext } from "../context/authContex";
import toast from "react-hot-toast";
const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      console.log(response);
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    login,
  };
};

export default useLogin;
