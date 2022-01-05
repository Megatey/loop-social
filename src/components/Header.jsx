import './header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { Users } from '../Dummydata'
const Header = () => {
    const [toggle, setToggle] = useState(false)

    const navChangeHandler = () => {
        toggle === false ? setToggle(true) : setToggle(false)
    }
    return (
        <div className="header">
            <div className="headerWrapper">
                <div className="logo"><h3 className="logoText">Loopsocial</h3></div>
                <div className="inputSearch">
                    <svg xmlns="http://www.w3.org/2000/svg" className="searchIcon" width="16" height="16" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" /></svg>
                    <input type="text" placeholder="Search for friends,post or videos" className="search" />
                </div>
                <div className="headerRight">
                    <div className="option">
                        <Link to="/homepage" style={{ textDecoration: "none", color: "inherit" }} ><span className="homepage">Homepage</span></Link>
                        <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}><span className="timeline">Profile</span></Link>
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}><span className="timeline">SignUp</span></Link>
                    </div>
                    <div className="iconsContainer">
                        <div className="iconItem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" /></svg>
                            <span className="count">1</span>
                        </div>
                        <div className="iconItem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 24 24"><path d="M0 1v16.981h4v5.019l7-5.019h13v-16.981h-24zm13 12h-8v-1h8v1zm6-3h-14v-1h14v1zm0-3h-14v-1h14v1z" /></svg>
                            <span className="count">2</span>
                        </div>
                        <div className="iconItem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 24 24"><path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" /></svg>
                            <span className="count">1</span>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img src="photos/myphoto.jpg" alt="myImg" className="profileImage" />
                    </div>
                </div>
            </div>

            <div className="responsive-header-Wrapper">
                <div className="bar-logo" onClick={navChangeHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
                </div>
                <div className="responsive-logo"><h3 className="logoText">Loopsocial</h3></div>
                <div className="imgContainer">
                    <img src="photos/myphoto.jpg" alt="myImg" className="profileImage" />
                </div>
            </div>
            { toggle && <div className="nav-barlist">
                <div className="option">
                    <Link to="/homepage" style={{ textDecoration: "none", color: "inherit" }} ><p className="nav-homepage">Homepage</p></Link>
                    <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}><p className="nav-profile">Profile</p></Link>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}><p className="nav-signup">SignUp</p></Link>
                </div>
            </div> }

            { toggle && <div className="dim-theme" onClick={() => setToggle(false)}></div>}
        </div>
    )
}

export default Header
