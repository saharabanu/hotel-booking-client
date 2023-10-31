'use client'
import HotelDetails from "../ui/HotelDetails";
import {useGetServicesQuery} from '../../redux/api/serviceApi';
import { Pagination } from 'antd';
import CommonBanner from "../ui/CommonBanner";
import Heading from "../ui/reUsable/Heading";
import { useState } from "react";
const Service = () => {
  
    const {data, loading} = useGetServicesQuery();
    // console.log(data)
    const services = data?.services;

    const bannerLinks = [
      { text: 'Services', },
     
    ];

 // Pagination related state
 const itemsPerPage = 3; // Number of items to display per page
 const [currentPage, setCurrentPage] = useState(1);

 // Calculate the index range for the current page
 const startIndex = (currentPage - 1) * itemsPerPage;
 const endIndex = startIndex + itemsPerPage;

 // Slice the services array to display the current page's items
 const servicesToDisplay = services?.slice(startIndex, endIndex);

 const totalServices = services?.length;



 const handlePageChange = (page) => {
   setCurrentPage(page);
 };

  return (
    <>
    <CommonBanner title="Services" links={bannerLinks} />
    <div className="container">
     
    <Heading title="All Services found here"/>
        <div className="promotional_tour-part">
            {servicesToDisplay?.map((hotel) => (
              <HotelDetails key={hotel?.title} hotel={hotel} />
            ))}
          </div>

          <Pagination className="paginate"
          defaultCurrent={currentPage}
          total={totalServices}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
    </div>
    </>
  )
}

export default Service