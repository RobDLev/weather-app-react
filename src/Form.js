import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <div className="row">
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="ex. Paris, France"
              id="city-search-bar"
            />
            <label>Search a Different Location</label>
            <input
              className="btn btn-primary"
              type="submit"
              value="Search"
              id="search-button"
            />
            <button
              type="button"
              className="btn btn-success"
              id="current-city-button"
            >
              Current City
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
