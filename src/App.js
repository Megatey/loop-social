import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import {Users} from "./Dummydata"

import SignUp from "./pages/SignUp/SignUp"

import Profile from "./pages/Profile/Profile"

import Home from "./pages/Home/Home"
import './App.css';

function App() {
  return (
    <div className='overallBody'>
    <Router>
      <Routes>
        <Route path="/homepage" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/" element={<SignUp/>} />
     
      </Routes>
    </Router>
    </div>
  )
}

export default App
