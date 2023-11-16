import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";


function TourloginPage(username){
    const navigate = useNavigate()
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }

    const passwordHandler = (e)=>{
        setPassword(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();

        // localStorage.setItem("email","naresh@gmail.com")
        // localStorage.setItem("password","950233")
        // localStorage.setItem("username","naresh")

        let emailData = localStorage.getItem("email")
        let passwordData = localStorage.getItem("password")
        console.log(emailData,passwordData)

        if(emailData === email && passwordData === password ){
            alert("Login successfull")
            localStorage.setItem("loggedInUser", localStorage.getItem("username",username));
            navigate("/Home")
        }
        else if(email === "" && password === ""){
            alert("Login Failed , plese enter valid details")
        }
        else if(emailData !== email){
            alert("please enter valid email address")
        }
        else if(passwordData !== password){
            alert("please enter valid password")
        }
        
        else{
            alert("Login Failed,You do not have access plese register")
        }

    }

    return(
        <div>
            {/* login form */}
            
            <br />
            <div className="container mt-5">
                <div className="grid">
                    <div className="row d-flex justify-content-center"  style={{marginTop:"120px"}}>
                        <div className="col-0 col-sm-6 col-md-6 col-lg-6 shadow-lg login-png">
                            <img className="img-fluid" src={require('../assets/images/login.png')} alt="" />
                        </div>
                        <div className="col-10 p-4 text-center bg-warning col-md-3  shadow-lg p-2">
                            <div className="form">
                                <div>
                                        <div>
                                             <img style={{marginTop:"-40px"}} className="img-fluid col-4 mb-3" src={require('../assets/images/user.png')} alt="" />
                                        </div>

                                    <h1 className="text-light mb-5">Login</h1>
                                    <input className="form-control w-70 mb-3 " placeholder="Email" type="email" name="email" value={email} onChange={emailHandler} />    
                                    <input className="form-control w-70 mb-3 " placeholder="Password" type="password" name="password" value={password} onChange={passwordHandler} />    
                                    <button type="submit" className="btn btn-dark text-light w-75 mb-3" onClick={submitHandler}>Login</button>
                                    <p className="text-light">Don't have an  <br /> account? <button className="text-dark btn btn-sm" onClick={()=>{navigate('/Registerpage')}}>Register</button></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
<br />
          <Footer/>
        </div>
    )
}
export default TourloginPage;