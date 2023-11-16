import React from "react";
import { useNavigate } from "react-router-dom";
import Subscribe from "./subscribe";
import Footer from "./footer";
import Searchbar from "./searchbar";
import allTours from './tourdata'

function Tourpage(){
const navigate = useNavigate();

function booknow(selectedTour) {
  navigate('/Mybookings', { state: { selectedTour } });
}
const Data = allTours;

    return(
        <div>
            {/* background image tour */}

                <div className="tourbgimage mt-5">
                    <div className="blackbg d-flex justify-content-center align-items-center">
                        <h1 className="justify-content-center text-light">All Tours</h1> 
                    </div>
                </div>
            
            {/* Featured Tours */}

            <div className="container mt-5">
          <button style={{borderRadius:"30px"}} className="btn btn-warning mb-3 mt-4"> <span className="dance-font h5">Explore</span></button>
            <h2 className="mt-3 mb-5 ">Our Featured tours</h2>
          </div>

            <Searchbar/>
        
{/* Featured Tours cards*/}

<div className="container">
<div className="row">
          {Data.map((item,index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4 ">
              <div className="card shadow-lg card2">
                 <div style={{height:"200px"}}>
                    <img style={{height:"200px",width:"100%"}} className="img-fluid rounded" src={item.photo} alt="" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p><span><i class="fa-solid fa-location-dot" style={{color:"orange"}}></i></span>{item.city} </p>
                      <p><span><i class="fa-regular fa-star" style={{color:"orange"}}></i></span>Not rated</p> 
                    </div>
                      <h5>{item.title}</h5>
                    <div className="d-flex justify-content-between">
                      <p><span><b className="text-warning">$ {item.price} </b></span>/per<br /> person</p>
                      <button onClick={() => booknow(item)} className="btn btn-warning text-light">Book <br /> Now</button>
                    </div>
                  </div>
              </div>
            </div>
          ))}
          </div>
</div>
          <Subscribe/>
          <Footer/>
        </div>
    )
}
export default Tourpage;