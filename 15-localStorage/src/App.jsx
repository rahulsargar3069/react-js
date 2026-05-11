import React from 'react'

const App = () => {

  //set Item
  // localStorage.setItem('user','Rahul')
  
  //get Item
  // const user = localStorage.getItem("user")
  // console.log(user)
  
  //remover Item
  // localStorage.removeItem('user')

  const user ={
    userName:'Rahul',
    age:21,
    city:'Kalamboli'
  }
  localStorage.setItem('user',JSON.stringify(user))

  return (
    <div>
      <h1>1000</h1>
    </div>
  )
}

export default App
