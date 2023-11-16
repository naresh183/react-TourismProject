import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
function Registerpage(){
    const navigate = useNavigate();
    const [data,setData] = useState({
        username :"",
        email : "",
        password : ""
    })

    const {username,password,email}=data;

    const changeHandler = e =>{
        setData({...data,[e.target.name]: e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        var usernamePattern = /^[a-zA-Z0-9]{3,18} /
        var emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,6}$/
        var passwordPattern = /[a-zA-Z0-9 -_$@!]{6,20}/
        

        if (usernamePattern.test(username) && emailPattern.test(email) && passwordPattern.test(password)) {
            alert("Registration successful");
            navigate("/TourloginPage");
            // Remove this line from here: localStorage.setItem("name", username);
        }
        else if(username === "" && email === "" && password === ""){
            alert("Registration failed, plese enter valid details")
        }
        else if(!emailPattern.test(email)){
            alert("please enter valid email address")
        }
        else if(!passwordPattern.test(password)){
            alert("please enter valid password")
        }
        else if(username.length < 3){
            alert("username is too short")
        }
        else if(password.length < 6){
            alert("password is too short")
        }
        else{
            alert("Registration successful");
            
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("username", username);
            navigate("/TourloginPage");
         }
        }
    return(
        <div>

            {/* login form */}

            <div className="container">
                <div className="grid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 shadow-lg register-png"  style={{marginTop:"150px"}}>
                            <img className="img-fluid" src={require('../assets/images/register.png')} alt="" />
                        </div>
                        <div className="col-10 p-4 text-center bg-warning col-md-3  shadow-lg p-1"  style={{marginTop:"150px"}}>
                            <div className="form" >
                                <div>
                                        <div>
                                             <img style={{marginTop:"-40px"}} className="img-fluid col-4 mb-3" src={require('../assets/images/user.png')} alt="" />
                                        </div>

                                    <h1 className="text-light mb-5">Register</h1>
                                    <input className="form-control w-70 mb-3" placeholder="Username" type="text"value={username} name="username" onChange={changeHandler} /> 
                                    <input className="form-control w-70 mb-3" placeholder="Email" type="email" value={email} name="email" onChange={changeHandler}/>    
                                    <input className="form-control w-70 mb-3" placeholder="Password" type="Password" value={password} name="password" onChange={changeHandler}/>    
                                    <button type="submit" className="btn btn-dark text-light w-75 mb-3" name="submit" onClick={submitHandler}>Register</button>
                                    <p className="text-light">Don't have an  <br /> account? <button className="text-dark btn btn-sm">Register</button></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

          {/* footer */}

          <Footer/>
        </div>
    )
}
export default Registerpage;