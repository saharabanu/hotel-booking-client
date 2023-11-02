"use client";
import React, { useEffect, useState } from "react";

const Searchbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("flights");
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {isClient && <section id="theme_search_form" className="">
        <div className="theme_search_form_area form-area">
          <div className="theme_search_form_tabbtn form-btn-area">
            <ul className="">
              <li className={selectedCategory === "flights" ? "first-btn" : ""}>
                <button style={{ color: "#fff" }} onClick={() => handleCategoryChange("flights")}>
                  <i className="fas fa-plane-departure"></i>Flights
                </button>
              </li>
              <li className={selectedCategory === "tours" ? "first-btn" : ""}>
                <button onClick={() => handleCategoryChange("tours")}>
                  <i className="fas fa-globe"></i>Tours
                </button>
              </li>
              <li className={selectedCategory === "hotels" ? "first-btn" : ""}>
                <button onClick={() => handleCategoryChange("hotels")}>
                  <i className="fas fa-hotel"></i>Hotels
                </button>
              </li>
              <li className={selectedCategory === "visa" ? "first-btn" : ""}>
                <button onClick={() => handleCategoryChange("visa")}>
                  <i className="fas fa-passport"></i> Visa
                </button>
              </li>
              <li className={selectedCategory === "apartments" ? "first-btn" : ""}>
                <button onClick={() => handleCategoryChange("apartments")}>
                  <i className="fas fa-building"></i> Apartments
                </button>
              </li>
              <li className={selectedCategory === "bus" ? "first-btn" : ""}>
                <button onClick={() => handleCategoryChange("bus")}>
                  <i className="fas fa-bus"></i> Bus
                </button>
              </li>
              <li className={selectedCategory === "cruise" ? "first-btn" : ""}>
                <button onClick={() => handleCategoryChange("cruise")}>
                  <i className="fas fa-ship"></i> Cruise
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            {/* Content for the selected category */}
            {selectedCategory === "flights" && (
              <div className="flight-category">
                {/* Your flight category content */}
                <div className="tab-content">
                  <div className="fligth-category">
                    <div className="flight_categories_search">
                      <ul>
                        <li>
                          <button style={{ color: "#8B3EEA" }}>One Way</button>
                        </li>
                        <li>
                          <button className="">Roundtrip</button>
                        </li>
                        <li>
                          <button className="">Multi city</button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="form-desc ">
                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>From</p>
                        <input type="text" value="New York"  />

                        <span>JFK - John F. Kennedy International...</span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-departure"></i>
                        </div>
                      </div>
                    </div>

                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>To</p>
                        <input type="text" value="London " />
                        <span>LCY, London city airport </span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-arrival"></i>
                        </div>
                        <div className="range_plan">
                          <i className="fas fa-exchange-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="form_search_date">
                        <div className="flight_Search_boxed date_flex_area">
                          <div className="Journey_date">
                            <p>Journey date</p>
                            <input type="date" value="2022-05-05" />
                            <br />
                            <span>Thursday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="passenger_area">
                        <p>Passenger, Class </p>
                        <div>
                          <h3>0 Passenger</h3>

                          <span>Business</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedCategory === "tours" && (
              <div className="tours-category">
                <div className="tab-content">
                  <div className="fligth-category">
                    <h2>Tours </h2>
                  </div>

                  <div className="form-desc ">
                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>From</p>
                        <input type="text" value="New York" />

                        <span>JFK - John F. Kennedy International...</span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-departure"></i>
                        </div>
                      </div>
                    </div>

                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>To</p>
                        <input type="text" value="London " />
                        <span>LCY, London city airport </span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-arrival"></i>
                        </div>
                        <div className="range_plan">
                          <i className="fas fa-exchange-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="form_search_date">
                        <div className="flight_Search_boxed date_flex_area">
                          <div className="Journey_date">
                            <p>Journey date</p>
                            <input type="date" value="2022-05-05" />
                            <br />
                            <span>Thursday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="passenger_area">
                        <p>Passenger, Class </p>
                        <div>
                          <h3>0 Passenger</h3>

                          <span>Business</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Your tours category content */}
              </div>
            )}
            {selectedCategory === "hotels" && (
              <div className="hotels-category">
                {/* Your hotels category content */}

                <div className="tab-content">
                  <div className="fligth-category">
                    <h2>Hotels</h2>
                  </div>

                  <div className="form-desc ">
                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>From</p>
                        <input type="text" value="New York" />

                        <span>JFK - John F. Kennedy International...</span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-departure"></i>
                        </div>
                      </div>
                    </div>

                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>To</p>
                        <input type="text" value="London " />
                        <span>LCY, London city airport </span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-arrival"></i>
                        </div>
                        <div className="range_plan">
                          <i className="fas fa-exchange-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="form_search_date">
                        <div className="flight_Search_boxed date_flex_area">
                          <div className="Journey_date">
                            <p>Journey date</p>
                            <input type="date" value="2022-05-05" />
                            <br />
                            <span>Thursday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="passenger_area">
                        <p>Passenger, Class </p>
                        <div>
                          <h3>0 Passenger</h3>

                          <span>Business</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedCategory === "visa" && (
              <div className="visa-category">{/* Your visa category content */}
              <div className="tab-content">
                  <div className="fligth-category">
                    <h2>Visa</h2>
                  </div>

                  <div className="form-desc ">
                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>From</p>
                        <input type="text" value="New York" />

                        <span>JFK - John F. Kennedy International...</span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-departure"></i>
                        </div>
                      </div>
                    </div>

                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>To</p>
                        <input type="text" value="London " />
                        <span>LCY, London city airport </span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-arrival"></i>
                        </div>
                        <div className="range_plan">
                          <i className="fas fa-exchange-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="form_search_date">
                        <div className="flight_Search_boxed date_flex_area">
                          <div className="Journey_date">
                            <p>Journey date</p>
                            <input type="date" value="2022-05-05" />
                            <br />
                            <span>Thursday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="passenger_area">
                        <p>Passenger, Class </p>
                        <div>
                          <h3>0 Passenger</h3>

                          <span>Business</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            )}
            {selectedCategory === "apartments" && (
              <div className="apartments-category">{/* Your apartments category content */}
              
              <div className="tab-content">
                  <div className="fligth-category">
                    <h2>Apartments</h2>
                  </div>

                  <div className="form-desc ">
                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>From</p>
                        <input type="text" value="New York" />

                        <span>JFK - John F. Kennedy International...</span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-departure"></i>
                        </div>
                      </div>
                    </div>

                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>To</p>
                        <input type="text" value="London " />
                        <span>LCY, London city airport </span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-arrival"></i>
                        </div>
                        <div className="range_plan">
                          <i className="fas fa-exchange-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="form_search_date">
                        <div className="flight_Search_boxed date_flex_area">
                          <div className="Journey_date">
                            <p>Journey date</p>
                            <input type="date" value="2022-05-05" />
                            <br />
                            <span>Thursday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="passenger_area">
                        <p>Passenger, Class </p>
                        <div>
                          <h3>0 Passenger</h3>

                          <span>Business</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedCategory === "bus" && (
              <div className="bus-category">{/* Your bus category content */}
              <div className="tab-content">
                  <div className="fligth-category">
                    <h2>Bus</h2>
                  </div>

                  <div className="form-desc ">
                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>From</p>
                        <input type="text" value="New York" />

                        <span>JFK - John F. Kennedy International...</span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-departure"></i>
                        </div>
                      </div>
                    </div>

                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>To</p>
                        <input type="text" value="London " />
                        <span>LCY, London city airport </span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-arrival"></i>
                        </div>
                        <div className="range_plan">
                          <i className="fas fa-exchange-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="form_search_date">
                        <div className="flight_Search_boxed date_flex_area">
                          <div className="Journey_date">
                            <p>Journey date</p>
                            <input type="date" value="2022-05-05" />
                            <br />
                            <span>Thursday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="passenger_area">
                        <p>Passenger, Class </p>
                        <div>
                          <h3>0 Passenger</h3>

                          <span>Business</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            )}
            {selectedCategory === "cruise" && (
              <div className="cruise-category">{/* Your cruise category content */}
              
              <div className="tab-content">
                  <div className="fligth-category">
                    <h2>Cruise</h2>
                  </div>

                  <div className="form-desc ">
                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>From</p>
                        <input type="text" value="New York" />

                        <span>JFK - John F. Kennedy International...</span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-departure"></i>
                        </div>
                      </div>
                    </div>

                    <div className=" form-desc-div1">
                      <div className="flight_Search_boxed">
                        <p>To</p>
                        <input type="text" value="London "  />
                        <span>LCY, London city airport </span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-arrival"></i>
                        </div>
                        <div className="range_plan">
                          <i className="fas fa-exchange-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="form_search_date">
                        <div className="flight_Search_boxed date_flex_area">
                          <div className="Journey_date">
                            <p>Journey date</p>
                            <input type="date" value="2022-05-05" />
                            <br />
                            <span>Thursday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" form-desc-div1 ">
                      <div className="passenger_area">
                        <p>Passenger, Class </p>
                        <div>
                          <h3>0 Passenger</h3>

                          <span>Business</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Common content for all categories */}
            <div className="form-desc">{/* Your common form content */}</div>
          </div>
          <div className="top_form_search_button">
            <button className="btn btn_theme btn_md">Search</button>
          </div>
        </div>
      </section>}
    </>
  );
};

export default Searchbar;
