import React, { useState} from "react";
import {useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Footer from "./footer";

function Mybookings() {

    // const navigate = useNavigate();
    const location = useLocation();

    const [rating,setRating] = useState(null)
    const [hover,setHover] = useState(null)

    const [review, setReview] = useState('');
    const [reviewsList, setReviewsList] = useState([]);

    const [numberOfPeople, setNumberOfPeople] = useState(0);
    const [selectedTour, setSelectedTour] = useState(location?.state?.selectedTour || null);

function calculateTotalCost(numberOfPeople) {
    const costPerPerson = 99;
    const serviceCharge = 10;
    const totalCost = (costPerPerson * numberOfPeople) + serviceCharge;
    return totalCost;
  }

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value, 10));
  };

  const totalCost = calculateTotalCost(numberOfPeople);

  function Product(){
    const costPerPerson = 99;
    return costPerPerson * numberOfPeople
  }

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const addReview = () => {
    setReviewsList([...reviewsList, review]);
    setReview('');
  };

  return (
    <div  style={{marginTop:"100px"}}>
        <div className='d-flex justify-content-center gap-4 row'>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div style={{border:"1px solid grey"}} className="mb-4"> 
         <img className="img-fluid" src={selectedTour?.photo} alt="" />
         <div className="p-3">
              <h2>{selectedTour?.title}</h2>
              <div>
                <p>Reviews: (<span>{reviewsList.length}</span>)</p>
              </div>
              <div className="d-flex justify-content-evenly gap-5">
                <p>City: {selectedTour?.city}</p>
                <p>Price: {selectedTour?.price}/person</p>
                <p>Distance: {selectedTour?.distance}</p>
                <p>Max Group Size: {selectedTour?.maxGroupSize}</p>
              </div>
              <h5>Description</h5>
              <p>{selectedTour?.desc}</p>
            </div>
    </div>
    {/* Reviews */} 
    <div className="p-2 shadow-sm" style={{ border: "1px solid grey" }}>
        <h5>Reviews (<span>{reviewsList.length}</span>)</h5><br />
        
        <div>
            {[...Array(5)].map((star,index)=>{
                const currentRating = index +1
                return(
                    <label>
                        <input type="radio" name="rating" value={currentRating} onClick={()=>setRating(currentRating)}/>
                        <FaStar size={25} className="star"
                        color={currentRating <= (hover || rating) ? "orange" : "gray" }
                        onMouseEnter={()=>setHover(currentRating)}
                        onMouseLeave={()=>setHover(null)}/>
                    </label>
                )
            })}
            <p>Your rating is :{rating}</p>
        </div>
        <div style={{ border: "1px solid grey", borderRadius: "20px" }} className="d-flex justify-content-between p-1 tourseparate">
          <textarea
            cols="70"
            rows="1"
            style={{ marginLeft: "5px", border: "none", outline: "none" }}
            type="text"
            placeholder="Share your thoughts"
            value={review}
            onChange={handleReviewChange}
          />
          <button style={{ borderRadius: "20px" }} className="btn btn-warning text-light" onClick={addReview}>
            <b>Submit</b>
          </button>
        </div>
        {reviewsList.map((review, index) => (
          <div key={index}>{review}</div>
        ))}
      </div>
 </div>
    <div style={{border:"1px solid grey",height:"fit-content"}} className="col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
           <span className="display-6"><b>99</b></span><span>/Per person (0) </span>
            <hr />
            <h5>Information</h5>
                <form className="border 1px solid grey p-4 tourseparate">
                    <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name"/>
                    </div>
                    <hr />
                    <div class="form-group">
                    <input type="tele" class="form-control" id="exampleInputPassword1" placeholder="Phone Number"/>
                    </div>
                    <hr />
                    <div className="d-flex">
                    <input type="date" class="form-control w-50"  />
                    <input type="number" class="form-control w-50" placeholder="Number of Guests" value={numberOfPeople} onChange={handleNumberOfPeopleChange} />
                    </div>
                </form>

      <div className="d-flex justify-content-between mt-3 tourseparate">
        <p>99 x <input value={numberOfPeople} type="number" style={{ width: "50px" }} onChange={handleNumberOfPeopleChange} /> Person</p> 
        <input type="text" value={Product()} readOnly style={{ width: "50px" }}/>
      </div>

      <div className="d-flex justify-content-between p-1">
        <p>Service charges</p>
        <p>10</p>
      </div>

      <div className="d-flex justify-content-between">
        <p><b>Total</b></p>
        <p><b>{totalCost}</b></p>
      </div>

      <div className="text-center mt-3">
        <button style={{borderRadius:"20px"}} type="submit" class="btn btn-warning w-75 text-light"><b>Book Now</b></button>
      </div>
    </div>
        </div>
        {/* foooetr */}
          <Footer/>
    </div>

     );
}

export default Mybookings;
