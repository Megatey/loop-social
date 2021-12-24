import './post.css'
import { Users } from '../Dummydata'
const Post = ({posts}) => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTopbar">
                    <div className="postInfo">
                        <img src= {Users.filter(u => u.id === posts.userId)[0].profilePicture} alt="myPic" className="posterImg" />
                        <span className="posterName">{Users.filter(u => u.id === posts.userId)[0].username}</span>
                        <span className="postTime">{posts.date}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="moreIcon" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
                </div>
                <div className="postText">
                    <span className="qoute">{posts?.desc}</span>
                </div>
                <div className="imgContainer">
                    <img src= {posts.photo} alt="postImg" className="postImg" />
                </div>
                <div className="reactionContainer">
                    <div className="likesInfo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4267B2" className="likeIcon" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.308 11.794c.418.056.63.328.63.61 0 .323-.277.66-.844.705-.348.027-.434.312-.016.406.351.08.549.326.549.591 0 .314-.279.654-.913.771-.383.07-.421.445-.016.477.344.026.479.146.479.312 0 .466-.826 1.333-2.426 1.333-2.501.001-3.407-1.499-6.751-1.499v-4.964c1.766-.271 3.484-.817 4.344-3.802.239-.831.39-1.734 1.187-1.734 1.188 0 1.297 2.562.844 4.391.656.344 1.875.468 2.489.442.886-.036 1.136.409 1.136.745 0 .505-.416.675-.677.755-.304.094-.444.404-.015.461z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f35b7e" className="likeIcon" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
                    <span className="likeCount">{posts.like} people like it</span>
                    </div>
                    <span className="commentsCount">{posts.comment} comments</span>
                </div>
            </div>
        </div>
    )
}

export default Post
