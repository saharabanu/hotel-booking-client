"use client";
import Image from "next/image";
import Reviews from "../ui/Reviews";
import { useGetSingleServiceQuery } from "../../redux/api/serviceApi";
import PromotionalTour from "../ui/PromotionalTour";
import FaceBookShare from '../others/FaceBookShare'

import { useState } from "react";

const iconImage = "https://andit.co/projects/html/and-tour/demo/assets/img/icon/ac.png";
const iconImage1 = "https://andit.co/projects/html/and-tour/demo/assets/img/icon/tv.png";
const iconImage2 = "https://andit.co/projects/html/and-tour/demo/assets/img/icon/gym.png";
const iconImage3 = "https://andit.co/projects/html/and-tour/demo/assets/img/icon/wifi.png";
const bigImage = "https://andit.co/projects/html/and-tour/demo/assets/img/hotel/hotel-big-1.png";
const smImage1 = "https://andit.co/projects/html/and-tour/demo/assets/img/hotel/small-1.png";

import CommonBanner from "../ui/CommonBanner";

import { useRouter } from "next/navigation";
import GmailShare from "../others/GmailShare";
import LinkedInShare from "../others/LinkedInShare";
import AllShareButton from "../others/AllShareButton";

const HotelDetailsById = ( {id}) => {
   
  const router = useRouter();
  
  const { data } = useGetSingleServiceQuery(id);
 
 

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const bannerLinks = [
    { text: 'Services', url: '/services' },
    { text: 'Details' },
    
  ];

  const handleProceedToBooking = () => {
    // Navigate to the booking page and pass the service data as a query parameter
    // router.push({
    //   pathname: '/booking',
    //   query: { serviceData: JSON.stringify(data) }, // Serialize the data to pass it as a query parameter
    // });
  };
  // console.log(data?.address)
  return (
    <>
    <CommonBanner title="Service-Details" links={bannerLinks} />
      <div className="container">
     


        <div className="details-main-section">
          <div className="details-lefts">
            <div className="tour_details_leftside_wrapper">
              <div className="tour_details_heading_wrapper">
                <div className="tour_details_top_heading">
                  <h2> {data?.title} </h2>
                  <h5>
                    <i className="fas fa-map-marker-alt"></i> {data?.address} , {data?.country}
                  </h5>
                </div>
                <div className="tour_details_top_heading_right">
                  <h4>Excellent</h4>
                  <p>
                    {data?.ratings?.averageRating} ({data?.ratings?.totalReviews} reviewes)
                  </p>
                </div>
              </div>
              <div className="tour_details_top_bottom">
                <div className="toru_details_top_bottom_item">
                  <div className="tour_details_top_bottom_icon">
                    <Image src={iconImage} width={20} height={20} alt="icon" />
                  </div>
                  <div className="tour_details_top_bottom_text">
                    <p>{data?.roomFacilities?.[3]}</p>
                  </div>
                </div>
                <div className="toru_details_top_bottom_item">
                  <div className="tour_details_top_bottom_icon">
                    <Image src={iconImage1} width={20} height={20} alt="icon" />
                  </div>
                  <div className="tour_details_top_bottom_text">
                    <p>{data?.roomFacilities?.[2]}</p>
                  </div>
                </div>
                <div className="toru_details_top_bottom_item">
                  <div className="tour_details_top_bottom_icon">
                    <Image src={iconImage2} width={20} height={20} alt="icon" />
                  </div>
                  <div className="tour_details_top_bottom_text">{data?.roomFacilities?.[1]}</div>
                </div>
                <div className="toru_details_top_bottom_item">
                  <div className="tour_details_top_bottom_icon">
                    <Image src={iconImage3} width={20} height={20} alt="icon" />
                  </div>
                  <div className="tour_details_top_bottom_text">
                    <p>{data?.roomFacilities?.[0]}</p>
                  </div>
                </div>
              </div>
              <div className="tour_details_img_wrapper">
                <div className="slider slider-for">
                  <div>
                    <Image
                      className="img"
                      src={data?.images?.[0]}
                      width={600}
                      height={400}
                      alt="img"
                    />
                  </div>
                  <br />
                  <div className="details-sm-img">
                    <div>
                      <Image src={data?.images?.[1]} width={150} height={150} alt="img" />
                    </div>
                    <div>
                      <Image src={data?.images?.[2]} width={150} height={150} alt="img" />
                    </div>
                    <div>
                      <Image src={data?.images?.[3]} width={150} height={150} alt="img" />
                    </div>
                    <div>
                      <Image src={data?.images?.[4]} width={150} height={150} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <br /> <br />
              <div className="tour_details_boxed">
                <h3 className="heading_theme">Overview</h3>
                <div className="tour_details_boxed_inner">
                  <p>{data?.description?.[0]}</p>
                  <p>{data?.description?.[1]}</p>
                  <ul>
                    <li>
                      <i className="fas fa-circle"></i>● Buffet breakfast as per the Itinerary
                    </li>
                    <li>
                      <i className="fas fa-circle"></i>● Visit eight villages showcasing Polynesian
                      culture
                    </li>
                    <li>
                      <i className="fas fa-circle"></i>● Complimentary Camel safari, Bonfire, and
                      Cultural Dance at Camp
                    </li>
                    <li>
                      <i className="fas fa-circle"></i>● All toll tax, parking, fuel, and driver
                      allowances
                    </li>
                    <li>
                      <i className="fas fa-circle"></i> ● Comfortable and hygienic vehicle
                      (SUV/Sedan) for sightseeing on all days as per the itinerary.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <br />

            <div>
              <h3>
                Available Room {data?.availability?.availableRooms}{" "}
                <p>Entry Time: {data?.availability?.checkInTime}</p>{" "}
              </h3>
              <h3>Tag: {data?.category}</h3>
            </div>


            <AllShareButton/>
          </div>




          <div className="details-rights">
            <div className="tour_details_right_sidebar_wrapper">
              <div className="tour_detail_right_sidebar">
                <div className="tour_details_right_boxed">
                  <div className="tour_details_right_box_heading"></div>
                  <div className="tour_package_bar_price">
                    <h3>
                      Price $ {data?.price} <sub>/Per Room</sub>{" "}
                    </h3>
                  </div>

                  <div className="tour_package_details_bar_list">
                    <h5>Hotel facilities</h5>
                    <ul>
                      <li>
                        <i className="fas fa-circle"></i>●  {data?.hotelsFacilities?.[0]}
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>● {data?.hotelsFacilities?.[1]}
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>● {data?.hotelsFacilities?.[2]}
                        ,
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>● {data?.hotelsFacilities?.[3]}
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>● {data?.hotelsFacilities?.[4]}
                      </li>
                    </ul>
                   {/* <ModalButton/> */}
                   <button
        className="btn btn_theme btn_md"
        onClick={handleProceedToBooking}
      >
        Proceed To Booking
      </button>
                  </div>
                </div>
              </div>
              <br /> <br />
              <div className="tour_detail_right_sidebar">
                <div className="tour_details_right_boxed">
                  <div className="tour_details_right_box_heading">
                    <h3>Why choose us</h3>
                  </div>

                  <div className="tour_package_details_bar_list first_child_padding_none">
                    <ul>
                      <li>
                        <i className="fas fa-circle"></i>Buffet breakfast as per the Itinerary
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>Visit eight villages showcasing Polynesian
                        culture
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>Complimentary Camel safari, Bonfire,
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>All toll tax, parking, fuel, and driver
                        allowances
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>Comfortable and hygienic vehicle
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div>
        

        <PromotionalTour/>
      </div>
      <div className="" style={{ marginBottom: "30px" }}>


        <Reviews />
      </div>
    </>
  );
};

export default HotelDetailsById;
  