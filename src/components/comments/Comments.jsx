import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";
import useHttp from "../hooks/use-http";
import { getAllComments } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {
    sendRequest: sendRequestAllComments,
    status: statusAllComments,
    data: comments,
    error: errorAllComments,
  } = useHttp(getAllComments, true);
  const params = useParams();

  useEffect(() => {
    sendRequestAllComments(params.id);
  }, [sendRequestAllComments, params.id]);

  const startAddCommentHandler = (e) => {
    setIsAddingComment(true);
  };

  const finishAddCommentHandler = (e) => {
    setIsAddingComment(false);
    sendRequestAllComments(params.id);
  };

  if (statusAllComments === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (errorAllComments) {
    return <p className="centered focused">{errorAllComments}</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onFinish={finishAddCommentHandler} />}
      {comments && <CommentsList comments={comments} />}
    </section>
  );
};

export default Comments;
