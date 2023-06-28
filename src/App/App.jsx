import React from "react";
import { FetchLiked } from "./FetchLiked";
import { ReqAccessToken } from "./reqAccessToken";
import "./App.css";

const App = () => {
  return (
    <div>
      <ReqAccessToken />
      <h1 className="fet-title">Features</h1>
      <button onClick={FetchLiked} className="fetch-liked">
        Liked songs
      </button>
    </div>
  );
};

export default App;
