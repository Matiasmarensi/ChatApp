import { useState } from "react";
const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({ fullnam, username, email, password, confirmedPassword, gender }) => {
    const success = handleInputsErrors({ fullnam, username, email, password, confirmedPassword, gender });
    if (!success) return;
  };
};

export default useSignup;

function handleInputsErrors({ fullnam, username, email, password, confirmedPassword, gender }) {
  if (!fullnam || !username || !email || !password || !confirmedPassword || !gender) {
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
}
