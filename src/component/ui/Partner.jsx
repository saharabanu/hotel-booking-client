import Image from 'next/image'
import partner1 from '../../assets/images/partner1.png';
import partner2 from '../../assets/images/partner2.png';
import partner3 from '../../assets/images/partner3.png';
import partner4 from '../../assets/images/partner4.png';
import partner5 from '../../assets/images/partner5.png';
import partner6 from '../../assets/images/partner6.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Partner = () => {

  

  const breakpoints = {
    
      480: {
          slidesPerView: 3,
         spaceBetween: 3,
        },
      576: {
          slidesPerView: 3,
         spaceBetween: 3,
        },
        786: {
       slidesPerView: 5,
          spaceBetween: 3,
       },
        1024: {
        slidesPerView: 6,
          spaceBetween: 3,
         },
       }
 
  return (
    <>
<section id="our_partners" className="section_padding">
      <div className="">
        {/* <!-- Section Heading --> */}

        <div className="section_heading_center">
          <h2>Our partners</h2>
        </div>
        <div className="">
       

      <Swiper
        // pagination={{
        //   dynamicBullets: false,
        // }}
        // modules={[Pagination]}
        breakpoints= {breakpoints}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
              
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide><div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div></SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
        </SwiperSlide>
       
      </Swiper>
          
        </div>

      </div>
    </section>

    </>
  )
}

export default Partner