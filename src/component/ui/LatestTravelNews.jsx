import Image from 'next/image'
import travelNewsImg1 from '../../assets/images/latest-travel1.png'
import travelNewsImg2 from '../../assets/images/latest-travel2.png'
import travelNewsImg3 from '../../assets/images/latest-travel3.png'
import travelNewsImg4 from '../../assets/images/latest-travel4.png'
import travelNewsImg5 from '../../assets/images/latest-travel5-big.png'

const LatestTravelNews = () => {
  return (
    <>
 <section>
      <div className="container">
        {/* <!-- Section Heading --> */}


        <div className="section_heading_center">
          <h2>Latest travel news</h2>

        </div>

        <div className="latest-travel-part">


          <div className="news-div1">

            <div className="latest-travel-div1">
              <div className="home_news_img">
                <a href="#"><Image src={travelNewsImg1} alt="img"/></a>
              </div>
              <div className="home_news_content">
                <h3><a href="#">Revolutionising the travel industry,
                    one partnership at a time</a></h3>
                <p><a href="#">26 Oct 2021</a> <span> <i className="fas fa-circle"></i>5min
                    read</span> </p>
              </div>
            </div>
            <div className="latest-travel-div1">
              <div className="home_news_img">
                <a href="#"><Image src={travelNewsImg2} alt="img"/></a>
              </div>
              <div className="home_news_content">
                <h3><a href="#">It is a long established fact that a reader will be
                    distracted.</a></h3>
                <p><a href="news.html">26 Oct 2021</a> <span> <i className="fas fa-circle"></i>5min
                    read</span> </p>
              </div>
            </div>
            <div className="latest-travel-div1">
              <div className="home_news_img">
                <a href="#"><Image src={travelNewsImg3} alt="img"/></a>
              </div>
              <div className="home_news_content">
                <h3><a href="#!">There are many variations of passages of sum available</a></h3>
                <p><a href="#">26 Oct 2021</a> <span> <i className="fas fa-circle"></i>5min
                    read</span> </p>
              </div>
            </div>
            <div className="latest-travel-div1">
              <div className="home_news_img">
                <a href="#"><Image src={travelNewsImg4} alt="img"/></a>
              </div>
              <div className="home_news_content">
                <h3><a href="#">Contrary to popular belief, Lorem Ipsum is not
                    simply.</a></h3>
                <p><a href="news.html">26 Oct 2021</a> <span> <i className="fas fa-circle"></i>5min
                    read</span> </p>
              </div>
            </div>
            <div className="home_news_item">
              <div className="seeall_link">
                <a href="#">See all article <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>

          </div>




          <div className="news-div2">

            <div className="new-big-img">
              <a href="#"><Image src={travelNewsImg5} alt="img"/></a>
            </div>
            <h3><a href="#">There are many variations of passages available but</a> </h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of.
              The point of using Lorem Ipsum is that it has a more</p>
            <p>It is a long established fact that a reader will be distracted by the readable long
              established fact that a reader will be distracted content of a
              page when looking at its layout.</p>
            <a href="#">Read full article <i className="fas fa-arrow-right"></i></a>

          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default LatestTravelNews