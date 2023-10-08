import React from "react";
import ReactDOM from "react-dom/client";
/*
 *
 *
 *
 *
 */
const heading = React.createElement(
  "h1",
  {},
  "this is a place where you can find the react application"
);

const root = ReactDOM.createRoot(document.getElementById("root")); // virtual dom

/*
 *
 * <div class="parent">
 *      <div class="child">
 *          <h1></h1>
 *      </div>
 * </div>
 *
 *
 */

const nestedHeading = React.createElement("div", { className: "parent" }, [
  React.createElement(
    "div",
    { className: "child1", key: 1 },
    React.createElement("h1", {}, "Nested")
  ),
  React.createElement(
    "div",
    { className: "child2", key: 2 },
    React.createElement("h1", {}, "Nested")
  ),
]);

root.render(nestedHeading);
