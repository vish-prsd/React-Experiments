import React, {useState} from 'react';

function ArrayState(){
  const [foods,setFoods] = useState(['Apple','Mango','Grapes']);


  const handleAddItem = () => {
    const foodItem = document.getElementById('food-item').value;
    document.getElementById('food-item').value = '';
    setFoods((f) => [...f,foodItem]);
  }
  const handleRemoveItem = (i) => {
    setFoods(foods.filter((_,index) => index != i));
  }

  return(
    <>
      <h1>Array List</h1>
        {foods.map((food,index) => 
        <li key={index} onClick={() => handleRemoveItem(index) }>
          {food}
        </li>
        )}
      <input type="text" id='food-item' placeholder='Enter the food item.'/>
      <button onClick={() => handleAddItem()}>Add</button>
    </>
    
  )
}

export default ArrayState;


// import React,{useState} from 'react';

// function ArrayState(){

//   const [foods,setFoods] = useState(['Apple','Mango','Fig']);

//   const handleAddItem = () => {
//     const newFood = document.getElementById('food-item').value;
//     document.getElementById('food-item').value = '';
//     setFoods((f) => [...f,newFood]);
//   }

//   const handleRemoveItem = (index) => {
//     setFoods(foods.filter((_,i) => i != index));
//   }

//   return(
//     <>
//       <h1>Food List</h1>
//       {foods.map((food,index) => 
//       <li key={index} onClick={() => handleRemoveItem(index)}>
//         {food}
//       </li>)}
//       <input placeholder='Enter the food name' id='food-item'/>
//       <button onClick={handleAddItem}>Add</button>
//     </>
//   );

// }

// export default ArrayState;