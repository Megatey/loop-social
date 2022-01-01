import './signup.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
    const userDetail = {
        username: '',
        email: '',
        password: '',
        confirmPass: '',
    }
    const [formInput, setFormInput] = useState(userDetail)
    const onChange = (e) => {
        const { name, value } = e.target
        setFormInput({ ...formInput, [name]: value })
    }

    const submitHandler = async (e) => {
    const createUser = await fetch('', {
       method: "Post",
       headers: {
           "Content-Type" : "Application/json"
       },
       body : {
           username: formInput.username,
           email: formInput.email,
           password: formInput.password,
           confirmPass: formInput.confirmPass
       }
    })
    const data = await createUser.json()
    console.log(data);

        e.preventDefault()
    }

    return (
        <div className="signup">
            <div className="signupWrapper">
                <div className="centeredContainer">
                    <div className="appName_Motto_Container">
                        <h3 className="appName">Loopsocial</h3>
                        <p className="motto">Connect with friends and world around you on Loopsocial.</p>
                        <Link to="/homepage" style={{textDecoration:"none", color:"inherit"}}> <button className="login_button">Go To HomePage</button> </Link>
                    </div>
                    <form onSubmit={submitHandler} className="formContainer">
                        <input type="text" name="username" value={formInput.username} onChange={onChange} placeholder="Username" className="inputData" />
                        <input type="email" name="email" value={formInput.email} onChange={onChange} placeholder="Email" className="inputData" />
                        <input type="password" name="password" value={formInput.password} onChange={onChange} placeholder="Password" className="inputData" />
                        <input type="password" name="confirmPass" value={formInput.confirmPass} onChange={onChange} placeholder="Password Again" className="inputData" />
                        <button type="submit" className="signup_button">Sign Up</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
