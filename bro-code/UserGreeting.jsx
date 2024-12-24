import PropTypes from 'prop-types'

function UserGreeting({userName='User', isLoggedIn=false})
{
  const loggedInMessage = <h2 className='loggedInH2'>
                            Welcome {userName}!
                          </h2>
  const loggedOutMessage = <h2 className='loggedOutH2'>
                            Please Login to continue!
                          </h2> 

  return isLoggedIn ? loggedInMessage : loggedOutMessage
}

UserGreeting.propTypes = {
  userName: PropTypes.string,
  isLoggedIn: PropTypes.bool
}

export default UserGreeting