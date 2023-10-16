'use client'

import Image from 'next/image'
import travelNewsImg1 from '../../assets/images/latest-travel1.png'
import travelNewsImg2 from '../../assets/images/latest-travel2.png'
import travelNewsImg3 from '../../assets/images/latest-travel3.png'
import travelNewsImg4 from '../../assets/images/latest-travel4.png'
import travelNewsImg5 from '../../assets/images/latest-travel5-big.png';
import { useState } from 'react'
const itemsPerPage = 4;

const blogs = [
  {
id:1,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:2,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:3,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:4,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:5,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:6,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:7,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:8,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
]


const LatestTravelNews = () => {
  // const [currentPage, setCurrentPage] = useState(1);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const displayedBlogs = blogs.slice(startIndex, endIndex);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  // const totalPages = Math.ceil(blogs.length / itemsPerPage);
  // const paginationButtons = [];

  // for (let i = 1; i <= totalPages; i++) {
  //   paginationButtons.push(
  //     <button
  //       key={i}
  //       onClick={() => handlePageChange(i)}
  //       className={currentPage === i ? 'active' : ''}
  //     >
  //       {i}
  //     </button>
  //   );
  // }

  return (
    <>
 <section>
      <div className="container">
        {/* <!-- Section Heading --> */}


        <div className="section_heading_center">
          <h2>Latest travel news</h2>

        </div>

        <div className="latest-travel-part">
{blogs?.map((blog)=>(<>
<div key={blog.id} className="news-div1" >

<div className="latest-travel-div1">
  <div className="home_news_img">
    <a href="#"><Image src={travelNewsImg1} alt="img"/></a>
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
  <a href="#"><Image src={travelNewsImg5} alt="img"/></a>
</div>
<h3><a href="#">There are many variations of passages available but</a> </h3>
<p>It is a long established fact that a reader will be distracted by the readable content of.
  The point of using Lorem Ipsum is that it has a more</p>
<p>It is a long established fact that a reader will be distracted by the readable long
  established fact that a reader will be distracted content of a
  page when looking at its layout.</p>
<a href="#">Read full article <i className="fas fa-arrow-right"></i></a>

</div>  */}

</>))}

          
 
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestTravelNews