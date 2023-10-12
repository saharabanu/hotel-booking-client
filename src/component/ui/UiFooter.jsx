'use client'
import Image from 'next/image'
import  cardImg   from '../../assets/images/footer-cards.png';


const UiFooter = () => {
  return (
    <>
 <footer>
    <div className=" container">
      <div className="top-footer-part">
        <div className="footer-div1">

          <div className="footer_heading_area">
            <h5>Need any help?</h5>
          </div>
          <div className="footer_first_area">
            <div className="footer_inquery_area">
              <h5>Call 24/7 for any help</h5>
              <h3> <a href="tel:+00-123-456-789">+00 123 456 789</a></h3>
            </div>
            <div className="footer_inquery_area">
              <h5>Mail to our support team</h5>
              <h3> <a href="#">support@domain.com</a></h3>
            </div>
            <div className="footer_inquery_area">
              <h5>Follow us on</h5>
              <ul className="soical_icon_footer">
                <li><a href="#!"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#!"><i className="fab fa-twitter-square"></i></a></li>
                <li><a href="#!"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#!"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div>

          </div>
        </div>
        <div className="footer-div2">
          <div className="footer_heading_area">
            <h5>Company</h5>
          </div>
          <div className="footer_link_area">
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Rewards</a></li>
              <li><a href="#">Work with Us</a></li>
              <li><a href="#">Meet the Team </a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-div3">
          <div className="footer_heading_area">
            <h5>Support</h5>
          </div>
          <div className="footer_link_area">
            <ul>
              <li><a href="dashboard.html">Account</a></li>
              <li><a href="faq.html">Faq</a></li>
              <li><a href="testimonials.html">Legal</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="top-destinations.html"> Affiliate Program</a></li>
              <li><a href="privacy-policy.html">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-div4">
          <div className="footer_heading_area">
            <h5>Other Services</h5>
          </div>
          <div className="footer_link_area">
            <ul>
              <li><a href="top-destinations-details.html">Community program</a></li>
              <li><a href="top-destinations-details.html">Investor Relations</a></li>
              <li><a href="flight-search-result.html">Rewards Program</a></li>
              <li><a href="room-booking.html">PointsPLUS</a></li>
              <li><a href="testimonials.html">Partners</a></li>
              <li><a href="hotel-search.html">List My Hotel</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-div5">
          <div className="footer_heading_area">
            <h5>Top cities</h5>
          </div>
          <div className="footer_link_area">
            <ul>
              <li><a href="room-details.html">Chicago</a></li>
              <li><a href="hotel-details.html">New York</a></li>
              <li><a href="hotel-booking.html">San Francisco</a></li>
              <li><a href="tour-search.html">California</a></li>
              <li><a href="tour-booking.html">Ohio </a></li>
              <li><a href="tour-guides.html">Alaska</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    <div className="bottom-footer-part">

      <div className="container bottom-footer-div">
        <div>
          <p>Copyright © 2023 All Rights Reserved</p>
        </div>
        <div>
          <Image src={cardImg} width={200} height={40} alt="atm card"/>
        </div>

      </div>

    </div>

  </footer>


    </>
  )
}

export default UiFooter