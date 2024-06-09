
import { TwitterCard } from './TwitterCard';
import './index.css';

export const App = () => {
  return(
    <div className='App'>
      <TwitterCard userName="midudev" name="El pedazo de nazi"/>
      <TwitterCard userName="elonmusk" name="Elon Musk"/>
    </div>
  )
}