import ComponentC  from "./ComponentC.jsx";
import { userContext } from "./ComponentA.jsx";
import React,{useContext} from "react";

function ComponentB(){
  const {name,age} = useContext(userContext);

  return (
    <div className="component">
     B: Hi from {name}, I'm {age} years old!
      <ComponentC></ComponentC>
    </div>
  )
}

export default ComponentB;