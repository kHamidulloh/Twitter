import LogoTwitter from '../../imgs/logo-twitter.png'
import { Link } from "react-router-dom"
import './login.css'
import { useRef } from 'react'
import useToken from "../../hooks/useToken" 

function Login() {
  const [state , setState] = useToken(false)

  const usernameRef = useRef()
  const passwordRef = useRef()

  const handleLogin = (evt) => {
    evt.preventDefault();

    const obj = {
      username: usernameRef.current.value
    };

    setState(JSON.stringify(obj))
}

    return (
    <div className="login">

      <div className="login-all">        
        <img className="login-logo" src={LogoTwitter} alt="Logo Twitter" />
       <h1 className="login-title">Log in to Twitter</h1>
       <form onSubmit={handleLogin}>
        <input ref={usernameRef} className="login-input login-email" type="text" placeholder="Phone number, email address" required />
        <input ref={passwordRef} className="login-input login-password" type="password" placeholder="Password" required />
        <button className="login-btn" type="submit">Log In</button>
       </form>
       <div className="login-links">
          <Link className="login-link" to="">Forgot password?</Link>
          <Link className="login-link" to="/signup">Sign up to Twitter</Link>
       </div>
      </div>
    </div>
    );
  }
  
  export default Login;