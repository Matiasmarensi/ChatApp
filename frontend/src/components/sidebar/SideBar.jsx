import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import { TbLogout2 } from "react-icons/tb";

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default SideBar;
