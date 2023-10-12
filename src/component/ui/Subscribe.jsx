'use client'

import EmailImg from '../../assets/images/email.png'
import Image from "next/image";

const Subscribe = () => {
  return (
    <>
  
    <section id="subscribe_area " className="subscribe">
      <div className="container">
        <div className="subscribe-part">
          <div className="subscribe-div1">
            <div className="subscribe_left">
              <div className="subscribe_icon">
                <Image  src={EmailImg} width={100}  height={50} alt="icon"/>
              </div>
              <div className="subscribe_content">
                <h4>Get the latest news and offers</h4>
                <h2>Subscribe to our newsletter</h2>
              </div>
            </div>
          </div>
          <div className="subscribe-div2">
            <div className="subscribe_form">
              <form id="subscribe_form_wrappper">
                <div className="input-group"><input type="text" className="form-control" placeholder="Enter your mail address"/>
                  <button className="btn btn_theme" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Subscribe