import React from "react";
import PropTypes from "prop-types";

import "./Post.css";

function Post({ author, date, content, comments }) {
  return (
    <div className="post-content">
      <div className="post-header">
        <img src={author.avatar} alt="Avatar" />
        <div className="post-header-info">
          <strong>{author.name}</strong>
          <small>{date}</small>
        </div>
      </div>

      <p>{content}</p>

      <ul className="comment">
        {comments.map(comment => (
          <li key={comment.id}>
            <img src={comment.author.avatar} alt="Avatar" />
            <p>
              <strong>{comment.author.name}</strong> {comment.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  comments: PropTypes.array
};

export default Post;
