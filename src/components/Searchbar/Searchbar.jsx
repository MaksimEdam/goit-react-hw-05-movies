import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      toast("Enter your query!");
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <ImSearch />
        </button>

        <input
          type="text"
          autoComplete="off"
          value={searchQuery}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
