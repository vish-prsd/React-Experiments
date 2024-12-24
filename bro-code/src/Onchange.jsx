import React, {useState} from "react";

function Onchange(){
  const [name, setName] = useState('User')
  const [age, setAge] = useState(18)
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState('delivery');

  const handleNameChange = (e) => setName(e.target.value);//this is a function
  const handleAgeChange = e => setAge(e.target.value);
  const handleCommentChange = e => setComment(e.target.value);
  const handlePaymentChange = e => setPayment(e.target.value);
  const handleShipping = e => setShipping(e.target.value);
  return(
  <>
    <input value={name}  onChange={handleNameChange}/>
      <p>Name: {name}</p>

    <input type="number" value={age} onChange={handleAgeChange}/>
      <p>Age: {age}</p>

    <textarea value={comment} onChange={handleCommentChange} 
      placeholder="Enter delivery instructions"/>
      <p>Comment: {comment}</p>

    <select value={payment} onChange={handlePaymentChange}>
      <option value="">Select an option</option>
      <option value="Visa">Visa</option>
      <option value="Rupay">Rupay</option>
      <option value="Mastercard">Mastercard</option>
      <option value="COD">COD</option>
    </select>
      <p>Payment Method: {payment}</p>

    <label>
      <input type="radio" value = "pickup"
        checked = {shipping === 'pickup'}
        onChange = {handleShipping}
      />
      Pickup
    </label>
    <label>
      <input type="radio" value = "delivery"
        checked = {shipping === 'delivery'}
        onChange = {handleShipping}
      />
      Delivery
    </label>
      <p>Shipping: {shipping}</p>
      
  </>
   
  )
}

export default Onchange;