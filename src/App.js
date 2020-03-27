import React from "react";
import AlbumList from "./components/album-list";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AlbumList />
      </header>
    </div>
  );
}

export default App;
