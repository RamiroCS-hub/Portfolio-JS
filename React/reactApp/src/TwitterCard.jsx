import './twitterCard.css'

export const TwitterCard = ({userName, name, isFollowing}) => {
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
      <button>Seguir</button>
    </div>
  )
}