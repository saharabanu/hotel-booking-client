import {TableOutlined,ProfileOutlined,ScheduleOutlined,ThunderboltOutlined,CreditCardOutlined,FileTextOutlined,AppstoreOutlined} from "@ant-design/icons";
import Link from "next/link";


export const SidebarItems = (role) => {
  const defaultSidebarItems = [
    {
     label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
            label: <Link href='/profile'>View Profile</Link>,
          key: '/profile',
        },
        
        
      ],
    },
    
     {
      label: <Link href={`/${role}/notification`}>Notification</Link>,
      icon: <TableOutlined/>,
       key: `/${role}/notification`,
     },
  ];
  const userSidebarItems = [
    ...defaultSidebarItems,
    
    {
     label: <Link href={`/${role}/my-booking`}>My Booking</Link>,
     icon: <TableOutlined/>,
      key: `/${role}/my-booking`,
    },
    {
      label: <Link href='/user/payment'>Payment</Link>,
      icon: <TableOutlined/>,
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
     
    


    // {
    //   label: "Manage academic",
    //   key: "manage-academic",
    //   icon: <TableOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/user-manage`}>User Management</Link>,
    //       key: `/${role}/user-manage`,
    //     },
    //     {
    //       label: <Link href={`/${role}/academic/department`}>Departments</Link>,
    //       key: `/${role}/academic/department`,
    //     },
    //     {
    //       label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
    //       key: `/${role}/academic/semester`,
    //     },
    //   ],
    // },
    // {
    //   label: "Management",
    //   key: "management",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/department`}>Department</Link>,
    //       key: `/${role}/department`,
    //     },
    //     {
    //       label: <Link href={`/${role}/building`}>Building</Link>,
    //       key: `/${role}/building`,
    //     },
    //     {
    //       label: <Link href={`/${role}/room`}>Rooms</Link>,
    //       key: `/${role}/room`,
    //     },
    //     {
    //       label: <Link href={`/${role}/course`}>Course</Link>,
    //       key: `/${role}/course`,
    //     },
    //     {
    //       label: (
    //         <Link href={`/${role}/semester-registration`}>
    //           Semester registration
    //         </Link>
    //       ),
    //       key: `/${role}/semester-registration`,
    //     },
    //     {
    //       label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
    //       key: `/${role}/offered-course`,
    //     },
    //     {
    //       label: (
    //         <Link href={`/${role}/offered-course-section`}>
    //           Course sections
    //         </Link>
    //       ),
    //       key: `/${role}/offered-course-section`,
    //     },
    //     {
    //       label: (
    //         <Link href={`/${role}/offered-course-schedule`}>
    //           Course schedules
    //         </Link>
    //       ),
    //       key: `/${role}/offered-course-schedule`,
    //     },
    //   ],
    // },
  ];

  

 

  if (role === 'admin') return adminSidebarItems;
  else if (role === 'user' ) return userSidebarItems;
  
  else {
    return defaultSidebarItems;
  }
};
