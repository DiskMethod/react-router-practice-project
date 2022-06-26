import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { usePrompt } from "../prompt.blocker";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [formFocused, setFormFocused] = useState(false);
  usePrompt("Are you sure you want to leave?", formFocused);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const navigate = useNavigate();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    navigate("/quotes");
  }

  const formFocusedHandler = () => {
    setFormFocused(true);
  };

  const finishSubmissionHandler = () => {
    setFormFocused(false);
  };

  return (
    <Card>
      <form
        onFocus={formFocusedHandler}
        className={classes.form}
        onSubmit={submitFormHandler}
      >
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={finishSubmissionHandler} className="btn">
            Add Quote
          </button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
