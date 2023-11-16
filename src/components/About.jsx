import React from "react";
import Footer from "./footer";
function About(){
    return(
        <div>
            <div >
            <div class="container">
                <div  class="row d-flex justify-content-center gap-1">
                    
                        <div class="col-lg-7" style={{marginTop:"130px"}}>
                            <h1 className="dance-font mb-3 text-warning"><b>About Us</b></h1>
                            <p>
                                Welcome to Your Tourism! We are dedicated to providing you with the best travel experiences.
                                Our team of experts will take you on unforgettable adventures around the world.
                                Our team of expert guides and travel enthusiasts is committed to making your dreams come true. Whether you seek cultural immersion, adrenaline rushes, or peaceful escapes, we have the perfect trips waiting for you.
                            </p>
                        </div>
                        <div class="col-lg-4 travel" style={{marginTop:"130px",height:"400px"}}>
                            <img style={{height:"400px"}} src="https://i.pinimg.com/564x/f6/10/cd/f610cd906266826e4def4cbcad48298a.jpg" class="img-fluid rounded" alt="About Us"/>
                        </div>
                </div>
            </div>
<div class="container mt-5">
<h1 className="dance-font mb-3 text-warning"><b>Our Vision</b></h1>
    <p>
        At Your Tourism, our vision is to inspire and enable people to explore the world. We believe that traveling not only broadens horizons but also enriches lives. We are committed to promoting responsible and sustainable tourism to protect our planet's natural and cultural heritage for future generations.
    </p>
</div>

<div class="container mt-5">
<h1 className="dance-font mb-4 text-warning"><b>Why to choose Us ?</b></h1>
    <div class="row about-images">
        <div class="col-md-4 mt-4">
            <h4>Expert Guides</h4>
            <p>Our knowledgeable guides ensure you have a safe and enriching experience on every trip.</p>
            <div>
                <img className="img-fluid mt-3 shadow-lg rounded" src="https://img.freepik.com/free-photo/young-woman-with-map-binoculars_23-2147654235.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais" alt="" />
            </div>
        </div>
        <div class="col-md-4 mt-4">
            <h4>Unique Experiences</h4>
            <p>We offer unique itineraries that allow you to explore destinations in an immersive way.</p>
            <div>
                <img className="img-fluid mt-3 shadow-lg rounded" src="https://www.worldwidewendy.be/upload/5%20Travel%20Experiences%20That%20Are%20WAY%20Better%20Than%20Material%20Things2.jpg" alt="" />
            </div>
        </div>
        <div class="col-md-4 mt-4">
            <h4>Sustainability</h4>
            <p>We are dedicated to sustainable tourism practices, reducing our environmental impact.</p>
            <div>
                <img className="img-fluid mt-3 shadow-lg rounded about" src="https://i.pinimg.com/564x/dd/89/1a/dd891a748be375e604f0b4381ef9f426.jpg" alt=""  />
            </div>
        </div>
    </div>
</div>
        <Footer/>
        </div>
    </div>
    )
}
export default About;