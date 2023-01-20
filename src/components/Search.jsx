import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/10879155/pexels-photo-10879155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="searchAvatar" />
        <div className='userChatInfo'>
          <span>Adam</span>
        </div>
      </div>
    </div>
  )
}

export default Search