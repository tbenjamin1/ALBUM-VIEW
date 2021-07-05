import React, { useState } from "react";
import "./Search.css";

export default function SearchForm(props) {
  const [SearchId, setSearchId] = useState("");

  const onSubmitAlbumIdHandler = (event) => {
    event.preventDefault();
    if (!Number.isInteger(+SearchId) || +SearchId < 0) {
      // setCheckId(true);

      return;
    }
    setSearchId("");
    props.onGetAlbumId(SearchId);
  };

  const onAlbumIdChangeHandler = (event) => {
    const value = event.target.value;
    setSearchId(value);
  };
  return (
    <div className="container">
      <div className="form-container">
        <h1>ALBUM MANAGER</h1>
        <form onSubmit={onSubmitAlbumIdHandler}>
          <div className="container-search">
            <input
              className=""
              value={SearchId}
              onChange={onAlbumIdChangeHandler}
              id="search"
              type="text"
              placeholder=".......album search"
            />

            <button className="btn-search" type="submit">
              SEARCH
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
