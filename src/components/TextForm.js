import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState(" ");
  // setText("Enter text");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
