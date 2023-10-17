'use client'
import Image from "next/image"


const NewsDetails = ({blog}) => {
  return (
    <>
<div key={blog.id} className="news-div1" >

<div className="latest-travel-div1">
  <div className="home_news_img">
    <a href="#"><Image src={blog.img} alt="img"/></a>
  </div>
  <div className="home_news_content">
    <h3><a href="#">{blog.title}</a></h3>
    <p><a href="#">26 Oct 2021</a> <span> <i className="fas fa-circle"></i>5min
        read</span> </p>
  </div>
</div>

</div> 
 {/* <div className="news-div2">

<div className="new-big-img">
  <a href="#"><Image src='' alt="img"/></a>
</div>
<h3><a href="#">There are many variations of passages available but</a> </h3>
<p>It is a long established fact that a reader will be distracted by the readable content of.
  The point of using Lorem Ipsum is that it has a more</p>
<p>It is a long established fact that a reader will be distracted by the readable long
  established fact that a reader will be distracted content of a
  page when looking at its layout.</p>
<a href="#">Read full article <i className="fas fa-arrow-right"></i></a>

</div>   */}


    </>
  )
}

export default NewsDetails