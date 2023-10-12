import Image from 'next/image'
import offerImg1 from '../../assets/images/offer1.png'
import offerImg2 from '../../assets/images/offer2.png'
import offerImg3 from '../../assets/images/offer3.png'

const Offfer = () => {
  return (
    <>
<section id="offer_area" className="section_padding_top">
      <div className="container">
        <div className="offer-area-part">

          <div className="offer_area_box d-none-phone img_animation offer-first-img">
            <Image src={offerImg1}  alt="img"/>
            <div className="offer_area_content">
              <h2>Special Offers</h2>
              <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum
                dolor sit amet.</p>
              <a href="#!" className="btn btn_theme btn_md">Holiday deals</a>
            </div>
          </div>

          <div className="offer-part-2">

            <div className="offer_area_box img_animation">
              <Image src={offerImg2} alt="img"/>
              <div className="offer_area_content">
                <h2>News letter</h2>
                <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.</p>
                <a href="#!" className="btn btn_theme btn_md">Subscribe now</a>
              </div>
            </div>


            <div className="offer_area_box img_animation">
              <Image src={offerImg3} alt="img"/>
              <div className="offer_area_content">
                <h2>Travel tips</h2>
                <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.</p>
                <a href="#!" className="btn btn_theme btn_md">Get tips</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>


    </>
  )
}

export default Offfer