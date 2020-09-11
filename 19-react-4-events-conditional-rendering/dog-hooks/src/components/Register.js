import React, { useState } from 'react'

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(true)

  const handleRegisteredChange = () => setIsRegistered(!isRegistered)

  return (
    <React.Fragment>
      <button onClick={handleRegisteredChange}>
        {isRegistered ? 'Registered' : 'Unregistered'}
      </button>
    </React.Fragment>
  )
}

export default Register
