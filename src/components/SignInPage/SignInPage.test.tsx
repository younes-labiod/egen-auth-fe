import React from "react";
import ReactDOM from "react-dom";
import SignInPage from "./SignInPage";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignInPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
