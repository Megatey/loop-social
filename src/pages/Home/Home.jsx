import './home.css'
import Header from '../../components/Header'
import Leftbar from '../../components/Leftbar'
import Feed from '../../components/Feed'
import Rightbar from '../../components/Rightbar'
const Home = () => {
    return (
        <div>
            <Header/>
            <div className="center">
                <Leftbar/>
                <Feed/>
                <Rightbar/>
            </div>
        </div>
    )
}

export default Home
