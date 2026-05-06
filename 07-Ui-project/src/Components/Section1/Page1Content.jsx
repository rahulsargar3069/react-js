import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className=' flex gap-2 pb-10 py-3 px-9 h-[90vh] bg-white'>
      <LeftContent/>
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
