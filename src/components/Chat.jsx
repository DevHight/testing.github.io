import React from 'react'
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Adam</span>
        <div className='chatIcons'>
          <img src={Cam} alt="videoCall" />
          <img src={Add} alt="addSomeone" />
          <img src={More} alt="moreOption" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat