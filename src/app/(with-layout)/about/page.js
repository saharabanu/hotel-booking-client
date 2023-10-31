import AboutUs from '../../../component/ui/AboutUs';

import CommonBanner from '../../../component/ui/CommonBanner'

export const metadata = {
    title: "About Us",

  };

const About = () => {
  
    // const base = 'Home'
    const bannerLinks = [
      { text: 'About Us'}
      
      
    ];
    
  return (
    <>
        <div>
        <CommonBanner title="About Us" links={bannerLinks} />
       
        <div className='banner-links'>
       
        </div>    
                


                     


       
        <AboutUs/>
    </div>
    </>
  )
}

export default About