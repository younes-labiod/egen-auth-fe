import React from "react";
import ReactDOM from "react-dom";
import ApplicationPage from "./ApplicationPage";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ApplicationPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
