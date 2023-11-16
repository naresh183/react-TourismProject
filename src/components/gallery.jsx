import React from "react";
function Gallery(){
    return(
        <div>
            <div className="container mt-5 gallery-images">
            <button style={{borderRadius:"30px"}} className="btn btn-warning mt-5 mb-4"><span className="dance-font fw-bold h5">Gallery</span></button>
            <h2 className="mb-5">Visit our customers tour gallery</h2>
          </div>
          <div className="container gallery">
            <div className="grid">
                <div className="row">
                    <div className="col">
                        <div>
                        <img className="img-fluid rounded" src={require('../assets/images/gallery-01.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                        <img className="img-fluid rounded" src={require('../assets/images/gallery-02.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                        <img className="img-fluid rounded" src={require('../assets/images/gallery-03.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div> 
                        <img className="img-fluid rounded" src={require('../assets/images/gallery-04.jpg')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div>
                        <img className="img-fluid rounded mt-4" src={require('../assets/images/gallery-05.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                        <img style={{marginTop:"-15px"}} className="img-fluid rounded" src={require('../assets/images/gallery-06.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                        <img className="img-fluid rounded mt-4" src={require('../assets/images/gallery-07.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div> 
                        <img style={{marginTop:"-15px"}} className="img-fluid rounded" src={require('../assets/images/gallery-08.jpg')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
export default Gallery;