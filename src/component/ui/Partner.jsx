import Image from 'next/image'
import partner1 from '../../assets/images/partner1.png';
import partner2 from '../../assets/images/partner2.png';
import partner3 from '../../assets/images/partner3.png';
import partner4 from '../../assets/images/partner4.png';
import partner5 from '../../assets/images/partner5.png';
import partner6 from '../../assets/images/partner6.png';

const Partner = () => {
  return (
    <>
<section id="our_partners" className="section_padding">
      <div className="">
        {/* <!-- Section Heading --> */}

        <div className="section_heading_center">
          <h2>Our partners</h2>
        </div>
        <div className="">
          <div className="partner-swiper swiper mySwiper">
            <div className="partner_slider_area owl-theme owl-carousel partner-part swiper-wrapper">

              <div className="partner_logo swiper-slide ">
                <a href="#!"><Image src={partner1} alt="logo"/></a>
              </div>
              {/* <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner3} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner4} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner5} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner6} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner1} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner3} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner4} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner5} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><iImage src={partner6}alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner1} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner2} alt="logo"/></a>
              </div>
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner3} alt="logo"/></a>
              </div> */}
              <div className="partner_logo swiper-slide">
                <a href="#!"><Image src={partner4} alt="logo"/></a>
              </div>



            </div>
            {/* <!-- <div className="swiper-pagination"></div> --> */}
          </div>
        </div>

      </div>
    </section>

    </>
  )
}

export default Partner