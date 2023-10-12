import Image from "next/image";
import destiImge1 from '../../assets/images/destination-1.png';
import destiImge2 from '../../assets/images/destination-small2.png';
import destiImge3 from '../../assets/images/destination-small3.png';
import destiImge4 from '../../assets/images/destination-small4.png';
import destiImge5 from '../../assets/images/destination-small5.png';
import destiImge6 from '../../assets/images/destination-small6.png';


const Destination = () => {
  return (
    <><section id="destinations_area">
    <div className="container">
      {/* <!-- Section Heading --> */}

      <div className="section_heading_center">
        <h2>Destinations for you</h2>
      </div>


      <div className="destination-nav">

        <div className="theme_nav_tab">
          <nav className="theme_nav_tab_item">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button style={{backgroundColor:"#8B3EEA", color:"#fff"}}>Nepal</button>
              <button>Malaysia</button>
              <button>Indonesia</button>
              <button>Turkey</button>
              <button>China</button>
              <button>Darjeeling</button>
              <button>Italy</button>
            </div>
          </nav>
        </div>

      </div>


      <div className="destination-part">

        <div className="tab_destinations_boxed">
          <div className="tab_destinations_img">
            <a href="#"><Image src={destiImge1} alt="img"/></a>
          </div>
          <div className="tab_destinations_conntent">
            <h3><a href="#">Everest trek to Base Camp</a></h3>
            <p>Price starts at <span>$105.00</span></p>
          </div>
        </div>


        <div className="tab_destinations_boxed">
          <div className="tab_destinations_img">
            <a href="#"><Image src={destiImge2} alt="img"/></a>
          </div>
          <div className="tab_destinations_conntent">
            <h3><a href="#">Kathmundu tour</a></h3>
            <p>Price starts at <span>$85.00</span></p>
          </div>
        </div>


        <div className="tab_destinations_boxed">
          <div className="tab_destinations_img">
            <a href="#"><Image src={destiImge3} alt="img"/></a>
          </div>
          <div className="tab_destinations_conntent">
            <h3><a href="#">Beautiful pokhara</a></h3>
            <p>Price starts at <span>$100.00</span></p>
          </div>
        </div>


        <div className="tab_destinations_boxed">
          <div className="tab_destinations_img">
            <a href="#"><Image src={destiImge4} alt="img"/></a>
          </div>
          <div className="tab_destinations_conntent">
            <h3><a href="#">Annapurna region</a></h3>
            <p>Price starts at <span>$75.00</span></p>
          </div>
        </div>


        <div className="tab_destinations_boxed">
          <div className="tab_destinations_img">
            <a href="#"><Image src={destiImge5} alt="img"/></a>
          </div>
          <div className="tab_destinations_conntent">
            <h3><a href="#">Chitwan national park</a></h3>
            <p>Price starts at <span>$105.00</span></p>
          </div>
        </div>


        <div className="tab_destinations_boxed">
          <div className="tab_destinations_img">
            <a href="#"><Image src={destiImge6} alt="img"/></a>
          </div>
          <div className="tab_destinations_conntent">
            <h3><a href="#">Langtang region</a></h3>
            <p>Price starts at <span>$105.00</span></p>
          </div>
        </div>

      </div>
    </div>
  </section>
</>
  )
}

export default Destination