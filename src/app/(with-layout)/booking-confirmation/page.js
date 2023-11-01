import CommonBanner from "../../../component/ui/CommonBanner"

const BookingConfirmationPage = () => {
  const bannerLinks = [
    {text: "Services", url:"/services"},
    {text: "details", url:"/details"},
    {text: "Booking",url: "/booking"},
    {text: "Booking-Confirm"},
  ]
  return (


    <>
<CommonBanner title="Booking-Confirm" links={bannerLinks}/>

      <h1>Your order has been confirmed</h1>

    </>
  )
}

export default BookingConfirmationPage