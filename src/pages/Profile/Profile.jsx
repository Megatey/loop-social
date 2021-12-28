import './profile.css'
import Header from '../../components/Header'
import Leftbar from '../../components/Leftbar'
import Feed from '../../components/Feed'
import Rightbar from '../../components/Rightbar'
import { Users } from '../../Dummydata'
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
                    <div className="responsive-bottom-right">
                    <p className="profileInfoTitle">User Information</p>
                <div className="userInfo">
                    <span className="profilekey">City:</span> <span className="profilevalue">Lagos</span>
                </div>
                <div className="userInfo">
                    <span className="profilekey">From:</span> <span className="profilevalue">Oyo</span>
                </div>
                <div className="userInfo">
                    <span className="profilekey">Relationship:</span> <span className="profilevalue">Single</span>
                </div>
                <p className="userFriend">User Friend</p>
                <div className="friendsImg">
                    {
                        Users.map(u => (
                            <div key={u.id} className="friendInfo">
                                <img src={u.profilePicture} alt="userfriend" className="userFriendImg" />
                                <p className="userFriendName">{u.username}</p>
                            </div>
                        ))
                    }
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
