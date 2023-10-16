
import HotelBreadCrumb from '../../../component/ui/HotelBreadCrumb'
const BookingConfirmationPage = () => {
    const base = 'Home'
  return (


    <>
<div className="container">
        <HotelBreadCrumb
          items={[
            {
              label: `${base}`,
              link: "/",
            },
            {
              label: "Services",
              link: "/services",
            },

            {
              label: "Booking",
              link: "/booking",
            },
            {
              label: "Booking-confirmation",
              link: "/booking-confirmation",
            },
          ]}
          style={{ paddingLeft: "20px " }}
        />
      </div>

      <h1>Your order has been confirmed</h1>

    </>
  )
}

export default BookingConfirmationPage