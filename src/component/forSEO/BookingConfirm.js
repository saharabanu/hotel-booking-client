"use client";
import CommonBanner from "../../component/ui/CommonBanner";
import SubHeading from "../ui/reUsable/SubHeading";
import tikImg from "../../assets/images/booking-thick-mark.png";
import Image from "next/image";
import Link from "next/link";
import { getUserInfo } from "../../services/auth.service";
import { useGetSingleUserQuery } from "../../redux/api/userApi";

const BookingConfirm = () => {
  const { id, email } = getUserInfo();
  const {data} = useGetSingleUserQuery(id)

  const bannerLinks = [
    { text: "Services", url: "/services" },
    { text: "details", url: "/details" },
    { text: "Booking", url: "/booking" },
    { text: "Booking-Confirm" },
  ];
  return (
    <>
      <CommonBanner title="Booking-Confirm" links={bannerLinks} />

      {/* <!-- Tour Booking Submission Areas --> */}
      <section id="tour_booking_submission" className="section_padding">
        <div className="container">
          <div className="booking">
            <div className="tou_booking_form_Wrapper">
              <div className="tour_booking_form_box ">
                <div className="booking_success_area">
                  <div className="booking_success_img">
                    <Image src={tikImg} alt="img" width={100} height={100} />
                  </div>
                  <div className="booking_success_text">
                    <h3>{data?.name}, your order was submitted successfully!</h3>
                    <h5>Your booking details has been sent to: {email}</h5>
                  </div>
                </div>
              </div>
              <br />
              <Link href="/profile">
                <button className="btn btn_theme btn_md">
                  Please Go Your DashBoard For seeing More details
                </button>
              </Link>

              <div className="booking_tour_form">
                <SubHeading title="Your Information" />
                <div className="tour_booking_form_box">
                  <div className="booking-card">
                    {/* {formData} hythtyjj */}
                    <h5>First name:</h5>
                    <h5>{data?.name}</h5>
                  </div>
                  <hr />
                  <div className="booking-card">
                    <h5>Last name:</h5>
                    <h5>Doe</h5>
                  </div>
                  <hr />
                  <div className="booking-card">
                    <h5>Email:</h5>
                    <h5>{email}</h5>
                  </div>
                  <hr />
                  <div className="booking-card">
                    <h5>Address:</h5>
                    <h5>1901 Thornridge Cir. Shiloh, Hawaii 81063</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="tour_detail_right_sidebar">
              <div className="tour_details_right_boxed">
                <SubHeading title="Booking Details" />

                <div className="booking-card">
                  <h5>Booking ID:</h5>
                  <h5>#RB5783GH</h5>
                </div>
                <div className="booking-card">
                  <h5>Booking date:</h5>
                  <h5>10 February 2024</h5>
                </div>
                <div className="booking-card">
                  <h5>Payment method:</h5>
                  <h5>Bank transfer</h5>
                </div>
                <div className="booking-card">
                  <h5>Booking status:</h5>
                  <h5>Success</h5>
                </div>
                <hr />
                <div className="booking-card">
                  <h5>Adult Price</h5>
                  <h5>$ 5000</h5>
                </div>
                <div className="booking-card">
                  <h5>Tax</h5>
                  <h5>$ 5</h5>
                </div>
                <hr />
                <div className="booking-card">
                  <h5>Total Amount</h5>
                  <h5>$ 5879</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingConfirm;
