import UserGreeting from '../UserGreeting.jsx';
import Student from './Student.jsx'
import List from './List.jsx'
import Button from './Button.jsx';
import MyComponent from './MyComponent.jsx'
import Onchange from './Onchange.jsx';
import ColorPicker from './ColorPicker.jsx';
import ArrayState from './ArrayState.jsx';
import UpdateArrayObject from './UpdateArrayObject.jsx';

function App(){
  const fruits = [
    {id:1, name:'Apple', cal: 90},
    {id:2, name:'Orange',cal: 80},
    {id:3, name:'Guava',cal: 90},
    {id:4, name:'Peach',cal: 130},
    {id:5, name:'Grapes',cal: 120},
    {id:6, name:'Mango',cal: 140}
  ];
  const vegetables = [
    {id:1, name:'Tomato', cal: 100},
    {id:2, name:'Onion',cal: 75},
    {id:3, name:'Beans',cal: 80},
    {id:4, name:'Chilli',cal: 140},
    {id:5, name:'Ladies Finger',cal: 90},
    {id:6, name:'Beetroot',cal: 135}
  ];

  return(
    <>
      <UserGreeting userName='Vishnu' isLoggedIn = {true}/>
      <UserGreeting userName='Vishnu' isLoggedIn = {false}/>
      <Student name="Vishnu" age={23} isStudent={true}/>
      <Student name="Karthik" age={27} isStudent={false}/>
      <Student name="Vani" age={26} isStudent={false}/>
      <Student name="Suresh" age={24} isStudent={false}/>
      <Student name="Saloni" age={23} isStudent={true}/>
      <Student/>

      {/* <List items={fruits} category='Fruits'/> */}
      {/* {fruits.length > 0 ? <List items={fruits} category='Fruits'/> : null} //this is same as below but uses AND condition*/}
      {fruits.length > 0 && <List items={fruits} category='Fruits'/>}
      {vegetables.length > 0 && <List items={vegetables} category='Vegetables'/> }
    
      <Button></Button>

      <MyComponent></MyComponent>
      <br/><br/>
      <Onchange></Onchange>

      <ColorPicker></ColorPicker> 

      <ArrayState></ArrayState>
      <br/><br/>
      <UpdateArrayObject></UpdateArrayObject>
      
    </>
  )
}

export default App;