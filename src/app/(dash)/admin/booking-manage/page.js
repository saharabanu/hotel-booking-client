"use client";

import toast from "react-hot-toast";
import Heading from "../../../../component/ui/reUsable/Heading";
import { useBookingStatusChangeMutation, useDeleteBookingMutation, useGetAllBookingsQuery } from "../../../../redux/api/bookingApi";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const BookingManagePage = () => {
  const { data } = useGetAllBookingsQuery();
  const allData = data?.bookings;

  const [deleteBooking] = useDeleteBookingMutation();
  const [bookingStatusChange] = useBookingStatusChangeMutation();



  const handleDelete = async (id) => {
    const res = await deleteBooking(id);
    

    if (res._id === id) {
      toast.success("Booking Deleted Successfully");
    } else {
      toast.error("Something Went Wrong");
    }
  };
  const handleStatusChange = async (id) => {
    const res = await bookingStatusChange(id);

    if (res._id === id) {
      toast.success("Booking Accepted Successfully");
    } else {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div>
      <Heading title="All Booking History " />
      

      <div className="booking-profile">


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
          {allData &&
            allData?.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.serviceId?.title}</td>
                <td>{item?.startDate}</td>
                <td>{item?.endDate}</td>
                <td>{item?.serviceId?.price}</td>
                <td>{item?.serviceId?.category}</td>
                <td>{item?.name}</td>
                <td onClick={() => handleStatusChange(item?._id)}>
                    {item?.status ? (
                      <span className="text-cBlue">Accepted</span>
                    ) : (
                      <span className="text-cOrange">Pending <AiOutlineEdit/></span>
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
    </div>
  );
};

export default BookingManagePage;
