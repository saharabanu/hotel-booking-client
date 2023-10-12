'use client'

import Image from "next/image";
import topDestiImg1 from '../../assets/images/top-destination1.png'
import topDestiImg2 from '../../assets/images/top-destination2.png'
import topDestiImg3 from '../../assets/images/top-destination3.png'
import topDestiImg4 from '../../assets/images/top-destination4.png'
import topDestiImg5 from '../../assets/images/top-destination5.png'
import topDestiImg6 from '../../assets/images/top-destination6.png'
import topDestiImg7 from '../../assets/images/top-destination7.png'
import topDestiImg8 from '../../assets/images/top-destination8.png'
import topDestiBigImg from '../../assets/images/d-big-img.png'

const TopDesination = () => {
  return (
    <>
 <section id="top_destinations" className="section_padding_top">
      <div className="container">
      

        <div className="section_heading_center">
          <h2>Top destinations</h2>
        </div>

        <div className="top-destination-main-part">

          <div className="destinations_content_box img_animation top-destination-div1">
            <Image src={topDestiBigImg} alt="Image"/>
            <div className="destinations_content_inner">
              <h2>Up to</h2>
              <div className="destinations_big_offer">

                <h1>50</h1>
                <h6><span>%</span> <span>Off</span></h6>
              </div>
              <h2>Holiday <br/> packages</h2>
              <a href="#" className="btn btn_theme btn_md">Book now</a>
            </div>
          </div>





          <div className="top-destination-sm-divs">
            <div className="top-destination-div2">
              <div className="destinations_content_box img_animation">
                <a href="#">
                  <Image src={topDestiImg1} alt="Image"/>
                </a>
                <div className="destinations_content_inner">
                  <h3><a href="#">China</a></h3>
                </div>
              </div>
              <div className="destinations_content_box img_animation">
                <a href="#">
                  <Image src={topDestiImg2} alt="Image"/>
                </a>
                <div className="destinations_content_inner">
                  <h3><a href="#">Darjeeling</a></h3>
                </div>
              </div>
              <div className="destinations_content_box img_animation">
                <a href="#">
                  <Image src={topDestiImg3} alt="Image"/>
                </a>
                <div className="destinations_content_inner">
                  <h3><a href="#">Malaysia</a></h3>
                </div>
              </div>
            </div>
            <div className="top-destination-div3">
              <div className="destinations_content_box img_animation">
                <a href="#">
                  <Image src={topDestiImg4} alt="Image"/>
                </a>
                <div className="destinations_content_inner">
                  <h3><a href="top-destinations.html">Gangtok</a></h3>
                </div>
              </div>
              <div className="destinations_content_box img_animation">
                <a href="#">
                  <Image src={topDestiImg5} alt="Image"/>
                </a>
                <div className="destinations_content_inner">
                  <h3><a href="#">Thailand</a></h3>
                </div>
              </div>
              <div className="destinations_content_box img_animation">
                <a href="#">
                  <Image src={topDestiImg6} alt="Image"/>
                </a>
                <div className="destinations_content_inner">
                  <h3><a href="#">Australia</a></h3>
                </div>
              </div>
            </div>
            <div className="top-destination-div4">
              <div className="destinations_content_box img_animation">
                <a href="#">
                  <Image src={topDestiImg7} alt="Image"/>
                </a>
                <div className="destinations_content_inner">
                  <h3><a href="#">London</a></h3>
                </div>
              </div>
              <div className="destinations_content_box img_animation">
                <a href="#">
                  <Image src={topDestiImg8} alt="Image"/>
                </a>
                <div className="destinations_content_inner">
                  <h3><a href="#">USA</a></h3>
                </div>
              </div>
              <div className="destinations_content_box">
                <a href="#" className="btn btn_theme btn_md w-100">View all</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>



    </>
  )
}

export default TopDesination