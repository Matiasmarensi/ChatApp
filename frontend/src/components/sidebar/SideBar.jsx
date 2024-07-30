import React from "react";
import SearchInut from "./SearchInput";
import Conversations from "./Conversations.jsx";

const SideBar = () => {
  return (
    <div>
      <SearchInut />
      <div className="divider px-3"></div>
      <Conversations />
      {/* 
      <LogoutButton /> */}
    </div>
  );
};

export default SideBar;
