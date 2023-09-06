import React from "react";
import "./Search.css";

const Searchjjjjjjjjj = () => {
  document.addEventListener("click", (e) => {
    const toggle = document.querySelector(".searchweepoka__toggle");
    const input = document.querySelector(".searchweepoka__input");
    const clickedElement = e.target;

    if (clickedElement == toggle) {
      input.value = "";
      return;
    }

    const issearchweepokaField = clickedElement.closest(
      ".searchweepoka__field"
    );

    if (!issearchweepokaField) {
      toggle.checked = false;
      input.value = "";
    }
  });
  return (
    <div>
      <form className="searchweepoka">
        <input
          type="checkbox"
          id="togglesearchweepoka"
          className="searchweepoka__toggle"
          hidden
        />
        <div className="searchweepoka__field">
          <label htmlFor="togglesearchweepoka" className="searchweepoka__label">
            <span className="searchweepoka__close"></span>
          </label>
          <input
            type="text"
            className="searchweepoka__input"
            placeholder="What are you looking for?"
          />
          <label htmlFor="togglesearchweepoka" className="searchweepoka__label">
            <div className="searchweepoka__button">
              <div className="searchweepoka__icon searchweepoka__button--toggle"></div>
            </div>
            <button className="searchweepoka__button searchweepoka__button--submit">
              <div className="searchweepoka__icon"></div>
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Searchjjjjjjjjj;
