import React from "react";

import { Link } from "react-router-dom";

const CommentButton = () => {
  return (
    <div className="centered">
      <Link className=" btn--flat" to="comments">
        Comments
      </Link>
    </div>
  );
};

export default CommentButton;
