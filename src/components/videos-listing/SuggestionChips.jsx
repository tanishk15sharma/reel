import axios from "axios";
import React, { useEffect } from "react";
import { useFilters } from "../../contexts/filters";
import "./SuggestionChips.css";
const SuggestionChips = () => {
  const { filterState, filterDispatch } = useFilters();

  // useEffect(() => {
  //   filterDispatch({
  //     type: "SET_ACTIVE_BUTTON",
  //     payload:
  //       filterState.categories.length !== 0
  //         ? filterState.categories[0]._id
  //         : "",
  //   });
  // }, [filterState.categories]);

  return (
    <div className="chips-div">
      {filterState.categories.map(({ categoryName, _id }) => (
        <button
          className={`btn btn-round ${
            _id === filterState.activeBtn ||
            categoryName === filterState.activeBtn
              ? "active"
              : ""
          }`}
          key={_id}
          onClick={() => {
            filterDispatch({ type: "CATEGORY", payload: categoryName });
            filterDispatch({ type: "SET_ACTIVE_BUTTON", payload: _id });
          }}
        >
          {categoryName}
        </button>
      ))}
    </div>
  );
};

export { SuggestionChips };
