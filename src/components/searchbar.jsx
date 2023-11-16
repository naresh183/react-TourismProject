import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import allTours from './tourdata'

function Searchbar(){
    const navigate = useNavigate();
    const Data = allTours;

const [searchQuery, setSearchQuery] = useState('');
const [filteredTours, setFilteredTours] = useState([]);
const [selectedCity, setSelectedCity] = useState(null);
const [isSearching, setIsSearching] = useState(false);

const handleSearchChange = (event) => {
  const query = event.target.value;
  setSearchQuery(query);
};

const handleSearch = () => {
  const filtered = Data.filter(
    (tour) =>
      tour.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filtered.length > 0) {
    setSelectedCity(filtered[0]);
    setIsSearching(true);
  } else {
    setSelectedCity(null);
    setIsSearching(false);
  }

  setFilteredTours(filtered);
};
function booknow(selectedTour) {
    navigate('/Mybookings', { state: { selectedTour } });
  }

    return(
        <div>
            
          <div className="container mt-5 col-12">
                <div className="grid col-12">
                    <div className="container">
                    <div className=" col-12 col-sm-12 col-md-12 col-lg-10 row shadow-lg d-flex justify-content-evenly p-2 locationBar align-items-center location">
                        <div className="col-5 col-sm-5 col-md-3 col-lg-4 Location-inner">
                                <p> <span><i class="fa-solid fa-location-dot" style={{color:"orange"}}></i></span> Location</p>
                                <input style={{width:"180px"}}  type="text" placeholder="Where are you going ?" value={searchQuery} onChange={handleSearchChange} />
                        </div>

                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 Distance">
                                <p><span><i class="fa-solid fa-location-dot" style={{color:"orange"}}></i></span> Distance</p>
                                <input  type="number" placeholder="Distance k/m" />
                        </div>

                        <div className="col-2 col-sm-2 col-md-3 col-lg-2 MaxPeople">
                                <p><i class="fa-solid fa-user-group" style={{color:"orange"}}></i> Max People</p>
                                <input  style={{width:"50px"}}  type="number" placeholder="0" />
                        </div>
                        <div className="col-2 col-sm-2 col-md-3 col-lg-1 search">
                            <button onClick={handleSearch}  style={{borderRadius:"15px 3px"}} className="btn btn-warning text-light p-4 search-button search-button"><i class="fa-solid fa-magnifying-glass search-icon"></i></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

                        
<div className="container">
<div className="mt-5 mb-5">
<div className="row">
{isSearching && filteredTours.length > 0 ? (
    filteredTours.map((tour) => (
      <div key={tour.id} className="card shadow-lg col-12 col-sm-6 col-md-3 col-lg-3 mb-4 m-2">
          <div className="mt-2" style={{ height: "200px" }}>
            <img style={{ height: "200px", width: "100%" }}className="img-fluid rounded"src={tour.photo}alt=""/>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p>
                <span>
                  <i class="fa-solid fa-location-dot" style={{ color: "orange" }}></i>
                </span>
                {tour.city}
              </p>
              <p>
                <span>
                  <i class="fa-regular fa-star" style={{ color: "orange" }}></i>
                </span>
                Not rated
              </p>
            </div>
            <h5>{tour.title}</h5>
            <div className="d-flex justify-content-between">
              <p>
                <span>
                  <b className="text-warning">${tour.price}</b>
                </span>
                /per person
              </p>
              <button
                onClick={() => booknow(tour)}
                className="btn btn-warning text-light"
              >
                Book <br /> Now
              </button>
            </div>
        </div>
      </div>
    ))
  ) : (
      filteredTours.map((tour) => (
        <div key={tour.id} className="card shadow-lg">
<div className="container">
<div className="row">
          {Data.map((item,index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4 ">
              <div style={{height:"400px"}} className="card shadow-lg card2">
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
                                   <button onClick={() => booknow(item)} className="btn btn-warning text-light">Book Now</button>
                               </div>
                           </div>
              </div>
            </div>
          ))}
</div>
</div>
</div>
      ))
    )}
</div>
</div>
</div>

        </div>
        
    )
}
export default Searchbar;