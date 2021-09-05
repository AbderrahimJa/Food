import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './Connexion.css';

const Connexion = () => {
    const [ SI, setSI ] = useState(false);
    const [ SU, setSU ] = useState(false);
    const signin = () => {
        document.querySelector('#container').classList.remove("right-panel-active");
    }
    const signup = () => {
        document.querySelector('#container').classList.add("right-panel-active");
    }
////////////////////////////////////////////////////////////
    return(
        <section className="container1">
        {/* <section className="AdSp">
             <div className="headC2">
                 <Link className="lnk1 clr"><a><h1>Menu</h1></a></Link>
                 <Link className="lnk2 clr"><a><h1>Orders</h1></a></Link>
             </div>
             <hr/> */}
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="">
                        <h1>Create Account</h1>
                        <br /><br />
                        {/* <div className="social-container">
                            <a href="" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div> */}
                        <span>or use your email for registration</span>
                        <br /><br />
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <br /><br />
                        <Link to="/Space/Menu"><button>Sign Up</button></Link>
                        {/* <button onClick={ () => setSU(true) }>Sign Up</button> */}
                        {/* { SU && <Redirect to="/Space/"></Redirect> } */}
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <br /><br />
                        {/* <div className="social-container">
                            <a href="" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div> */}
                        <span>or use your account</span>
                        <br /><br />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="">Forgot your password?</a>
                        <br /><br />
                        <Link to="/Space/Menu"><button>Sign In</button></Link>
                        {/* <button onClick={ () => setSI(true) }>Sign In</button> */}
                        {/* { SI && <Redirect push={true} to="/Space/"></Redirect> } */}
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={ () => { signin() } } >Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={ () => { signup() } } >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Connexion;