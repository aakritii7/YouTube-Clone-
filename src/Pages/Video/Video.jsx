import Playvideo from '../../Component/Playvideo/Playvideo'
import Recommended from '../../Component/Recommended/Recommended'
import './Video.css'
const Video = () => {
  return (
    <div className='play-container'>
      <Playvideo />
      <Recommended />
      
    </div>
  )
}

export default Video
