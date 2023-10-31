'use client'
import FooterBottom from '../ui/footer/FooterBottom';
import FooterPart1 from '../ui/footer/FooterPart1';
import FooterPart2 from '../ui/footer/FooterPart2';
import FooterPart3 from '../ui/footer/FooterPart3';
import FooterPart4 from '../ui/footer/FooterPart4';
import FooterPart5 from '../ui/footer/FooterPart5';
 


const UiFooter = () => {
  return (
    <>
 <footer>
    <div className=" container">
      <div className="top-footer-part">
        <FooterPart1/>
        <FooterPart2/>
        <FooterPart3/>
        <FooterPart4/>
        <FooterPart5/>
      </div>

    </div>

    <div className="bottom-footer-part">

    <FooterBottom/>

    </div>

  </footer>


    </>
  )
}

export default UiFooter