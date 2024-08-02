import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({ fullname, username, password, confirmedPassword, gender }) => {
    const success = handleInputsErrors({ fullname, username, password, confirmedPassword, gender });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, username, password, confirmedPassword, gender }),
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        toast.success("Sign up successful");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;

function handleInputsErrors({ fullname, username, password, confirmedPassword, gender }) {
  if (!fullname || !username || !password || !confirmedPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmedPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 8) {
    toast.error("Password must be at least 8 characters long");
    return false;
  }
  return true;
}
