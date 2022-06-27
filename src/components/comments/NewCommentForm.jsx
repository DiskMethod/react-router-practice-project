import { useRef } from "react";
import { useParams } from "react-router-dom";

import classes from "./NewCommentForm.module.css";
import useHttp from "../hooks/use-http";
import { addComment } from "../lib/api";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest: sendRequestAddComment } = useHttp(addComment);
  const params = useParams();

  const submitFormHandler = (e) => {
    e.preventDefault();

    // optional: Could validate here

    // send comment to server
    sendRequestAddComment({
      quoteId: params.id,
      commentData: {
        text: commentTextRef.current.value,
      },
    });
    props.onFinish();
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
