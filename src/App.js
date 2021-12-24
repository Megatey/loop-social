import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import {Users} from "./Dummydata"

import SignUp from "./pages/SignUp/SignUp"

import Profile from "./pages/Profile/Profile"

import Home from "./pages/Home/Home"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/" element={<SignUp/>} />
        {/* <Home/> */}
        {/* <Profile/> */}
        {/* <SignUp /> */}
      </Routes>
    </Router>
  )
}

export default App
