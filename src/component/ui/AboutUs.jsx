'use client'
import Image from 'next/image'
import aboutImg from '../../assets/images/about.png';
import iconImg1 from '../../assets/images/icon-world.png'
import iconImg2 from '../../assets/images/icon-walte.png'
import iconImg3 from '../../assets/images/icon-star.png'
import iconImg4 from '../../assets/images/icon-persentis.png';


export const metadata = {
    title: "About Us",
  };

const AboutUs = () => {
  return (
    <>
    
<section id="about_us_top" className="section_padding">
        <div className="container">
            <div className="about_section">
                <div className="about-first-div">
                    <div className="about_us_left">
                        <h5>About us</h5>
                        <h2>We Are The World Best Travel Agency Company Since 2000</h2>
                        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur sadipscing elitr </p>
                        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur sadipscing elitr </p>
                        <a href="tour-search.html" className="btn btn_theme btn_md">Find tours</a>
                    </div>
                </div>
                <div className="about-last-div">
                    <div className="about_us_right">
                        <Image src={aboutImg}   alt="img" className='img'/>
                    </div>
                </div>

            </div>

            {/* about section service */}
 
         
             <div className="about_service_section">
                <div className="about_service_div">
                    <div className="about_service_boxed">
                        <Image src={iconImg1} alt="img"/>
                        <h5><a href="#!">Best services</a></h5>
                        <p>Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit.
                            Incididunt ut dolore.</p>
                    </div>
                </div>
                <div className="about_service_div">
                    <div className="about_service_boxed">
                        <Image src={iconImg2} alt="img"/>
                        <h5><a href="#!">Trusted payment</a></h5>
                        <p>Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit.
                            Incididunt ut dolore.</p>
                    </div>
                </div>
                <div className="about_service_div">
                    <div className="about_service_boxed">
                        <Image src={iconImg3} alt="img"/>
                        <h5><a href="#!">Top facility</a></h5>
                        <p>Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit.
                            Incididunt ut dolore.</p>
                    </div>
                </div>
                <div className="about_service_div">
                    <div className="about_service_boxed">
                        <Image src={iconImg4} alt="img"/>
                        <h5><a href="#!">Awesome deals</a></h5>
                        <p>Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit.
                            Incididunt ut dolore.</p>
                    </div>
                </div>
            </div> 
    



            
        </div>
    </section>

    </>
  )
}

export default AboutUs