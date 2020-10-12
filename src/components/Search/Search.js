/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function Search({ inputChanged }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const sendInputValue = (e) => {
    if (e.key === "Enter") {
      inputChanged(inputValue);
    }
  };

  return (
    <div className="search">
      <div className="search__bar">
        <a href="#">
          <span className="search__bar--icon-location">
            <ion-icon name="location-sharp"></ion-icon>
          </span>
        </a>

        <input
          className="search__bar--input"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={sendInputValue}
          type="text"
          title="Search"
          placeholder="City Name"
        />
        <a href="#">
          <span className="search__bar--icon-search">
            <ion-icon name="search-sharp"></ion-icon>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Search;

/*
import "antd/dist/antd.css";
// import "./index.css";
import { Input, AutoComplete } from "antd";
import cities from "cities.json";
const list = cities.map((x) => {
  return { value: `${x.name}, ${x.country}` };
});
  const options = list;
<AutoComplete
  style={{
    width: "515px",
    // borderRadius: "100px",
  }}
  className="search__bar--input-data"
  notFoundContent="Not Found"
  autoFocus={true}
  options={options}
  placeholder="Search"
  filterOption={(inputValue, option) =>
    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
  }
></AutoComplete>

.search {
  &__bar {
    margin: 0px auto;
    width: 90%;
    max-width: 55rem;
    & > .search__bar--input-data {
      border-radius: 100px;
    }

    &--icon-location {
      position: relative;

      & > ion-icon {
        font-size: 2.1rem;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 10%;
        right: 10px;
      }
    }
    &--icon-search {
      position: relative;

      & > ion-icon {
        font-size: 2.1rem;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        right: 470px;
      }
    }
  }
}
*/
