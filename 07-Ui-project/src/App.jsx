import React from 'react'
import Section2 from './Components/Section2/Section2'
import Section1 from './Components/Section1/section1'

const App = () => {
  const users =[
    {
      img:'https://i.pinimg.com/736x/f3/71/ae/f371ae2a0a12999061db2a6c1e7626c5.jpg',
      intro:'Graceful cow, golden‑hued beauty, cherished for gentleness, nurturing nature, and abundant milk‑giving qualities.',
      tag:'Lakshya',
      color:'pink'
    },{
      img:'https://i.pinimg.com/736x/48/20/64/4820646118b2366d8c4699fd49020643.jpg',
      intro:'Focused bull, determined spirit, embodies discipline, hard work, and goal‑oriented strength in agricultural life.',
      tag:'Bakasur',
      color:'orange'

    },{
      img:'https://i.pinimg.com/1200x/92/a9/46/92a946ac3238cc6ad41f3d5e3599e22f.jpg',
      intro:'Graceful cow, golden‑hued beauty, cherished for gentleness, nurturing nature, and abundant milk‑giving qualities.',
      tag:'Mathur',
      color:'red'

    },{
      img:'https://i.pinimg.com/736x/39/74/bf/3974bf7e7372e6336d01b9be6f52795b.jpg',
      intro:'Robust bull, dependable companion, valued for stamina, courage, and unwavering support in daily rural tasks.',
      tag:'Sarjya',
      color:'orange'

    },{
      img:'https://i.pinimg.com/736x/37/c6/cf/37c6cfa5492604ffabbe856bdbb59227.jpg',
      intro:'Focused bull, determined spirit, embodies discipline, hard work, and goal‑oriented strength in agricultural life.',
      tag:'Lakhan',
      color:'blue'

    },
  ]
  return (
    <div >
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App
