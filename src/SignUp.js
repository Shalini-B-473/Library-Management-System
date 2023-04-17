import React, { useEffect, useState } from "react";
import NavbarComp from "./NavbarComp";
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
function Signup() {
    const [email, setEmail] = useState("");
    const [mobileno, setMobileNo] = useState("")
    const [passw, setPassword] = useState("");
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [passwordInVisible, setPasswordInVisible] = useState(true);
    const [Findbooks,setFindbooks] = useState(false);
    const signup = localStorage.getItem("email");
    useEffect(()=>{
        if(signup){
            setFindbooks(true);
        }
    })

    function validateMobile(){
        var mob_val= /^[0-9]{10}$/
        var umobile = document.getElementById("mobileno").value;
        var s2 = document.getElementById("mobileRequired")
        if(umobile === ""){
            s2.innerText=("Mobile field cannot be empty")
            s2.style.color = "red" ;
        }
        else{
            if(mob_val.test(umobile)){
                s2.innerText=("");
                s2.style.color = "green" ;
            }
            else{
                s2.innerText = ("Invalid mobile number")
                s2.style.color = "red" ;
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


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit");
        console.log(email,mobileno,passw);
        localStorage.setItem("email",email);
        localStorage.setItem("mobileno",mobileno);
        localStorage.setItem("passw",passw);
        setShowToast(true);
        navigate('/Login');
    }
    return (
        <React.Fragment>
            <NavbarComp />
              
               
                <form onSubmit={handleSubmit}>
                    <div className="header-text">
                        Sign Up
                    </div>

                    <div>
                        <label htmlFor="email">Email</label><br></br>
                        <input type="email" name="email" id="email" value={email} onBlur={validateEmail}  onChange={(e) => setEmail(e.target.value)}  />
                        <br/><span id="emailRequired"></span>
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile Number</label><br></br>
                        <input type="text" name="mobileno" id="mobileno" value={mobileno} onBlur={validateMobile} onChange={(e) => setMobileNo(e.target.value)} /><br/>
                        <span id="mobileRequired"></span><br></br>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br></br>
                        <input type={passwordInVisible ? 'password' : 'text'} name="password" id="password" value={passw} onChange={(e) => setPassword(e.target.value)} required />
                        {passwordInVisible ? <FaRegEyeSlash onClick={() => setPasswordInVisible(false)} /> : <FaRegEye onClick={() => setPasswordInVisible(true)} />}
                    </div>
                    <input type="submit" value="Sign Up" />
                    <p>Already a User.<Link to="/Login">Login</Link></p>
                </form>
                {showToast && (
          <Toast onClose={() => setShowToast(false)}>
            <Toast.Body>
              <h3>Account created Successfully.</h3>
            </Toast.Body>
          </Toast>
        )}

        </React.Fragment>
    )
}
export default Signup;