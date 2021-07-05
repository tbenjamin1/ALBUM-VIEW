import React, { useState } from "react";
import "./App.css";
import SearchForm from "./components/searchform/SearchForm";
import Albums from "./components/albums/Albums";

const App = () => {
  const [albumId, setAlbumId] = useState("");
  const getAlbumId = (id) => {
    setAlbumId(id);
  };
  return (
    <div className="App">
      <SearchForm onGetAlbumId={getAlbumId} />
      <Albums searchId={albumId} />
    </div>
  );
};

export default App;
