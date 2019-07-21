import React from "react";
import "./Feed.css";

import Post from "./Post.js";

function Header() {
  return (
    <div className="feed-body">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Header;
