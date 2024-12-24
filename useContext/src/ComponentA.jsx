import ComponentB from "./ComponentB.jsx"
import React, {useState,createContext} from 'react';

export const userContext = createContext();
function ComponentA() {
    const [user,setUser] = useState({name: "vishnu", age: "22"});

  return ( 
  <div className="component">
    A: Hi from A!
    <userContext.Provider value={user}>
      <ComponentB></ComponentB>
    </userContext.Provider>
  </div>
    
  )
}

export default ComponentA;