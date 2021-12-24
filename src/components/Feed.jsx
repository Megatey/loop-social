import './feed.css'
import { Posts } from '../Dummydata'
import Post from './Post'
import Share from './Share'
const Feed = () => {
    return (
        <div className="feed">
            <Share/>
            {
            Posts.map(p => (
            <Post key={p.id} posts = {p} />
            ))
            }
        </div>
    )
}

export default Feed
