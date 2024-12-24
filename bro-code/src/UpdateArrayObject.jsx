import React, {useState} from 'react';

function UpdateArrayObject(){

const [cars, setCars] = useState([{
                                    year: 2024,
                                    make: 'GMC',
                                    model: 'Humvee',
                                  },
                                  {
                                    year: 2010,
                                    make: 'Honda',
                                    model: 'Civic 1.8V',
                                  }
                                  ]);
const [carYear, setCarYear] = useState(new Date().getFullYear());
const [carMake, setCarMake]= useState('');
const [carModel, setCarModel] = useState('');

const handleAddCar = () => {
  const newCar= {year: carYear,
                 make: carMake,
                 model: carModel
                };

  setCars((cars) => [...cars,newCar]);

  setCarYear( new Date().getFullYear() );  
  setCarMake('');
  setCarModel('');
 
}

const handleCarYear = (e) => {
  setCarYear(() => e.target.value);
}

const handleCarMake = (e) => {
  setCarMake(() => e.target.value);
}

const handleCarModel = (e) => {
  setCarModel(() => e.target.value);
}

const handleRemoveCar = (i) => {
  setCars(cars.filter((_,index) => index !== i));
}

  return(
    <>
      <h1>Array Of Objects</h1>
      <ul>
        {cars.map((car,index) => 
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        )}
      </ul>
      

      <input type="number" value={carYear} onChange={handleCarYear}/><br />

      <input type="text" placeholder='Enter car make' value = { carMake }onChange={handleCarMake}/><br />

      <input type="text" placeholder='Enter car model' value = { carModel }onChange={handleCarModel}/><br />

      <button onClick={handleAddCar}>Add</button>
    </>
  )

}

export default UpdateArrayObject;