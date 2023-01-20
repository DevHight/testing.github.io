import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src="https://images.pexels.com/photos/10879155/pexels-photo-10879155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="inChatAvatar" />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src="https://images.pexels.com/photos/10879155/pexels-photo-10879155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="chatImg" />
      </div>
    </div>
  )
}

export default Message