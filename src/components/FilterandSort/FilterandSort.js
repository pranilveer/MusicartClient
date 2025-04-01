import React from "react";
import style from "./FilterandSort.module.css";

import gridIcon from "../../assets/images/grid1.png";
import gridIcon1 from "../../assets/images/grid2.png";
import listIcon from "../../assets/images/list1.png";
import listIcon1 from "../../assets/images/list2.png";

const FilterandSort = ({
  selectedHeadphoneType,
  setSelectedHeadphoneType,
  selectedCompany,
  setSelectedCompany,
  selectedColor,
  setSelectedColor,
  selectedPrice,
  setSelectedPrice,
  sortCriteria,
  setSortCriteria,
  handleDropdownChange,
  isGridView,
  setGridView,
  setListView
}) => {
  return (
    <div className={style.filtersContainer}>
      <div className={style.viewtype}>
        <div onClick={setGridView} className={style.gridIcon}>
        <img src={isGridView ? gridIcon1 : gridIcon} alt="Grid View" />
        </div>
        <div onClick={setListView} className={style.gridIcon1}>
        <img src={isGridView ? listIcon : listIcon1} alt="List View" />
        </div>
      </div>
      <div className={style.filterGroupDiv}>
      <div className={style.filterGroup}>
        <select
          id="headphoneType"
          className={style.filterSelect}
          value={selectedHeadphoneType}
          onChange={(e) => handleDropdownChange(e, setSelectedHeadphoneType)}
        >
          <option value="" disabled hidden>Type</option>
          <option value="">Featured</option>
          <option value="Over-ear headphone">Over-ear headphone</option>
          <option value="In-ear headphone">In-ear headphone</option>
          <option value="On-ear headphone">On-ear headphone</option>
        </select>
      </div>

      <div className={style.filterGroup}>
        <select
          id="company"
          className={style.filterSelect}
          value={selectedCompany}
          onChange={(e) => handleDropdownChange(e, setSelectedCompany)}
        >
          <option value="" disabled hidden>Company</option>
          <option value="">Featured</option>
          <option value="Sony">Sony</option>
          <option value="JBL">JBL</option>
          <option value="boAt">boAt</option>
          <option value="ZEBRONICS">Zebronics</option>
        </select>
      </div>

      <div className={style.filterGroup}>
        <select
          id="color"
          className={style.filterSelect}
          value={selectedColor}
          onChange={(e) => handleDropdownChange(e, setSelectedColor)}
        >
          <option value="" disabled hidden>Colour</option>
          <option value="">Featured</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
          <option value="Olive Green">Olive Green</option>
          <option value="Red">Red</option>
        </select>
      </div>

      <div className={style.filterGroup}>
        <select
          id="price"
          className={style.filterSelect}
          value={selectedPrice}
          onChange={(e) => handleDropdownChange(e, setSelectedPrice)}
        >
          <option value="" disabled hidden>Price</option>
          <option value="">Featured</option>
          <option value="0-1000">₹0 - ₹1000</option>
          <option value="1000-10000">₹1000 - ₹10,000</option>
          <option value="10000-20000">₹10,000 - ₹20,000</option>
        </select>
      </div>
    </div>

      <div className={style.sortContainer}>
        <label htmlFor="sortBy" className={style.sortLabel}>
          Sort by:
        </label>
        <select
          id="sortBy"
          className={style.sortSelect}
          value={sortCriteria}
          onChange={(e) => handleDropdownChange(e, setSortCriteria)}
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Lowest</option>
          <option value="price-desc">Price: Highest</option>
          <option value="name-asc">Name: A-Z</option>
          <option value="name-desc">Name: Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default FilterandSort;
