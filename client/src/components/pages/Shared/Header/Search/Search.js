import React from "react";
import "./Search.css";
const Search = () => {
  return (
    <div>
      <form className="search">
        <input
          type="checkbox"
          id="toggleSearch"
          className="search__toggle"
          hidden
        />
        <div className="search__field">
          <label htmlFor="toggleSearch" className="search__label">
            <span className="search__close"></span>
          </label>
          <input
            type="text"
            className="search__input"
            placeholder="What are you looking for?"
          />
          <label htmlFor="toggleSearch" className="search__label">
            <div className="search__button">
              <div className="search__icon search__button--toggle"></div>
            </div>
            <button className="search__button search__button--submit">
              <div className="search__icon"></div>
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Search;
