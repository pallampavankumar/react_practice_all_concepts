import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const {id} =useParams();
  return (
    <div>
      <p>user is is {id}</p>
    </div>
  )
}

export default UserDetails
