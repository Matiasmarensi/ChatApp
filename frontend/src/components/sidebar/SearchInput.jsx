import React from "react";
import { TbUserSearch } from "react-icons/tb";
const SearchInut = () => {
  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
      <button type="submit" className="btn btn-circle bg-sky-800 text-white">
        <TbUserSearch className="w-7 h-7 outline-none" />
      </button>
    </form>
  );
};

export default SearchInut;
