import HotelBreadCrumb from '../../../../../../component/ui/HotelBreadCrumb'


const BookingEditPage = () => {
    const base = "admin";
  return (
    <>

<div className="container">
        <HotelBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: "User-Manage",
              link: `/${base}/user-manage`,
            },

            
          ]}
          style={{ paddingLeft: "20px " }}
        />
      </div>
        <h2>Only admin can update Bookings information</h2>
    </>
  )
}

export default BookingEditPage