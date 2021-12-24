import './rightbar.css'
import { Users } from '../Dummydata'
const Rightbar = ({ profile }) => {
    const OnlineFriend = () => {
        return (
            <>
                <div className="listTitle"><span className="title">Online Friends</span></div>
                {
                    Users.map(u => (<div key={u.id} className="friendOnline">
                        <div className="friendImgContainer">
                            <img src={u.profilePicture} alt="onlineImg" className="onlineFriendImg" />
                            <span className="onlineBadge"></span>
                        </div>
                        <span className="onlineFriendName">{u.username}</span>
                    </div>))
                }
            </>
        )
    }

    const ProfileInfo = () => {
        return (
            <>
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
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileInfo /> : <OnlineFriend />}
            </div>
        </div>
    )
}

export default Rightbar
