import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <>
      <form className="relative flex gap-2">
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-full py-2 pl-4 pr-8 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button type="submit">
          <Search
            className="absolute right-3  top-2.5 text-gray-400 hover:text-gray-300 hover:scale-150  hover:transition "
            size={20}
          />
        </button>
      </form>
    </>
  );
};
export default SearchBar;
