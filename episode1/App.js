import React from "react";
import ReactDOM from "react-dom/client";

// this is how you create react element using react
const heading = React.createElement("h1", {}, "Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"));

// this is how you create react element using JSX
// jsx is transpiled so that js engine can understand - parcel - babel -> jsx -> react element
// jsx -> babel transpiled to react.createElement -> JS-object -> html element(root.render());
const jsxHeading = <h1>Namaste React using JSX</h1>;

// functional component
const Heading = () => <h1>heading component</h1>;

// component composition - passing component as props to other component
const HeadingComponent = ({ children }) => (
  <div id="container">
    {children} {/* component composition */}
    <h1>functional component</h1>
  </div>
);

root.render(<HeadingComponent children={<Heading />} />);
