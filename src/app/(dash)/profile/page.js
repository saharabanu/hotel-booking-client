"use client";
import { EyeOutlined } from "@ant-design/icons";
import DynamicTable from "../../../component/others/DynamicTable";

import { getUserInfo } from "../../../services/auth.service";
import { useGetSingleUserQuery } from "../../../redux/api/userApi";
import Image from "next/image";
import profileImg from "../../../assets/images/profileImg.jpg";
import { FaBagShopping } from "react-icons/fa6";
import { FaSync } from "react-icons/fa";

const ProfilePage = () => {
  const { id } = getUserInfo();
  const { data } = useGetSingleUserQuery(id);

  const columns = [
    {
      title: "SL No.",
      dataIndex: "id",
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
      id: "1",
      bookingId: "#JK589V80",
      bookingType: "Hotel",
      amount: "45.00",
      status: "Completed",
      action: <EyeOutlined />,
    },
    {
      id: "2",
      bookingId: "#JK589V80",
      bookingType: "Hotel",
      amount: "45.00",
      status: "Completed",
      action: <EyeOutlined />,
    },
    {
      id: "3",
      bookingId: "#JK589V80",
      bookingType: "Hotel",
      amount: "45.00",
      status: "Pending",
      action: <EyeOutlined />,
    },
    {
      id: "4",
      bookingId: "#JK589V80",
      bookingType: "Hotel",
      amount: "45.00",
      status: "Completed",
      action: <EyeOutlined />,
    },
    {
      id: "5",
      bookingId: "#JK589V80",
      bookingType: "Hotel",
      amount: "45.00",
      status: "Completed",
      action: <EyeOutlined />,
    },
    {
      id: "6",
      bookingId: "#JK589V80",
      bookingType: "Hotel",
      amount: "45.00",
      status: "Pending",
      action: <EyeOutlined />,
    },
    {
      id: "7",
      bookingId: "#JK589V80",
      bookingType: "Hotel",
      amount: "45.00",
      status: "Completed",
      action: <EyeOutlined />,
    },
    {
      id: "8",
      bookingId: "#JK589V80",
      bookingType: "Hotel",
      amount: "45.00",
      status: "Completed",
      action: <EyeOutlined />,
    },
    {
      id: "9",
      bookingId: "#JK589V80",
      bookingType: "Hotel",
      amount: "45.00",
      status: "Completed",
      action: <EyeOutlined />,
    },
  ];

  return (
    <>
      <br />

      <div>
      {/* <div className="profile-right-div">
          <div className="tour_booking_form_box ">
            <div className="booking_success_area">
              <div className="" style={{color:'#818090', fontSize:'100px'}}>
                <FaBagShopping />
              </div>
              <div className="booking_success_text">
                <h2>Total Bookings</h2>
                <h2>231</h2>
              </div>
            </div>
          </div>
          <div className="tour_booking_form_box " style={{marginLeft:"10px"}}>
            <div className="booking_success_area">
              <div className=""style={{color:'#818090', fontSize:'100px'}}>
                
                <FaSync />
              </div>
              <div className="booking_success_text">
                <h2>Pending Bookings !</h2>
                <h2>24</h2>
              </div>
            </div>
          </div>
        </div>
     <br /> <br /> */}
        <div className="profile-left-div">
          <div>
            <Image
              src={profileImg}
              alt="profile-img"
              height={200}
              width={200}
              className="profile-img"
            />
            <div className="profile-info">
              <h2>
                Name: {"  "} {data?.name}
              </h2>
              <h2>
                Email: {"  "}
                {data?.email}{" "}
              </h2>
              <h2>
                Contact Number: {"  "} {data?.phonenumber}
              </h2>
              <a
                href={`/edit-profile/${data?.id}`}
                className="dash-logout"
                style={{ paddingLeft: "0" }}
              >
                Edit Profile
              </a>
            </div>
          </div>
        </div>
       
       
      </div>
      <br /> <br />
      <div className="booking-profile">
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
    </>
  );
};

export default ProfilePage;
