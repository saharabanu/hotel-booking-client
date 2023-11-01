'use client'
import { EyeOutlined} from '@ant-design/icons';
import DynamicTable from '../../../component/others/DynamicTable'

import { getUserInfo } from '../../../services/auth.service';
import {useGetSingleUserQuery} from '../../../redux/api/userApi'



const ProfilePage = () => {
  const {id} = getUserInfo()
  const {data} = useGetSingleUserQuery(id);
  

  
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
    <>





 
      <div className="">
      <br />
      <div >
        <div className='profile-left-div'>
        <h2> Hey!! {data?.name} See Your Info</h2>
      <div className="profile-info">
           <h2>Name:  {"  "} {data?.name}</h2>
           <h2>Email:  {"  "}{data?.email} </h2>
           <h2>Contact Number:  {"  "} {data?.phonenumber}</h2>
           <h2>Role:  {"  "}  {data?.role}</h2>
           <a href={`/edit-profile/${data?.id}`}>Edit Profile</a>
      </div>
        </div>
        <br /> <br />
        <div className='profile-right-div'>
          <div>
          <h2>Total Booking 231</h2>
          
          </div>
          <div>
          <h2>Pending Booking  23</h2>
          
          </div>
        </div>
      </div>
      <br /> <br />
      <div className='booking-profile'>
      <h3>My Booking History</h3>
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
    </>
  )
}

export default ProfilePage