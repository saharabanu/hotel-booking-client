"use client"

/* eslint-disable react/no-unescaped-entities */
import CommonBanner from "../../../component/ui/CommonBanner";
import Image from "next/image";
import reviewImg from "../../../assets/images/review6.png";
import { StarFilled } from "@ant-design/icons";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Heading from "../../../component/ui/reUsable/Heading";
// export const metadata = {
//   title: "Testimonial",

// };

const Testimonial = () => {
  const bannerLinks = [
    { text: 'Testimonial'}
    
    
  ];
  return (
    <>
<CommonBanner title="Testimonial" links={bannerLinks}/>

<section id="customer_reviews" className="section_padding_bottom">
        <div className="container">
          <Heading title ="What our client say about us"/>

          <div className="review-part">
       
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
              
        
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
        
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
       
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
        
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
            
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
        
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
       
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
        
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
       
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
       
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
        
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
        
        <div className="review-div">
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>08 Dec, 2021</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>Excellent</h5>
                    <div className="review_star_all">
                      <StarFilled />
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <Image src={reviewImg} alt="img" className="img" />
                  <h4>Jesica simpsn</h4>
                  {/* <span>Tourist</span> */}
                  <p>
                    {" "}
                    " Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
                    worth ur money for sure. thanks. Driver was very good and polite and safe
                    driving for all 6 days. on time pickup and drop overall. Thanks for it."{" "}
                  </p>
                </div>
              </div>
            </div>
        
         
        </div>
        </div>
      </section>


    </>
  )
}

export default Testimonial