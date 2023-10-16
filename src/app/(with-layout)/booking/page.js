'use client';
import React from "react";
import HotelBreadCrumb from "../../../component/ui/HotelBreadCrumb";
import Form from "../../../component/form/Form";
import FormInput from "../../../component/form/FormInput";
import Payment from '../../../component/others/Payment'

const HotelBookingFormPAge = () => {
  const onSubmit =  (data) => {
    console.log(data)
  }
  const base = "Home";
  return (
    <>
      <div className="container">
        <HotelBreadCrumb
          items={[
            {
              label: `${base}`,
              link: "/",
            },
            {
              label: "Services",
              link: "/services",
            },

            {
              label: "Booking",
              link: "/booking",
            },
          ]}
          style={{ paddingLeft: "20px " }}
        />
      </div>

      {/* <!-- Tour Booking Submission Areas --> */}
      <section id="tour_booking_submission" className="section_padding">
        <div className="container">
          <div className="booking">
            <div className="booking-first-div">
              <div className="tou_booking_form_Wrapper">
                <div className="booking_tour_form">
                  <h3 className="heading_theme">Booking submission</h3>
                  <div className="tour_booking_form_box">
                    <Form  submitHandler={onSubmit}id="tour_bookking_form_item">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                            name='firstName'
                            size='small'
                              type="text"
                              className="form-control bg_input"
                              placeholder="First name*"
                             required/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                            name='lastName'
                              type="text"
                              className="form-control bg_input"
                              placeholder="Last name*"
                            required/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control bg_input"
                              placeholder="Email address (Optional)"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control bg_input"
                              placeholder="Mobile number*"
                            required/>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control bg_input"
                              placeholder="Street address"
                            required/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control bg_input"
                              placeholder="Apartment, Suite, House no (optional)"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <select className="form-control form-select bg_input" style={{color:'black'}}> Select Your City
                              <option value="1">Khulna</option>
                              <option value="1">New York</option>
                              <option value="1">Barisal</option>
                              <option value="1">Nator</option>
                              <option value="1">Joybangla</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <select className="form-control form-select bg_input" style={{color:'black'}}>
                              <option value="1">State</option>
                              <option value="1">New York</option>
                              <option value="1">Barisal</option>
                              <option value="1">Nator</option>
                              <option value="1">Joybangla</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <select className="form-control form-select bg_input" style={{color:'black'}}>
                              <option value="1">Country</option>
                              <option value="1">New York</option>
                              <option value="1">Barisal</option>
                              <option value="1">Nator</option>
                              <option value="1">Joybangla</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="booking_tour_form">
                  <h3 className="heading_theme">Payment method</h3>
                  <Payment/>
                </div>
                <br /> <br />
                <div className="booking_tour_form_submit">
                  <div className="form-check write_spical_check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefaultf1"
                    />
                    <label className="form-check-label" for="flexCheckDefaultf1">
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
                </div>
               
              </div>
            </div>
            <div className="booking-last-div">
              <div className="tour_details_right_sidebar_wrapper">
                <div className="tour_detail_right_sidebar">
                  <div className="tour_details_right_boxed">
                    <div className="tour_details_right_box_heading">
                      <h3>Super deluxe package</h3>
                    </div>
                    <div className="valid_date_area">
                      <div className="valid_date_area_one">
                        <h5>Valid from</h5>
                        <p>01 Feb 2022</p>
                      </div>
                      <div className="valid_date_area_one">
                        <h5>Valid till</h5>
                        <p>15 Feb 2022</p>
                      </div>
                    </div>
                    <div className="tour_package_details_bar_list">
                      <h5>Package details</h5>
                      <ul>
                        <li>
                          <i className="fas fa-circle"></i>Buffet breakfast as per the Itinerary
                        </li>
                        <li>
                          <i className="fas fa-circle"></i>Visit eight villages showcasing
                          Polynesian culture
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
                    <div className="tour_package_details_bar_price">
                      <h5>Price</h5>
                      <div className="tour_package_bar_price">
                        <h6>
                          <del>$ 35,500</del>
                        </h6>
                        <h3>
                          $ 30,500 <sub>/Per serson</sub>{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="tour_detail_right_sidebar">
                  <div className="tour_details_right_boxed">
                    <div className="tour_details_right_box_heading">
                      <h3>Travel date</h3>
                    </div>
                    <div className="edit_date_form">
                      <div className="form-group">
                        <label for="dates">Edit Date</label>
                        <input type="date" id="dates" value="2022-05-05" className="form-control" />
                      </div>
                    </div>
                    <div className="tour_package_details_bar_list">
                      <h5>Tourist</h5>
                      <div className="select_person_item">
                        <div className="select_person_left">
                          <h6>Adult</h6>
                          <p>12y+</p>
                        </div>
                        <div className="select_person_right">
                          <h6>01</h6>
                        </div>
                      </div>

                      <div className="select_person_item">
                        <div className="select_person_left">
                          <h6>Children</h6>
                          <p>2 - 12 years</p>
                        </div>
                        <div className="select_person_right">
                          <h6>01</h6>
                        </div>
                      </div>
                      <div className="select_person_item">
                        <div className="select_person_left">
                          <h6>Infant</h6>
                          <p>Below 2 years</p>
                        </div>
                        <div className="select_person_right">
                          <h6>01</h6>
                        </div>
                      </div>
                    </div>
                    <div className="edit_person">
                      <p>Edit person</p>
                    </div>
                  </div>
                </div>

                <br />
                <div className="tour_detail_right_sidebar">
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
                </div>
                <br />
                <div className="tour_detail_right_sidebar">
                  <div className="tour_details_right_boxed">
                    <div className="tour_details_right_box_heading">
                      <h3>Booking amount</h3>
                    </div>

                    <div className="tour_booking_amount_area">
                      <ul>
                        <li>
                          Adult Price x 1 <span>$40,000.00</span>
                        </li>
                        <li>
                          Discount <span>-10%</span>
                        </li>
                        <li>
                          Tax<span>5%</span>
                        </li>
                      </ul>
                      <div className="tour_bokking_subtotal_area">
                        <h6>
                          Subtotal <span>$38,000.00</span>
                        </h6>
                      </div>
                      <div className="coupon_add_area">
                        <h6>
                          <span className="remove_coupon_tour">Remove</span> Coupon code (OFF 5000)
                          <span>$5,000.00</span>
                        </h6>
                      </div>
                      <div className="total_subtotal_booking">
                        <h6>
                          Total Amount <span>$33,000.00</span>{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelBookingFormPAge;
