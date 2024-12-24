import { userContext } from "./ComponentA.jsx";
import React,{useContext} from "react";


function ComponentC(){
  const {name,age} = useContext(userContext);

  return (

    <div className="component">
      C: Hi from {name}, I'm {age} years old!
    </div>
  )
}

export default ComponentC;