import Feed from '../../Component/Feed/Feed'
import Sidebar from '../../Component/Sidebar/Sidebar'
import './Home.css'
const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed />
      </div>
    </>
  )
}

export default Home
