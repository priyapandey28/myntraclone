import React from "react";
import classes from "./Filter.module.css";
import { CATEGORY_FILTER, GENDER_FILTER } from "../../global-Variable";

const Filter = (props) => {
  const { genderFilter, onGenderFilterChange, categoryFilter, onCategoryFilterChange } = props;

  const getGenderFilter = () => {
    return GENDER_FILTER.map((element) => {
      return (
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={element.id}
            checked={genderFilter === element.id}
            onChange={() => onGenderFilterChange(element.id)}
          />
          <label class="form-check-label" for={element.id}>
            {element.label}
          </label>
        </div>
      );
    });
  };

  const getCategoryFilter = () => {
    return CATEGORY_FILTER.map((element) => {
      return (
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id={element.id}
            checked={categoryFilter.includes(element.id)}
            onChange={()=> onCategoryFilterChange(element.id)}
          />
          <label class="form-check-label" for={element.id}>
            {element.label}
          </label>
        </div>
      );
    });
  };

  return (
    <div className={classes.filterSection}>
      <div className={classes.genderFilterSection}>
        <h6>Gender</h6>
        {getGenderFilter()}
      </div>
      <div className={classes.categoryFilterSection}>
        <h6>Category</h6>
        {getCategoryFilter()}
      </div>
    </div>
  );
};

export default Filter;
