import { useParams } from 'react-router-dom'
import Playvideo from '../../Component/Playvideo/Playvideo'
import Recommended from '../../Component/Recommended/Recommended'
import './Video.css'
const Video = () => {
  const {videoId, categoryId} = useParams();
  return (
    <div className='play-container'>
      <Playvideo />
      <Recommended />
      
    </div>
  )
}

export default Video
