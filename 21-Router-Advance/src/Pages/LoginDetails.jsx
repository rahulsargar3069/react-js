import React from 'react'
import { useParams } from 'react-router-dom'

const LoginDetails = () => {

    const param = useParams()

  return (
    <div>
      <h1> {param.id} Login Details </h1>
    </div>
  )
}

export default LoginDetails
