'use client'

const Searchbar = () => {
  return (
    <>
 <section id="theme_search_form" className="">



      <div className="theme_search_form_area form-area">
        <div className="theme_search_form_tabbtn form-btn-area ">
          <ul className="">
            <li className="first-btn">
              <button style={{color:'#fff'}}><i className="fas fa-plane-departure "></i>Flights</button>
            </li>
            <li>
              <button><i className="fas fa-globe"></i>Tours</button>
            </li>
            <li>
              <button><i className="fas fa-hotel"></i>Hotels</button>
            </li>
            <li>
              <button><i className="fas fa-passport"></i> Visa</button>
            </li>
            <li>
              <button><i className="fas fa-building"></i> Apartments</button>
            </li>
            <li>
              <button><i className="fas fa-bus"></i> Bus</button>
            </li>
            <li>
              <button><i className="fas fa-ship"></i>
                Cruise</button>
            </li>

          </ul>
        </div>
        <div className="tab-content">
          <div className="fligth-category">
            <div className="flight_categories_search">
              <ul>
                <li>
                  <button style={{color: '#8B3EEA'}}>One
                    Way</button>
                </li>
                <li>
                  <button className="">Roundtrip</button>
                </li>
                <li>
                  <button className="">Multi
                    city</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="form-desc ">
            <div className=" form-desc-div1">
              <div className="flight_Search_boxed">
                <p>From</p>
                <input type="text" value="New York"/>

                <span>JFK - John F. Kennedy International...</span>
                <div className="plan_icon_posation">
                  <i className="fas fa-plane-departure"></i>
                </div>
              </div>

            </div>

            <div className=" form-desc-div1">
              <div className="flight_Search_boxed">
                <p>To</p>
                <input type="text" value="London "/>
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
                    <input type="date" value="2022-05-05"/>
                    <br/>
                    <span>Thursday</span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" form-desc-div1 ">
              <div className="passenger_area">
                <p>Passenger, Class </p>
                <div>
                  <h3>
                    0 Passenger

                  </h3>

                  <span>Business</span>

                </div>

              </div>
            </div>

          </div>


          <div className="top_form_search_button">
            <button className="btn btn_theme btn_md">Search</button>
          </div>


        </div>
      </div>


  
    </section>

    </>
  )
}

export default Searchbar