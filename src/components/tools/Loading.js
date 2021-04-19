import React from "react";

// type prop: "github", "linkedin", "", etc...

/* must make corresponding css class (e.g. github-icon, mail-icon...)
in app.scss for each new iconb*/

function Loading(props) {
  return (
    <center>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "10rem",
          width: "10rem",
        }}
      >
        <div
          style={{
            height: "10rem",
            width: "10rem",

            position: "absolute",
            textAlign: "center",
          }}
        >
          <a
            className={"bar-left"}
            style={{
              float: "left",
              height: "10rem",
              width: "10rem",
              position: "absolute",
              left: 0,
            }}
            href={props.href}
          ></a>
          <div style={{ overflow: "hidden", height: "100%", width: "100%" }}>
            <a
              className={"loading"}
              style={{
                float: "left",
                height: "100%",
                width: "100%",
                display: "block",
                margin: "auto",
              }}
              href={props.href}
            ></a>
            <a
              className={"loading"}
              style={{
                float: "left",
                height: "100%",
                width: "100%",
                display: "block",
                margin: "auto",
              }}
              href={props.href}
            ></a>
          </div>

          <a
            className={"bar-right"}
            style={{
              float: "left",
              height: "10rem",
              width: "10rem",
              position: "absolute",
              right: 0,
            }}
            href={props.href}
          ></a>
        </div>
      </div>
    </center>
  );
}

export default Loading;
