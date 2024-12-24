import React, { useContext } from "react";
import { ThemeContext } from "./App";

function Child() {
  const theme = useContext(ThemeContext); // Access the context value
  return <div>The current theme is {theme}</div>;
}
export default Child;