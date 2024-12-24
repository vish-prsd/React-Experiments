import PropTypes from 'prop-types'
function Student({name='user',age=0,isStudent=false}){
  return(
    <div className = "student-data">
      <p>Name: {name}</p> 
      <p>Age={age} </p>
      <p>Is Student: {isStudent ? 'Yes' : 'No'} </p>
    </div>
  )
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}
//ive used default values in the parameter of the component function itself
// Student.defaultProps = {
//   name: "User",
//   age: 0,
//   isStudent: true,
// }

export default Student