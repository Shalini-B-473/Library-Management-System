import React, { useState } from "react";
import NavbarComp from "./NavbarComp";
import './Login.css'
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Toast } from "react-bootstrap";
import {FaRegEye , FaRegEyeSlash } from 'react-icons/fa';

function Login() {
    const [email, setEmail] = useState("");
    const [passw, setPassword] = useState("");
    const navigate = useNavigate();
    const [passwordInVisible , setPasswordInVisible] = useState(true);
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (event) => {
        /*event.preventDefault();*/
        try {
            if((localStorage.getItem("email") === email ) && (localStorage.getItem("passw") === passw)){
                navigate('/Findbooks');     //Navigate to required page
            }
            else{
                console.log("Invalid login");
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 8000); // 8 seconds
            }
            
        }
        catch (error) {
            if (error.response) {
                console.log(error.response.data.msg);
            }
        }
    }

    function validateEmail(){
        var email_val= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        var uemail = document.getElementById("email").value;
        var s3 = document.getElementById("emailRequired")
        if(uemail === ""){
            s3.innerText=("Email field cannot be empty")
            s3.style.color = "red" ;
        }
        else{
            if(email_val.test(uemail)){
                s3.innerText = ("");
                s3.style.color ="green" ;
            }
            else{
                s3.innerText = ("Invalid email")
                s3.style.color = "red" ;
            }
        }
    }

    return (
        <React.Fragment>
            <NavbarComp />

            <div>
                <form onSubmit={handleSubmit} method="get">
                    <div className="header-text">
                        Login
                    </div>
                    <hr/>
                    <div>
                        <label htmlFor="email">Email</label><br></br>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} /><br/>
                        <span id="emailRequired"></span>
                    </div>
                    <div>
                        <label htmlFor="passw">Password</label><br></br>
                        <input type= {passwordInVisible ?  'password' : 'text'} name="passw" id="passw" value={passw} onChange={(e) => setPassword(e.target.value)} required />
                        {passwordInVisible ? <FaRegEyeSlash onClick={() => setPasswordInVisible(false)} /> : <FaRegEye onClick={() => setPasswordInVisible(true)} />}
                    </div>
                    <input type="submit" value="Login" />
                    <div>
                        <p>Don't have an account.<Link to="/SignUp">Sign Up</Link></p>

                        <Outlet />
                    </div>
                </form>
            </div>
            {showToast && (
          <Toast onClose={() => setShowToast(false)}>
            <Toast.Body>
              <h3>Wrong credentials</h3>
            </Toast.Body>
          </Toast>
        )}


        </React.Fragment>
    )
}
export default Login;



