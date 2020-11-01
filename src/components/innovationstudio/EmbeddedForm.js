import React from "react";

const EmbeddedForm = props => {
  return (
    <div
      style={{
        backgroundColor: "#d9e0ec",
        margin: "2rem",
        padding: "2rem 2rem 2rem 1rem"
      }}
    >
      <ol style={{ fontSize: "1.3rem" }}>
        {props.questions.map(q => (
          <li>
            <div className="Phoenix-sub-header">{q.q}</div>
            <br />
            <div style={{ fontSize: "1rem" }}>{q.a}</div>
            <br />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default EmbeddedForm;
