import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='Parent'>
       <Card user="Rahul Sargar" age={21} img='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
       <Card user="Kashiling Sargar" age={19} img='https://images.unsplash.com/photo-1776779399573-0c19831317df?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       <Card user="Chatrapati Shavaji Maharaj" age={40} img='https://images.unsplash.com/photo-1632133465018-a66d7cb26af7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
