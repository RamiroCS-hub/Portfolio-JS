
import { TwitterCard } from './TwitterCard';
import './index.css';

export const App = () => {
  return(
    <div className='App'>
      <TwitterCard isFollowing userName="midudev" name="El pedazo de nazi"/>
      <TwitterCard isFollowing={false} userName="elonmusk" name="Elon Musk"/>
    </div>
    
  )
}