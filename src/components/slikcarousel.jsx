import React from "react";

function Slikcarousel(){
    return(
        <div>
                      <div className="container mt-5 clients">
            <button className="btn btn-warning"><span className="dance-font p-2" style={{fontSize:"20px"}}><b>Clients Love</b></span></button>
            <h2 className="mt-4">What our clients say about us</h2>
          </div>
          
         <div className="container">
         <div id="carouselExampleCaptions" class="carousel slide mt-2 clients-carosel p-5">
              <div class="carousel-indicators mt-2">
                <button  className="bottom-btn bg-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button  className="bottom-btn bg-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button  className="bottom-btn bg-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                <div className="row">
                <div className="col-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid eligendi odit qui, nihil eaque reiciendis distinctio corrupti veniam incidunt!</p>
                    <div className="d-flex gap-3">
                        <div style={{height:"50px"}}>
                            <img style={{height:"50px"}} className="img-fluid" src={require('../assets/images/ava-1.jpg')} alt="" />
                        </div>
                        <div>
                            <h5>John Dep</h5>
                            <p>customer</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 ">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid eligendi odit qui, nihil eaque reiciendis distinctio corrupti veniam incidunt!</p>
                    <div className="d-flex gap-3">
                        <div style={{height:"50px"}}>
                            <img style={{height:"50px"}} className="img-fluid" src={require('../assets/images/ava-2.jpg')} alt="" />
                        </div>
                        <div>
                            <h5>Catherine Jo</h5>
                            <p>customer</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid eligendi odit qui, nihil eaque reiciendis distinctio corrupti veniam incidunt!</p>
                    <div className="d-flex gap-3">
                        <div style={{height:"50px"}}>
                            <img style={{height:"50px"}} className="img-fluid" src={require('../assets/images/ava-3.jpg')} alt="" />
                        </div>
                        <div>
                            <h5>Peter Alice</h5>
                            <p>customer</p>
                        </div>
                    </div>
                </div>
        </div>
                </div>
                <div class="carousel-item">
                <div className="row">
                <div className="col-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid eligendi odit qui, nihil eaque reiciendis distinctio corrupti veniam incidunt!</p>
                    <div className="d-flex gap-3">
                        <div style={{height:"50px"}}>
                            <img style={{height:"50px"}} className="img-fluid" src={require('../assets/images/ava-2.jpg')} alt="" />
                        </div>
                        <div>
                            <h5>Catherine Jo</h5>
                            <p>customer</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid eligendi odit qui, nihil eaque reiciendis distinctio corrupti veniam incidunt!</p>
                    <div className="d-flex gap-3">
                        <div style={{height:"50px"}}>
                            <img style={{height:"50px"}} className="img-fluid" src={require('../assets/images/ava-3.jpg')} alt="" />
                        </div>
                        <div>
                            <h5>Peter Alice</h5>
                            <p>customer</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid eligendi odit qui, nihil eaque reiciendis distinctio corrupti veniam incidunt!</p>
                    <div className="d-flex gap-3">
                        <div style={{height:"50px"}}>
                            <img style={{height:"50px"}} className="img-fluid" src={require('../assets/images/ava-1.jpg')} alt="" />
                        </div>
                        <div>
                            <h5>John Dep</h5>
                            <p>customer</p>
                        </div>
                    </div>
                </div>
        </div>
                </div>
                <div class="carousel-item">
                <div className="row">
                <div className="col-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid eligendi odit qui, nihil eaque reiciendis distinctio corrupti veniam incidunt!</p>
                    <div className="d-flex gap-3">
                        <div style={{height:"50px"}}>
                            <img style={{height:"50px"}} className="img-fluid" src={require('../assets/images/ava-3.jpg')} alt="" />
                        </div>
                        <div>
                            <h5>Peter Alice</h5>
                            <p>customer</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid eligendi odit qui, nihil eaque reiciendis distinctio corrupti veniam incidunt!</p>
                    <div className="d-flex gap-3">
                        <div style={{height:"50px"}}>
                            <img style={{height:"50px"}} className="img-fluid" src={require('../assets/images/ava-1.jpg')} alt="" />
                        </div>
                        <div>
                            <h5>John Dep</h5>
                            <p>customer</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid eligendi odit qui, nihil eaque reiciendis distinctio corrupti veniam incidunt!</p>
                    <div className="d-flex gap-3">
                        <div style={{height:"50px"}}>
                            <img style={{height:"50px"}} className="img-fluid" src={require('../assets/images/ava-2.jpg')} alt="" />
                        </div>
                        <div>
                            <h5>Catherine Jo</h5>
                            <p>customer</p>
                        </div>
                    </div>
                </div>
        </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
              </div>   
         </div>
        </div>
    )
}
export default Slikcarousel;