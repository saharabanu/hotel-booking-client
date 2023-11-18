"use client";

import { getUserInfo } from "../../../services/auth.service";
import { useGetSingleUserQuery } from "../../../redux/api/userApi";
import Image from "next/image";
import profileImg from "../../../assets/images/profileImg.jpg";
import { useDeleteBookingMutation, useGetAllBookingsQuery } from "../../../redux/api/bookingApi";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { id, email } = getUserInfo();
  const { data } = useGetSingleUserQuery(id);
  const { data: bookingData } = useGetAllBookingsQuery({});
  const [deleteBooking] = useDeleteBookingMutation();
  const userBookings = bookingData?.bookings.filter((booking) => booking?.userId?.email === email);
  

  const handleDelete = async (id) => {
    const res = await deleteBooking(id);
    // console.log(res)
    // toast.success("Booking Deleted Successfully");

    if (res._id === id) {
      toast.success("Booking Deleted Successfully");
    } else {
      toast.error("Something Went Wrong");
    }
  };

  

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



        <table className="table lg:table-lg table-xs">
        <thead className="bg-cBlue text-gray-100 lg:text-base">
          <tr>
            <th>Serial</th>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Price</th>
            <th>Category</th>
            <th>User Name</th>
            <th>Status</th>

            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {userBookings &&
            userBookings?.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.serviceId?.title}</td>
                <td>{item?.startDate}</td>
                <td>{item?.endDate}</td>
                <td>{item?.serviceId?.price}</td>
                <td>{item?.serviceId?.category}</td>
                <td>{item?.name}</td>
                <td>
                    {item?.status ? (
                      <span className="text-cBlue">Accepted</span>
                    ) : (
                      <span className="text-cOrange">Pending</span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="text-xl text-cOrange"
                    >
                      <AiOutlineDelete />
                    </button>
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default ProfilePage;
