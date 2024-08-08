import React, { useState } from "react";
import { TbUserSearch } from "react-icons/tb";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInut = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 1) {
      toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) => c.username?.toLowerCase().includes(search.toLowerCase()));
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("Conversation not found");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        onChange={handleSearchChange}
        value={search}
      />
      <button type="submit" className="btn btn-circle bg-sky-800 text-white">
        <TbUserSearch className="w-7 h-7 outline-none" />
      </button>
    </form>
  );
};

export default SearchInut;
