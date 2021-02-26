import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import data from "./data";
import Card from "./Card";
import Banner from "./Banner";

function Header() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = data.filter((data) =>
      data.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <>
      <div className="header">
        <img
          className="header__icon"
          src="https://onextrapixel.com/wp-content/uploads/2016/04/reactjs-thumb.jpg"
          alt=""
        />

        <div className="header__center">
          <input
            type="text"
            placeholder="Search Restaurant Here.... "
            value={searchTerm}
            onChange={handleChange}
          />
          <SearchIcon />
        </div>

        <div className="header__right">
          <p>Become a host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>
      </div>
      <Banner />

      {searchResults.map((data, index) => (
        <Card data={data} index={index} />
      ))}
    </>
  );
}

export default Header;
