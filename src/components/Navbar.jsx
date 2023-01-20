import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Me Chat</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/10879155/pexels-photo-10879155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
        <span>Adam</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar