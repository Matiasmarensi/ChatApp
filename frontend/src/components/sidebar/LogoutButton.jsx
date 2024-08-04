import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { logout, loading } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <TbLogout2 className="w-6 h-6 text-white cursor-pointer" onClick={logout} />
      ) : (
        <div className="loading loading-spinner"></div>
      )}
    </div>
  );
};

export default LogoutButton;
