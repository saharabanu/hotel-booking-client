'use client'
import Image from 'next/image'

import hotelImg1 from '../../assets/images/hotel1.png'
import hotelImg2 from '../../assets/images/hotel2.png'
import hotelImg3 from '../../assets/images/hotel3.png'
import hotelImg4 from '../../assets/images/hotel4.png'
import hotelImg5 from '../../assets/images/hotel5.png'
import hotelImg6 from '../../assets/images/hotel6.png'
import hotelImg7 from '../../assets/images/hotel7.png'
import hotelImg8 from '../../assets/images/hotel8.png'
const HotelDetails = ({hotel}) => {
    console.log(hotel.images[0])
  return (
    <>
<div className="theme_common_box_two img_hover">
            <div className="theme_two_box_img">
              <a href={`/hotel/hotel-details/${hotel._id}`}>
                <Image src={hotel?.images[0]}width={300} height={200}  alt="img"/>
              </a>
              <p><i className="fas fa-map-marker-alt"></i>{hotel.address} {hotel.country}</p>
            </div>
            <div className="theme_two_box_content">
              <h4><a href="#">{hotel?.title}, Thailand</a></h4>
              <p><span className="review_rating">{hotel.ratings.averageRating} Excellent</span> <span className="review_count">({hotel.ratings.totalReviews} {" "}
                    reviewes)</span></p>
              <h3>$ {hotel.price.cabin1} <span> starts from</span></h3>
            </div>
          </div>

    </>
  )
}

export default HotelDetails