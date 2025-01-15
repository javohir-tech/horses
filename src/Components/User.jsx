import React from 'react'

export default function User({users, description}) {
  return (
    <div className='col-6'>
        <p>{users}</p>
        <p>{description}</p>
    </div>
  )
}
