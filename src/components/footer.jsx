import React from "react";
import { useNavigate } from "react-router-dom";
function Footer(){
    const navigate = useNavigate()
return(
    <footer className="mt-5">
    <div className="container">
        <div className="grid">
            <div className="row">
                <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4">
                    <div style={{width:"150px"}}>
                        <img className="img-fluid" src={require('../assets/images/logo.png')} alt="" />
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="col-9 d-flex justify-content-evenly">
                        <i class="fa-solid fa-user-gear"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4 page-links">
                    <h6>Discover</h6>
                    <p onClick={()=>navigate("/Home")}>Home</p>
                    <p onClick={()=>{navigate('/About')}}>About</p>
                    <p onClick={()=>{navigate('/Tourpage')}}>Tours</p>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4 login-links">
                    <h6>Quick Links</h6>
                    <p>Gallery</p>
                    <p onClick={()=>navigate('../TourloginPage')}>Login</p>
                    <p onClick={()=>{navigate('../Registerpage')}}>Register</p>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4">
                    <h6>Contact</h6>
                    <p> <span><i class="fa-solid fa-location-dot" style={{color:"orange"}}></i></span> Address : Kurnool, Andhra Pradesh</p>
                    <p> <span><i class="fa-regular fa-envelope" style={{color: "orange"}}></i></span> Email: <br />naresh3@gmail.com</p>
                    <p> <span><i class="fa-solid fa-phone" style={{color: "orange"}}></i></span> Phone : 9177701653</p>
                </div>
            </div>
        </div>
    </div>

    <p className="text-center text-muted mt-5 mb-4">Copyright 2023, Design and developed by Naresh. All rights reserved</p>
  </footer>

)
}
export default Footer;