import React from 'react'

const App = () => {
  
  const OnScrolling = (elem)=>{
    if(elem > 0){
       console.log("Siddha Scrolling...",elem)
    }else{
      console.log("Utta Scrolling...",elem)
    }
  }
  return (
    <div onWheel={(elem)=>{
        OnScrolling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}
export default App
