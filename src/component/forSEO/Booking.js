"use client";
import Payment from "../others/Payment";
import CommonBanner from "../ui/CommonBanner";

import { useRouter } from "next/navigation";
import { useGetSingleUserQuery } from "../../redux/api/userApi";
import SubHeading from "../ui/reUsable/SubHeading";
import { useGetSingleServiceQuery } from "../../redux/api/serviceApi";

import { useAddBookingMutation } from "../../redux/api/bookingApi";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Booking = ({ id, userId }) => {
  const { data: userData } = useGetSingleUserQuery(userId);

  const { register, handleSubmit, reset } = useForm();
  const { data } = useGetSingleServiceQuery(id);

  const [addBooking] = useAddBookingMutation();

  const router = useRouter();

  const onSubmit = async (bookingData) => {
    try {
      const formData = {
        status: false, // true = accepted, false = rejected
        userId: userData?.id,
        serviceId: data?.id,
        address: bookingData?.address,
        name: userData?.name,
        email: userData?.email,
        phonenumber: userData?.phonenumber,
        payment: bookingData?.payment,
        startDate: bookingData?.startDate,
        endDate: bookingData?.endDate,
      };
      // console.log(formData);
      const res = await addBooking({ ...formData }).unwrap();
      // console.log(res, "from res");
      if (res) {
        Swal.fire({
          title: "Booking Successful",
          text: "Please check your booking list",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Go to Booking confirmation page",
          cancelButtonText: "Stay here",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('booking-confirmation')
            
           
            reset();
          }
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // {`/booking?id=${hotel?._id}&userId=${userId}`}

  const bannerLinks = [
    { text: "Services", url: "/services" },
    { text: "Hotel-details", url: `/details/${id}` },
    { text: "Booking" },
  ];
  // console.log(hotel)
  return (
    <>
      <CommonBanner title="Booking" links={bannerLinks} />

      {/* <!-- Tour Booking Submission Areas --> */}

      <section id="tour_booking_submission" className="section_padding">
        <div className="container">
          <div className="booking">
            <div className="booking-first-div">
              <div className="tou_booking_form_Wrapper">
                <div className="booking_tour_form">
                  <SubHeading title="Booking submission" />
                  <div className="tour_booking_form_box">
                    <form onSubmit={handleSubmit(onSubmit)} id="tour_bookking_form_item">
                      <div className="form-group">
                        <input
                          {...register("name")}
                          name="name"
                          value={userData?.name}
                          type="text"
                          className="form-control bg_input"
                          placeholder="First name*"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          {...register("email")}
                          name="email"
                          value={userData?.email}
                          type="email"
                          className="form-control bg_input"
                          placeholder="Email address "
                        />
                      </div>

                      <div className="form-group">
                        <input
                          {...register("phonenumber")}
                          name="phonenumber"
                          value={userData?.phonenumber}
                          type="text"
                          className="form-control bg_input"
                          placeholder="Mobile number*"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          {...register("address")}
                          name="address"
                          type="text"
                          className="form-control bg_input"
                          placeholder="Address*"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          {...register("startDate")}
                          name="startDate"
                          type="date"
                          className="form-control bg_input"
                          placeholder="Type Date"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          {...register("endDate")}
                          name="endDate"
                          type="date"
                          className="form-control bg_input"
                          placeholder="Type End Date"
                        />
                      </div>
                      
 <br />
                      <input type="submit" value="Submit"  className="btn btn_theme btn_md" />
                    </form>
                  </div>
                </div>
                {/* payment system */}
                {/* <div className="booking_tour_form_box">
                  <SubHeading title="Payment method" />
                  <Payment />
                </div> */}
                <br /> <br />
                {/* check box */}
                {/* <div className="booking_tour_form_submit">
                  <div className="form-check write_spical_check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefaultf1"
                      required
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefaultf1">
                      <span className="main_spical_check">
                        <span>
                          I read and accept all <a href="terms-service.html">Terms and conditios</a>
                        </span>
                      </span>
                    </label>
                  </div>
                  <br />
                  <a href="/booking-confirmation" className="btn btn_theme btn_md">
                    Submit
                  </a>
                </div> */}
              </div>
            </div>
            {/* right section */}
            <div className="booking-last-div">
              <div className="tour_details_right_sidebar_wrapper">
                <div className="tour_detail_right_sidebar">
                  <div className="tour_details_right_boxed">
                    <SubHeading title={data?.title} />

                    <div className="tour_package_details_bar_list">
                      <h3>Package details</h3>
                      <ul>
                        <li>► {data?.hotelsFacilities?.[0]}</li>
                        <li>► {data?.hotelsFacilities?.[1]}</li>
                        <li>► {data?.hotelsFacilities?.[2]}</li>
                        <li>► {data?.hotelsFacilities?.[3]}</li>
                        <li>► {data?.hotelsFacilities?.[4]}</li>
                      </ul>
                    </div>
                    <div className="tour_package_details_bar_price">
                      <h3>
                        Price $ {data?.price} <sub>/Per Room</sub>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                <br />
                {/* <div className="tour_detail_right_sidebar">
                  <div className="tour_details_right_boxed">
                    <SubHeading title="Travel Date" />
                    <div className="edit_date_form">
                      <div className="form-group">
                        <label htmlFor="dates">Edit Date</label>
                        <input type="date" id="dates" value="2022-05-05" className="form-control" />
                      </div>
                    </div>
                    <div className="tour_package_details_bar_list">
                      <SubHeading title="Tourist" />
                      <div className="form-group">
                        <label>Adult Person</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Type number of person"
                        />
                      </div>

                      <div className="form-group">
                        <label>Child</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Type number of person"
                        />
                      </div>
                      <div className="form-group">
                        <label>Infant Under 2 years</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Type number of person"
                        />
                      </div>
                    </div>
                    <div className="edit_person">
                      <p>Edit person</p>
                    </div>
                  </div>
                </div> */}

                <br />

                {/* cupon code  */}
                {/* <div className="tour_detail_right_sidebar">
                  <div className="tour_details_right_boxed">
                    <div className="tour_details_right_box_heading">
                      <h3>Coupon code</h3>
                    </div>
                    <div className="coupon_code_area_booking">
                      <form action="#!">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control bg_input"
                            placeholder="Enter coupon code"
                          />
                        </div>
                        <div className="coupon_code_submit">
                          <button className="btn btn_theme btn_md">Apply voucher</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div> */}

                <br />
                {/* <div className="tour_detail_right_sidebar">
                  <div className="tour_details_right_boxed">
                    <SubHeading title="Booking Amount" />

                    <div className="booking-card">
                      <h5>Adult Price</h5>
                      <h5>$40,000.00</h5>
                    </div>
                    <div className="booking-card">
                      <h5>Discount</h5>
                      <h5>10%</h5>
                    </div>
                    <div className="booking-card">
                      <h5>Tax</h5>
                      <h5>$ 5</h5>
                    </div>
                    <hr />
                    <div className="booking-card">
                      <h5>Total Amount</h5>
                      <h5>$ 567</h5>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
