import React from 'react'
import Grow from './Grow'
import Conversation from './Conversation'
import User from './User'

export default function Home() {
  return (
    <div>
      <Grow/>
        <Conversation/>
        <User/>
    </div>
  )
}
