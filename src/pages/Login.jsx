import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [getUser, setUser] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getName, setName] = useState("");
    const [getEmail, setEmail] = useState("");
    
    let redireccion = useNavigate()
    function iniciarSesion() {
        redireccion('/home')
    }

    
    return (
        <div className="container">
            <input id="signup_toggle" type="checkbox" />
            <form className="form">
                <div className="form_front">
                    <div className="form_details">Login</div>
                    <input
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Username"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Password"
                    />
                    <button onClick={iniciarSesion} type="button" className="btn">
                        Login
                    </button>
                    <span className="switch">
                        Don't have an account?
                        <label for="signup_toggle" className="signup_tog">
                            Sign Up
                        </label>
                    </span>
                </div>
                <div className="form_back">
                    <div className="form_details">SignUp</div>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Firstname"
                    />
                    <input
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Username"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Password"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Email"
                    />
                    <button onClick={iniciarSesion} type="button" className="btn">Signup</button>
                    <span className="switch">
                        Already have an account?
                        <label for="signup_toggle" className="signup_tog">
                            Sign In
                        </label>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Login