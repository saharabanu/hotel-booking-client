'use client';
import imaginationImg1 from "../../assets/images/imagination1.png"
import imaginationImg2 from "../../assets/images/imagination2.png"
import imaginationImg3 from "../../assets/images/imagination3.png"

import Image from "next/image"

const Beyond = () => {
  return (
    <>

    <section id="go_beyond_area" className="section_padding_top">
      <div className="container">
        <div className="imagination-part">

          <div className="heading_left_area">
            <h2>Go beyond your <span>imagination</span></h2>
            <h5>Discover your ideal experience with us</h5>
          </div>


          <div className="imagination_boxed">
            <a href="#">
              <Image src={imaginationImg1} alt="img"/>
            </a>
            <h3><a href="#">7% Discount for all <span>Airlines</span></a></h3>
          </div>


          <div className="imagination_boxed">
            <a href="#">
              <Image src={imaginationImg2} alt="img"/>
            </a>
            <h3><a href="#!">Travel around<span> the world</span></a></h3>
          </div>


          <div className="imagination_boxed">
            <a href="#">
              <Image src={imaginationImg3} alt="img"/>
            </a>
            <h3><a href="top-destinations.html">Luxury resorts<span> top deals</span></a></h3>
          </div>

        </div>
      </div>
    </section>

    </>
  )
}

export default Beyond