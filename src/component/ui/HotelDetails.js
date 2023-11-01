'use client'
import Image from 'next/image'
import { getUserInfo } from '../../services/auth.service'
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setSelectedHotel } from '../../redux/features/selectedHotelSlice';
import { useGetSingleServiceQuery } from '../../redux/api/serviceApi';





const HotelDetails = ({hotel}) => {
  
  // const { data } = useGetSingleServiceQuery();
  // console.log(data)
  const dispatch = 
  useDispatch();
 
  const {email} = getUserInfo();
  const router = useRouter();
  const handleBookHotel = () => {
    if (email) {
      dispatch(setSelectedHotel(hotel));
       console.log(setSelectedHotel(hotel), 'from hotel page') 

      // Redirect to the booking page
      router.push('/booking'); 
      // User is authenticated, allow them to book the hotel
      // Add your booking logic here
    } else {
      router.push('/signin')
    }
  }

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
             
             <button  onClick={handleBookHotel} style={{marginLeft:"20px", marginBottom:"10px", backgroundColor:'#8B3EEA',color:'#fff', border:"0", cursor:'pointer', borderRadius: "5px", padding: '10px 7px'}}>Book Now</button>
            
              
            </div>
          </div>

    </>
  )
}

export default HotelDetails