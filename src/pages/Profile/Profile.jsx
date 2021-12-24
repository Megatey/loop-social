import './profile.css'
import Header from '../../components/Header'
import Leftbar from '../../components/Leftbar'
import Feed from '../../components/Feed'
import Rightbar from '../../components/Rightbar'
const Profile = () => {
    return (
        <div className="profile">
            <Header />
            <div className="profileWrapper">
                <Leftbar />
                <div className="rightContainer">
                    <div className="topRightContainer">
                        <div className="imageCover">
                            <img src="photos/background_img.jpg" alt="cover_img" className="bgCoverImg" />
                            <img src="photos/myphoto.jpg" alt="center_pix" className="floatingImage" />
                        </div>
                        <div className="profileInfo">
                            <h3 className="profileName">Tijani Ibrahim</h3>
                            <p className="profileGreet">Hello Friends</p>
                        </div>
                    </div>
                    <div className="bottomRightContainer">
                        <Feed /> 
                        <Rightbar profile/>                  
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
