import { useState } from "react";
import { useAuthContext } from "../context/authContex";
import toast from "react-hot-toast";
const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    const success = handleInputsErrors(username, password);
    if (!success) return;
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
      if (!response.ok) {
        toast.error("Invalid credentials");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      setLoading(false);
    } catch (error) {
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

function handleInputsErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
