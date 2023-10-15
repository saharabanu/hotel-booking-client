/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import reviewImg from "../../assets/images/review6.png";
import { StarFilled } from "@ant-design/icons";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Reviews = () => {

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
      slidesPerView: 3,
        spaceBetween: 30,
       },
     }
  return (
    <>
      <section id="customer_reviews" className="section_padding_bottom">
        <div className="container">
          <div className="">
            <div className="section_heading_center">
              <h2>Customer review</h2>
            </div>
          </div>

          <Swiper
        pagination={{
          dynamicBullets: false,
        }}
        modules={[Pagination]}
        breakpoints= {breakpoints}
        className="mySwiper"
      >
        <SwiperSlide>
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
              
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide><div className="review-div">
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
            </div></SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
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
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
       
      </Swiper>
         
        </div>
      </section>
    </>
  );
};

export default Reviews;
