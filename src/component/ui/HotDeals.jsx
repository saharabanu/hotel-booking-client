import Image from "next/image";
import hotelImg1 from '../../assets/images/hotel1.png'
import hotelImg2 from '../../assets/images/hotel2.png'
import hotelImg3 from '../../assets/images/hotel3.png'
import hotelImg4 from '../../assets/images/hotel4.png'
import hotelImg5 from '../../assets/images/hotel5.png'
import hotelImg6 from '../../assets/images/hotel6.png'
import hotelImg7 from '../../assets/images/hotel7.png'
import hotelImg8 from '../../assets/images/hotel8.png'


const HotDeals = () => {
  return (
    <>
         <section id="explore_area" className="section_padding_top">
      <div className="container">
       


        <div className="section_heading_center">
          <h2>Explore our hot deals</h2>
        </div>




        <div className="destination-nav1">
          <nav className="theme_nav_tab_item">
            <div className="nav nav-tabs">
              <button style={{backgroundColor:'#8B3EEA', color:"#fff"}}>Hotels</button>
              <button>Tours</button>
              <button>Space</button>
              <button>Events</button>
            </div>
          </nav>
        </div>




        <div className="promotional_tour-part">

          <div className="theme_common_box_two img_hover">
            <div className="theme_two_box_img">
              <a href="#">
                <Image src={hotelImg1} alt="img"/>
              </a>
              <p><i className="fas fa-map-marker-alt"></i>New beach, Thailand</p>
            </div>
            <div className="theme_two_box_content">
              <h4><a href="#">Kantua hotel, Thailand</a></h4>
              <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                  reviewes)</span></p>
              <h3>$99.00 <span>Price starts from</span></h3>
            </div>
          </div>


          <div className="theme_common_box_two img_hover">
            <div className="theme_two_box_img">
              <a href="#">
                <Image src={hotelImg2} alt="img"/>
              </a>
              <p><i className="fas fa-map-marker-alt"></i>Indonesia</p>
              <div className="discount_tab">
                <span>50%</span>
              </div>

            </div>
            <div className="theme_two_box_content">
              <h4><a href="#">Hotel paradise international</a></h4>
              <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                  reviewes)</span></p>
              <h3>$99.00 <span>Price starts from</span></h3>
            </div>
          </div>


          <div className="theme_common_box_two img_hover">
            <div className="theme_two_box_img">
              <a href="#">
                <Image src={hotelImg3} alt="img"/>
              </a>
              <p><i className="fas fa-map-marker-alt"></i>Kualalampur</p>
            </div>
            <div className="theme_two_box_content">
              <h4><a href="#">Hotel kualalampur</a></h4>
              <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                  reviewes)</span></p>
              <h3>$99.00 <span>Price starts from</span></h3>
            </div>
          </div>


          <div className="theme_common_box_two img_hover">
            <div className="theme_two_box_img">
              <a href="#">
                <Image src={hotelImg4} alt="img"/>
              </a>
              <p><i className="fas fa-map-marker-alt"></i>Mariana island</p>
              <div className="discount_tab">
                <span>50%</span>
              </div>
            </div>
            <div className="theme_two_box_content">
              <h4><a href="#">Hotel deluxe</a></h4>
              <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                  reviewes)</span></p>
              <h3>$99.00 <span>Price starts from</span></h3>
            </div>
          </div>


          <div className="theme_common_box_two img_hover">
            <div className="theme_two_box_img">
              <a href="#">
                <Image src={hotelImg5} alt="img"/>
              </a>
              <p><i className="fas fa-map-marker-alt"></i>Kathmundu, Nepal</p>
            </div>
            <div className="theme_two_box_content">
              <h4><a href="#">Hotel rajavumi</a></h4>
              <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                  reviewes)</span></p>
              <h3>$99.00 <span>Price starts from</span></h3>
            </div>
          </div>


          <div className="theme_common_box_two img_hover">
            <div className="theme_two_box_img">
              <a href="#">
                <Image src={hotelImg6} alt="img"/>
              </a>
              <p><i className="fas fa-map-marker-alt"></i>Beach view</p>
            </div>
            <div className="theme_two_box_content">
              <h4><a href="#">Thailand grand suit</a></h4>
              <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                  reviewes)</span></p>
              <h3>$99.00 <span>Price starts from</span></h3>
            </div>
          </div>


          <div className="theme_common_box_two img_hover">
            <div className="theme_two_box_img">
              <a href="#">
                <Image src={hotelImg7} alt="img"/>
              </a>
              <p><i className="fas fa-map-marker-alt"></i>Long island</p>
            </div>
            <div className="theme_two_box_content">
              <h4><a href="#">Zefi resort and spa</a></h4>
              <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                  reviewes)</span></p>
              <h3>$99.00 <span>Price starts from</span></h3>
            </div>
          </div>


          <div className="theme_common_box_two img_hover">
            <div className="theme_two_box_img">
              <a href="#">
                <Image src={hotelImg8} alt="img"/>
              </a>
              <p><i className="fas fa-map-marker-alt"></i>Philippine</p>
            </div>
            <div className="theme_two_box_content">
              <h4><a href="#">Manila international resort</a></h4>
              <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                  reviewes)</span></p>
              <h3>$99.00 <span>Price starts from</span></h3>
            </div>
          </div>

        </div>


      </div>
    </section>
    </>
  )
}

export default HotDeals