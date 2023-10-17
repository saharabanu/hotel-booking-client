'use client'
import Image from "next/image";
import destiImge1 from '../../assets/images/destination-1.png';
import destiImge2 from '../../assets/images/destination-small2.png';
import destiImge3 from '../../assets/images/destination-small3.png';
import destiImge4 from '../../assets/images/destination-small4.png';
import destiImge5 from '../../assets/images/destination-small5.png';
import destiImge6 from '../../assets/images/destination-small6.png';
import { useState } from "react";


const items = [
  {
    id:1,
    title:'Everest trek to Base Camp',
    price:105,
    img:destiImge1,
    country:'Nepal'


  },
  {
    id:2,
    title:'Kathmundu tour',
    price:85.00,
    img:destiImge2,
    country:'Darjeeling'


  },
  {
    id:3,
    title:'Beautiful pokhara',
    price:170,
    img:destiImge3,
    country:'China'


  },
  {
    id:4,
    title:'Annapurna region',
    price:205,
    img:destiImge4,
    country:'Italy'


  },
  {
    id:5,
    title:'Chitwan national park',
    price:105,
    img:destiImge5,
    country:'Turkey'


  },
  {
    id:6,
    title:'Langtang region',
    price:105,
    img:destiImge6,
    country:'Malaysia'


  },
  {
    id:7,
    title:'Chitwan national park',
    price:105,
    img:destiImge5,
    country:'Indonesia'


  },
]


const Destination = () => {
  const [selectedCountry, setSelectedCountry] = useState(null); 

  const filteredItems = selectedCountry ? items.filter((item) => item.country === selectedCountry) : items;

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
        <button
         
          onClick={() => setSelectedCountry(null)}
        >
          All
        </button>
        <button
          
          onClick={() => setSelectedCountry('Nepal')}
        >
          Nepal
        </button>
        <button onClick={() => setSelectedCountry('Malaysia')}>Malaysia</button>
        <button onClick={() => setSelectedCountry('Indonesia')}>Indonesia</button>
        <button onClick={() => setSelectedCountry('Turkey')}>Turkey</button>
        <button onClick={() => setSelectedCountry('China')}>China</button>
        <button onClick={() => setSelectedCountry('Darjeeling')}>Darjeeling</button>
        <button onClick={() => setSelectedCountry('Italy')}>Italy</button>
      </div>

          </nav>
        </div>

      </div>


      <div className="destination-part">
      {filteredItems.map((item)=>( <div key={item.id} className="tab_destinations_boxed">
          <div className="tab_destinations_img">
            <a href="#"><Image src={item.img} alt="img"/></a>
          </div>
          <div className="tab_destinations_conntent">
            <h3><a href="#">{item.title}</a></h3>
            <p>Price starts at <span>${item.price}</span></p>
          </div>
        </div>))}

        {/* <div className="tab_destinations_boxed">
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
        </div> */}

      </div>
    </div>
  </section>
</>
  )
}

export default Destination