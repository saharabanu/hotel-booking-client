import Image from 'next/image'
import  cardImg   from '../../../assets/images/footer-cards.png';

const FooterBottom = () => {
  return (
    <>
  <div className="container bottom-footer-div">
        <div>
          <p>Copyright © 2023 All Rights Reserved</p>
        </div>
        <div>
          <Image src={cardImg} width={200} height={40} alt="atm card"/>
        </div>

      </div>

    </>
  )
}

export default FooterBottom