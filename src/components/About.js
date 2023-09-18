import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color == "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About WordCraft
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              <strong>
                WordCraft is a versatile utility that simplifies your daily life
                by giving you the power to manipulate text as you wish. Whether
                you're crafting documents, correcting errors, organizing
                information, or converting text formats, TextUtils streamlines
                the process. It's a valuable companion for professionals,
                students, and writers, enabling you to enhance the clarity and
                impact of your messages while saving time and effort. With
                features like search and replace, advanced text manipulation,
                and formatting assistance, TextUtils empowers you to achieve
                your text-related goals effortlessly and efficiently.
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Some Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <ul>
                <li className="my-2">Change lowercase text to uppercase.</li>
                <li>Change uppercase text to lowercase.</li>
                <li className="my-2">Remove Extra Space.</li>
                <li>Copy text to clipboard.</li>
                <li className="my-2">Preview the text</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatibility
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This <strong>Text Utility</strong> software works in any web
              browsers such as Chrome, Firefox, Internet Explorer, Safari,
              Opera. It suits to count characters in facebook, blog, books,
              excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button onClick={toggleStyle} className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}
