import "./sign-up.css"
import TwitterImg from "../../imgs/back-twitter.png"
import LogoTwitter from '../../imgs/logo-twitter.png'
import { Link } from "react-router-dom"
import useToken from "../../hooks/useToken"
import { useRef } from "react"

export default function SignUp (evt) {

    document.addEventListener("keyup", function (evt) {
        if (evt.keyCode === 27) {
            document.querySelector(".modal").style.display = "none"
        }
    });

    document.addEventListener("click", function (evt) {
        if (evt.target === document.querySelector(".modal")) {
            document.querySelector(".modal").style.display = "none"
        }
    })


const [state , setState] = useToken(false)

  const usernameRef = useRef()

  const handleLogin = (evt) => {
    evt.preventDefault();

    const obj = {
      username: usernameRef.current.value
    };

    setState(JSON.stringify(obj))
    }
return(
<>
    <div className="sign">

        <div className="sign-main">
            <img className="sign-img" src={TwitterImg} alt="Twitter img" />

            <div className="sign-section">
                <img className="sign-logo" src={LogoTwitter} alt="Twitter logo" />
                <h1 className="sign-title">Happening now</h1>
                <h3 className="sign-title2">Join Twitter today</h3>
                <button className="sign-btn google-sign" type="submit">Sign up with Google</button>
                <button className="sign-btn apple-sign" type="submit">Sign up with Apple</button>
                <button onClick={() => document.querySelector(".modal").style.display = "flex" } className="sign-btn signup-btn" type="submit">Sign up with phone or email</button>
                <p className="sign-service">By singing up you agree to the 
                <span className="span-blue">Terms of Service</span> and 
                <span className="span-blue">Privacy Policy</span>, including 
                <span className="span-blue">Cookie Use</span>.</p>
                <p>Already have an account? <Link to="/login" className="span-blue">Log in</Link></p>
            </div>

        </div>
        <ul className="sign-list">
            <li>About</li>
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Ads info</li>
            <li>Blog</li>
            <li>Status</li>
            <li>Carrres</li>
            <li>Brand Resources</li>
            <li>Advertsing</li>
            <li>Marketing</li>
            <li>Twitter for Business</li>
            <li>Developers</li>
            <li>Directory</li>
            <li>Settings</li>
            <li>© 2021 Twitter, Inc.</li>
        </ul>
    </div>
    <div className="modal">
        <div className="modal__content">
            <div className="logo-div">
                <img className="logo" src={LogoTwitter} alt="logo" />
            </div>
            <form onSubmit={handleLogin}>
            <div>
            <h2 className="modal__title">Create an account</h2>
                <input ref={usernameRef} className="input-name" placeholder="Name" type="text" required />
                <input className="input-number" placeholder="Phone number" type="tel" required />
            
            <p className="text-blue">Use email</p>
            </div>
            <div>
                <h3>Date of birth</h3>
                <p>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
            </div>
            <div className="birthday-selecters">
                <select className="month">
                    <option>Moth</option>
                </select>
                <select className="day">
                    <option>Day</option>
                </select>
                <select className="year">
                    <option>Year</option>
                </select>
            </div>
            <button type="submit" className="selecters-btn">Next</button>
            </form>
        </div>
    </div>
</>
)
}