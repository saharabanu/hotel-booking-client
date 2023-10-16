'use client'
import HotelDetails from "../../../component/ui/HotelDetails";
import {useGetServicesQuery} from '../../../redux/api/serviceApi';

import HotelBreadCrumb from "../../../component/ui/HotelBreadCrumb";


const AllServicePage = () => {
  const base = 'Home'
    const {data, loading} = useGetServicesQuery();
    // console.log(data)
    const services = data?.services;
  return (
    <div className="container">
     <HotelBreadCrumb  items={[
          {
            label: `${base}`,
            link: '/',
          },
          {
            label: 'services',
            link: '/services',
            
          },
        ]} style={{paddingLeft:"20px "}}/>
    <h2 style={{textAlign:"center", margin:"10px 0", color:"#8B3EEA"}}>All Services found here</h2>
        <div className="promotional_tour-part">
            {services?.map((hotel) => (
              <HotelDetails key={hotel?.title} hotel={hotel} />
            ))}
          </div>
    </div>
  )
}

export default AllServicePage