import React from 'react'

const App = () => {

  const submitHandling = (e) => {
    e.preventDefault()
    console.log("Submit..")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandling(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
