import { useState } from 'react'
import './twitterCard.css'

// eslint-disable-next-line react/prop-types
export const TwitterCard = ({userName = 'unknown', name}) => {
  
  const [isFollowing, setIsFollowing] = useState(false)
  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
  const handleButton = () => { setIsFollowing(!isFollowing) }
  return (
    <div className='tw-followCard'>
    <div className='tw-followCard-header'>
      <div className='tw-followCard-image'>
        <img src={`https://unavatar.io/${userName}`}></img>
      </div>
      
      <div className='tw-followCard-info'>
        <strong>{name}</strong>
        <span>@{userName}</span>
      </div>
    </div>
      <button className={buttonClassName} onClick={handleButton}>
        <span className='tw-followCard-follow'>{text}</span>
        <span className='tw-followCard-unfollow'>Unfollow</span>
      </button>
    </div>
  )
}