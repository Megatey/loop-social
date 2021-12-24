import './share.css'
const Share = () => {
    return (
        <div className="share">
            <div className="shareContainer">
                <img src="photos/myphoto.jpg" alt="myImg" className="profilePicture" />
                <input type="text" className="shareText" placeholder="What's on your mind Ibrahim?" />
            </div>
            <hr className="line" />
            <div className="shareItems">
                <div className="items">
                    <div className="item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="tomato" viewBox="0 0 24 24"><path d="M7.972 2h-6.972l.714 5h2.021l-.429-3h3.694c1.112 1.388 1.952 2 4.277 2h9.283l-.2 1h2.04l.6-3h-11.723c-1.978 0-2.041-.417-3.305-2zm16.028 7h-24l2 13h20l2-13z"/></svg>
                        <span className="iconText">Photo or Video</span>
                    </div>
                    <div className="item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" viewBox="0 0 24 24"><path d="M10.605 0h-10.605v10.609l13.391 13.391 10.609-10.604-13.395-13.396zm-4.191 6.414c-.781.781-2.046.781-2.829.001-.781-.783-.781-2.048 0-2.829.782-.782 2.048-.781 2.829-.001.782.782.781 2.047 0 2.829z"/></svg>
                        <span className="iconText">Tag</span>
                    </div>
                    <div className="item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                        <span className="iconText">Location</span>
                    </div>
                    <div className="item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#d4af37" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.5 8c.828 0 1.5.671 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.671-1.5-1.5.672-1.5 1.5-1.5zm-7 0c.828 0 1.5.671 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.671-1.5-1.5.672-1.5 1.5-1.5zm3.501 10c-2.801 0-4.874-1.846-6.001-3.566l.493-.493c1.512 1.195 3.174 1.931 5.508 1.931 2.333 0 3.994-.736 5.506-1.931l.493.493c-1.127 1.72-3.199 3.566-5.999 3.566z"/></svg>
                        <span className="iconText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    )
}

export default Share
