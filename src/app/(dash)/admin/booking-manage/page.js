'use client'
import HotelBreadCrumb from '../../../../component/ui/HotelBreadCrumb';
import DynamicTable  from '../../../../component/others/DynamicTable'

import {EyeOutlined} from '@ant-design/icons';
import Heading from '../../../../component/ui/reUsable/Heading';




const BookingManagePage = () => {
 
    const base = "admin";

    const columns = [
      {
        title: "SL No.",
        dataIndex: "id"
    
      },
      
      {
        title: "Booking ID",
        dataIndex: "bookingId",
      },
      
      {
        title: "Booking Type",
        dataIndex: "bookingType",
      },
      {
        title: "Booking Amount",
        dataIndex: "amount",
      },
      {
        title: "Status",
        dataIndex: "status",
      },
      {
        title: "Action",
        dataIndex: "action",
      },
      
      
    ];
  
    const dataSource = [
      {
        id: '1',
        bookingId: '#JK589V80',
        bookingType: 'Hotel',
        amount: '45.00',
        status:'Completed',
        action:<EyeOutlined/>
      },
      {
        id: '2',
        bookingId: '#JK589V80',
        bookingType: 'Hotel',
        amount: '45.00',
        status:'Completed',
        action:<EyeOutlined/>
      },
      {
        id: '3',
        bookingId: '#JK589V80',
        bookingType: 'Hotel',
        amount: '45.00',
        status:'Pending',
        action:<EyeOutlined/>
      },
      {
        id: '4',
        bookingId: '#JK589V80',
        bookingType: 'Hotel',
        amount: '45.00',
        status:'Completed',
        action:<EyeOutlined/>
      },
      {
        id: '5',
        bookingId: '#JK589V80',
        bookingType: 'Hotel',
        amount: '45.00',
        status:'Completed',
        action:<EyeOutlined/>
      },
      {
        id: '6',
        bookingId: '#JK589V80',
        bookingType: 'Hotel',
        amount: '45.00',
        status:'Pending',
        action:<EyeOutlined/>
      },
      {
        id: '7',
        bookingId: '#JK589V80',
        bookingType: 'Hotel',
        amount: '45.00',
        status:'Completed',
        action:<EyeOutlined/>
      },
      {
        id: '8',
        bookingId: '#JK589V80',
        bookingType: 'Hotel',
        amount: '45.00',
        status:'Completed',
        action:<EyeOutlined/>
      },
      {
        id: '9',
        bookingId: '#JK589V80',
        bookingType: 'Hotel',
        amount: '45.00',
        status:'Completed',
        action:<EyeOutlined/>
      },
    ]
    

  return (
    <div>
     <Heading title="All Booking History "/>
       

        <div className='booking-profile'>
      
      <DynamicTable
        // loading={loading}
         columns={columns}
         dataSource={dataSource}
        // dataSource={admins}
        // pageSize={size}
        // totalPAge={meta?.total}
        // showSizeChanger={true}
        // onPaginationChange={onPaginationChange}
        // onTableChange={onTableChange}
        // showPagination={true}
      />
      </div>
    </div>
  )
}

export default BookingManagePage