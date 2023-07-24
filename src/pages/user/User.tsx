import React from 'react'
import "./user.scss"
import Single from '../../components/single/Single'
import { singleUser } from '../../data'
const User = () => {

  // Fetch Data and send to single component
  return (
    <div>
      <Single {...singleUser} />
    </div>
  )
}

export default User
