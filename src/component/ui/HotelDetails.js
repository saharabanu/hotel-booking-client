'use client'
import Image from 'next/image'





const HotelDetails = ({hotel}) => {

  return (
    <>
   
   

   
<div className="theme_common_box_two img_hover">
            <div className="theme_two_box_img">
              <a href={`/details/${hotel._id}`}>
                <Image src={hotel?.images[0]}width={300} height={200}  alt="img"/>
              </a>
              <p><i className="fas fa-map-marker-alt"></i>{hotel.address} {hotel.country}</p>
            </div>
            <div className="theme_two_box_content">
              <h4><a href={`/details/${hotel._id}`}>{hotel?.title}, Thailand</a></h4>
              <p><span className="review_rating">{hotel.ratings.averageRating} Excellent</span> <span className="review_count">({hotel.ratings.totalReviews} {" "}
                    reviewes)</span></p>
              <h3>$ {hotel.price} <span> starts from</span></h3>
            </div>
            <div>
             <a href="/booking">
             <button style={{marginLeft:"20px", marginBottom:"10px", backgroundColor:'#8B3EEA',color:'#fff', border:"0", cursor:'pointer'}}>Book Now</button>
             </a>
              
            </div>
          </div>

    </>
  )
}

export default HotelDetails