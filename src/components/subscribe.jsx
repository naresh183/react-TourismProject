import React from "react";
function Subscribe(){
    return(
        <div>
            
          <div style={{backgroundColor:"lightblue"}} className="p-5 mt-5">
            <div className="container">
                <div className="row d-flex  align-items-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h1>Subscribe now for usefull travelling information </h1>
                       <div style={{borderRadius:"10px"}} className="bg-light d-flex justify-content-between p-2 mt-4 subscribe">
                            <span className="text-muted">Enter Your email</span>
                            <button className="btn btn-warning text-light">Subscribe</button>
                       </div>
                       <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam recusandae aliquid quasi eaque?</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img className="img-fluid" src={require('../assets/images/male-tourist.png')} alt="" />
                    </div>
                </div>

            </div>
          </div>
        </div>
    )
}
export default Subscribe;