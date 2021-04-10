import React from 'react';
import '../scss/Login.scss';

const Login = () => {
    return (
        <div className="login-form">
            <img src="https://image.flaticon.com/icons/png/128/1177/1177568.png" className="img-user" alt="img-user" />
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" id="username" className="input-field" />  
                <input type="password" placeholder="Password" id="password" className="input-field" />  
                <a href="https://reactjs.org" className="forgot-link">Forgot password?</a>
                <input type="submit" value="Sign In" className="btn-sign-in" />
            </form>
        </div>
    )
}

export default Login;