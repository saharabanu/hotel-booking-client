'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import Booking from '../../../component/forSEO/Booking';
// export const metadata = {
//   title: "Hotel booking",

// };

const HotelBooking = () => {
  const router = useSearchParams();
  const id = router.get("id");
  const userId = router.get("userId");
 
  
  
 
  return (
    <>
    
      <Booking id={id} userId={userId}/>
    </>
  )
}

export default HotelBooking