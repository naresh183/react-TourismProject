import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import allTours from './tourdata'
import Footer from "./footer";
import Slikcarousel from "./slikcarousel";
import Subscribe from "./subscribe";
import Searchbar from "./searchbar";
import Gallery from "./gallery";

function Home(){
    const cardsPerPage = [8, 4];
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const pageSize = currentPage === 1 ? cardsPerPage[0] : cardsPerPage[1];
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const Data = allTours.slice(startIndex, endIndex);
function booknow(selectedTour) {
    navigate('/Mybookings', { state: { selectedTour } });
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
};
    return(
        <div> 
            <div className="container">
                <div className="container">
                    <div  className="row d-flex justify-content-around ">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mt-5">
                               <div className="d-flex" style={{marginTop:"130px"}}>
                                    <button style={{borderRadius:"30px"}} className="btn btn-warning dance-font"><span className="dance-font h5">Know before you go</span></button>
                                    <div style={{height:"35px",width:"35px"}}><img className="img-fluid" src={require('../assets/images/world.png')} alt="" /></div>                                                      
                               </div>
                            <h2 className="mt-4">Travelling opens <br/> the doors to <br /> creating <span className="text-warning">memories</span></h2>
                            <p className="mt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur dolore nam modi labore facere id ut veniam itaque quasi, sunt unde? Mollitia id soluta animi repudiandae omnis quibusdam illo blanditiis possimus ex sint cupiditate corrupti labore non, qui est porro excepturi quasi labor.</p>
                        </div>

                        <div className="img-video col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-evenly"style={{marginTop:"130px"}}>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 hero-image">
                                <img className="img-fluid mt-4  border border-warning" src={require('../assets/images/hero-img01.jpg') } alt="" style={{borderRadius:"20px"}} />
                            </div>

                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 hero-image mt-4">
                                <video controls autoPlay className="mt-5 border border-warning object-fit-cover"  width="130px" height="320px" src={require('../assets/images/hero-video.mp4')} style={{borderRadius:"20px"}} ></video>
                            </div>
                            
                            <div className="col-5 col-sm-4 col-md-4 col-lg-4 hero-image">        
                                <img style={{marginTop:"110px", borderRadius:"20px"}} className="img img-fluid  border border-warning" src={require('../assets/images/hero-img02.jpg') } alt="" />         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* search bar and Featured tours  */}
            <Searchbar/>
            
          {/* what we serve */}

<div className="container mt-5">
                <div className="grid">
                    <div className="col-12 row d-flex justify-content-center gap-4 serve">
                        <div className="col-12 col-sm-6 col-md-1 col-lg-2">
                            <p className="text-danger mt-5 dance-font h4" >What we serve</p>
                            <h3 className="offer">We offer our best services</h3>
                        </div>

                        <div className="col-10 col-sm-6 col-md-3 col-lg-3 p-3 mt-5 weather shadow-lg">
                            <div style={{height:"65px",width:"65px",borderRadius:"50%"}} className="bg-warning p-3 mb-2">
                                <img className="img-fluid bg-warning" src={require('../assets/images/weather.png') } alt="" />
                            </div>
                            <div className="card-body">
                                <h3>Calculate weather</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                            </div>
                        </div>

                        <div className="col-10 col-sm-6 col-md-3 col-lg-3 p-3 mt-5 guide shadow-lg ">
                            <div style={{height:"65px",width:"65px",borderRadius:"50%"}} className="bg-warning p-3 mb-2">
                                <img className="img-fluid bg-warning" src={require('../assets/images/guide.png') } alt="" />
                            </div>
                            <div className="card-body">
                                <h3>Best tour guide</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                            </div>
                        </div>

                        <div className="col-10 col-sm-6 col-md-3 col-lg-3 p-3 mt-5 customization shadow-lg">
                            <div style={{height:"65px",width:"65px",borderRadius:"50%"}} className="bg-warning p-3 mb-2">
                                <img className="img-fluid" src={require('../assets/images/customization.png') } alt="" />
                            </div>
                            <div className="card-body">
                                <h3>Customization</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
{/* Featured Tours cards starts here*/}

<div className="container mt-5">
<div className="row">
          {Data.map((item,index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4 ">
              <div  className="card shadow-lg card2">
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

            {/* Pagination */}
            <div className="pagination justify-content-center mt-4">
                {[...Array(Math.ceil(allTours.length / cardsPerPage[0]))].map((_, index) => (
                    <button
                        key={index}
                        className={`btn btn-outline-secondary mx-1 ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

          {/* experience */}

          <div className="container experience">
            <div className="grid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
                    <br /><br /><br />
                        <button style={{borderRadius:"30px"}} className="btn btn-warning mb-5"> <span className="dance-font h5">Experience</span></button>
                        <h1 className="mb-5">With our all experience <br /> we will serve you</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, cupiditate.</p>
                        <div className="d-flex justify-content-evenly mt-5">
                            <div>
                                <button className="btn btn-warning p-3 mb-2 text-light" ><b>12k+</b></button>
                                <p>Successfull <br /> Trips</p>
                            </div>
                            <div>
                                <button className="btn btn-warning p-3 mb-2 text-light" ><b>2k+</b></button>
                                <p>Regular <br /> clients</p>
                            </div>
                            <div>
                                <button className="btn btn-warning p-3 mb-2 text-light" ><b>15</b></button>
                                <p>Years <br /> Experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
                    <br /><br /><br />
                        <img className="img-fluid" src={require('../assets/images/experience.png')} alt="" />

                    </div>
                </div>
            </div>
          </div>
          <Gallery/>
          <Slikcarousel/>
          <Subscribe/>
          <Footer/>
        </div>
    )
}
export default Home;