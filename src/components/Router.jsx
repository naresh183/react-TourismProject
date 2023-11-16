import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Router(){
    var navigate = useNavigate();
    var loggedInUserName = localStorage.getItem("loggedInUser");
   
    var handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        loggedInUserName = null; 
        navigate("/TourloginPage");
    };

    return(
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container-fluid d-flex justify-content-between">  
                   <div>
                        <div style={{height:"60px",width:"150px"}} >
                          <a class="navbar-brand" href="#"><Link class="nav-link" href="#"to="/TourloginPage"><img className="img-fluid" src={require('../assets/images/logo.png')} alt="" /><span class="sr-only"></span></Link></a>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        
                   </div>
                   <img src="../assets/images/ava-1.jpg" alt=""/>
                   
                    {/* <div class="collapse navbar-collapse" id="navbarNav"> */}
                        <ul class="navbar-nav " id="navbarNav">
                            <li class="nav-item active mt-1">
                                <Link class="nav-link" href="#"to="/Home"><b>Home</b><span class="sr-only"></span></Link>
                            </li>
                            <li class="nav-item active mt-1">
                                <Link class="nav-link" href="#"to="/About"><b>About</b><span class="sr-only"></span></Link>
                            </li>
                            <li class="nav-item active mt-1">
                                <Link class="nav-link" href="#"to="/Tourpage"><b>Tour</b><span class="sr-only"></span></Link>
                            </li>
                            
                            {/* <li class="nav-item active mt-1">
                                <Link class="nav-link" href="#"to="/TourloginPage"><b>Login</b><span class="sr-only"></span></Link>
                            </li> */}

                            <li>
                                {loggedInUserName ? (
                                   <p>
                                    <button className="btn btn-success mt-2"><b>{loggedInUserName}</b></button>
                                    <button style={{marginLeft:"8px"}} className="btn btn-danger  mt-2" onClick={handleLogout}>Logout</button>
                                   </p> 
                                
                                ) : (
                                    <p onClick={() => navigate('/TourloginPage')}><button className="btn btn-warning mt-2"><b>Login</b></button> </p>
                                )}
                            </li>

                            <li class="nav-item active">
                                <Link class="nav-link" href="#"to="/Registerpage"><button className="btn btn-warning"><b>Register</b></button><span class="sr-only"></span></Link>
                            </li>
                            <li class="nav-item active ">
                                <Link class="nav-link" href="#"to="/Mybookings"><button className="btn btn-dark"><b>My Bookings</b></button><span class="sr-only"></span></Link>
                            </li>
                            
                        </ul>
                    {/* </div> */}
                   
                </div>
            </nav>
            

        </div>
    )
}
export default Router;

