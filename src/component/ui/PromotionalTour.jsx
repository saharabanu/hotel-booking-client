'use client'

import hotelImg1 from "../../assets/images/hotel1.png";
import hotelImg2 from "../../assets/images/hotel2.png";
import hotelImg3 from "../../assets/images/hotel3.png";
import hotelImg4 from "../../assets/images/hotel4.png";
import hotelImg5 from "../../assets/images/hotel5.png";
import hotelImg6 from "../../assets/images/hotel6.png";
import Heading from '../../component/ui/reUsable/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import PromotionalTourCard from '../../component/ui/PromotionalTourCard'


const tours = [
  {
    id: 1,
    img: hotelImg1,
    title:'New beach, Thailand',
    address: 'Kantua hotel, Thailand',
    rating:4.8/5,
    review:1214,
    price:34
  },
  {
    id: 2,
    img: hotelImg2,
    title:'Hotel paradise international',
    address: 'Indonesia',
    rating:4,
    review:123,
    price:56
  },
  {
    id: 3,
    img: hotelImg3,
    title:'Hotel kualalampur',
    address: 'Kualalampur',
    rating:4.5,
    review:1045,
    price:67
  },
  {
    id: 4,
    img: hotelImg4,
    title:'Hotel deluxe',
    address: 'Mariana island',
    rating:4.8/2,
    review:875,
    price:79
  },
  {
    id: 5,
    img: hotelImg5,
    title:'Beach view',
    address: 'Thailand grand suit',
    rating:4.9,
    review:340,
    price:48
  },
  {
    id: 6,
    img: hotelImg6,
    title:'Zefi resort and spa',
    address: 'Long island',
    rating:4.8/5,
    review:1214,
    price:99
  },
];


const breakpoints = {
    
  480: {
      slidesPerView: 1,
     spaceBetween: 30,
    },
  576: {
      slidesPerView: 1,
     spaceBetween: 30,
    },
    786: {
   slidesPerView: 2,
      spaceBetween: 30,
   },
    1024: {
    slidesPerView: 4,
      spaceBetween: 30,
     },
   }

const PromotionalTour = () => {
  return (
    <>
      <section id="promotional_tours" className="section_padding_top">
        <div className="container">
          {/* <!-- Section Heading --> */}

          <Heading title="Our best promotional tours"/>
         

          <div className=" ">

          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}

        pagination={{
          clickable: true,
        }}
        breakpoints= {breakpoints}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
{tours.map((tour) => (<SwiperSlide key={tour.id}>
  <PromotionalTourCard  tour={tour} />
</SwiperSlide>
               
              ))}
        
        
      </Swiper>
            



            


           


            
          </div>
        </div>
      </section>
    </>
  );
};

export default PromotionalTour;
