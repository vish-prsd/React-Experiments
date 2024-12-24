import PropTypes from 'prop-types';

function List({items=[], category='Category'}){


  // All Sort and Filter methods are inside this...
  //fruits.sort((a,b) =>  a.name.localeCompare(b.name)); //ALPHABETICALLY
  // fruits.sort((a,b) =>b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
  // fruits.sort((a,b) => a.cal - b.cal); //NUMERIC
  // fruits.sort((a,b) => b.cal - a.cal); //REVERSE NUMERIC

  // const lowCalFruits = fruits.filter(fruit => fruit.cal<100)
  // const highCalFruits = fruits.filter(fruit => fruit.cal>100)
  
  // const lowCal = lowCalFruits.map(fruit => <li key={fruit.id}>
  //                                         {fruit.name}: &nbsp;
  //                                         <b>{fruit.cal}</b>
  //                                       </li>
  //                                 )
  // const highCal = highCalFruits.map(fruit => <li key={fruit.id}>
  //                                             {fruit.name}: &nbsp;
  //                                             <b>{fruit.cal}</b>
  //                                           </li>
  //                                 )
                                
const listItems = items.map(item => <li key={item.id}>
                                    {item.name}: &nbsp;
                                    <b>{item.cal}</b>
                                  </li>
                        )

  return( <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
          </>
  )
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            cal: PropTypes.number
                                            }))
}

export default List