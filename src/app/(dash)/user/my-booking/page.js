'use client';

import { AiOutlineDelete } from "react-icons/ai";
import { getUserInfo } from "../../../../services/auth.service";
import { useGetSingleUserQuery } from "../../../../redux/api/userApi";
import { useDeleteBookingMutation, useGetAllBookingsQuery } from "../../../../redux/api/bookingApi";
import toast from "react-hot-toast";
import SubHeading from '../../../../component/ui/reUsable/SubHeading'
import { Modal, message } from "antd";

const MyBooking = () => {

  const { id, email } = getUserInfo();
  const { data } = useGetSingleUserQuery(id);
  const { data: bookingData, isLoading,isError } = useGetAllBookingsQuery({});
  const [deleteBooking] = useDeleteBookingMutation();
  const userBookings = bookingData?.bookings.filter((booking) => booking?.userId?.email === email);
  

  const handleDelete = async (id) => {


    try {
      Modal.confirm({
        title: 'Confirm Deletion',
        content: 'Are you sure you want to delete this booking?',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk: async () => {
          // Delete department logic here
          try {
            await deleteBooking(id);
            message.success('Booking Deleted successfully');
          } catch (err) {
            message.error('An error occurred while deleting the booking');
          }
        },
      });
    } catch (err) {
      message.error(err.message);
    }


    // const res = await deleteBooking(id);

    // if (res._id === id) {
    //   toast.success("Booking Deleted Successfully");
    // } else {
    //   toast.error("Something Went Wrong");
    // }
  };

  let content = null;

  if (isLoading) {
    content = (
      <>
        <div>Loading.......</div>
        
      </>
    );
  }

  if (!isLoading && isError) {
    content = <h5>There was an error</h5> ;
  }

  if (!isLoading && !isError && userBookings?.length === 0) {
    content = 
      <tr>
        <td colSpan="8" style={{fontSize:'14px', color:'red'}}>No Booking Data Found To Display. Please, Booking</td>
      </tr>
    
  }

  if (!isLoading && !isError && userBookings?.length > 0){
    content =  userBookings?.map((item, index) => (
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
              <span style={{color:"blue"}}>Accepted</span>
            ) : (
              <span style={{color:"orange"}}>Pending</span>
            )}
          </td>
          <td>
            <button
              onClick={() => handleDelete(item?._id)}
              className="text-xl text-cOrange"
            >
              <span style={{color:"red", fontSize:"14px", cursor:"pointer"}}> <AiOutlineDelete /></span>
            </button>
          </td>
      </tr>
    ))
  }

    
  return (
    <>

<div className='booking-profile'>
      <SubHeading title="My Booking History"/>
      <div className="table-wrapper">
    <table className="fl-table">
        <thead>
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
        {content}
        </tbody>
    </table>
</div>
      </div>
    </>
  )
}

export default MyBooking