import {TableOutlined,ProfileOutlined} from "@ant-design/icons";
import Link from "next/link";
import { CgProfile} from "react-icons/cg";
import { IoIosNotifications} from "react-icons/io";
import { ImProfile} from "react-icons/im";
import { MdPayment} from "react-icons/md";


export const SidebarItems = (role) => {
  const defaultSidebarItems = [
    {
     label: <Link href='/profile'> Profile</Link>,
      key: "profile",
      icon: <CgProfile />
      // children: [
      //   {
      //       label: <Link href='/profile'>View Profile</Link>,
      //     key: '/profile',
      //   },
        
        
      // ],
    },
    
     {
      label: <Link href={`/${role}/notification`}>Notification</Link>,
      icon: <IoIosNotifications/>,
       key: `/${role}/notification`,
     },
  ];
  const userSidebarItems = [
    ...defaultSidebarItems,
    
    {
     label: <Link href={`/${role}/my-booking`}>My Booking</Link>,
     icon: <ImProfile/>,
      key: `/${role}/my-booking`,
    },
    {
      label: <Link href='/user/payment'>Payment</Link>,
      icon: <MdPayment/>,
       key: '/user/payment',
     },
    
    
    
  ];

  const adminSidebarItems = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/user-manage`}>User Management</Link>,
      icon: <TableOutlined/>,
       key: `/${role}/user-manage`,
     },
    {
      label: <Link href={`/${role}/service-manage`}>Content Management</Link>,
      icon: <TableOutlined/>,
       key: `/${role}/service-manage`,
     },
    {
      label: <Link href={`/${role}/booking-manage`}>Booking Management</Link>,
      icon: <TableOutlined/>,
       key: `/${role}/booking-manage`,
     },
     
    


  ];

  

 

  if (role === 'admin') return adminSidebarItems;
  else if (role === 'user' ) return userSidebarItems;
  
  else {
    return defaultSidebarItems;
  }
};
