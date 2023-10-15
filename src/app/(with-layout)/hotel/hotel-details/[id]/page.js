import HotelBreadCrumb from '../../../../../component/ui/HotelBreadCrumb'

const HotelDetails = ({params}) => {
  // console.log(params.id)
  return (
    <>
    <HotelBreadCrumb items={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Hotel",
            link: "/hotel",
          },
          {
            label: "Hotel-details",
            link: '/hotel/hotel-details',
          },
        ]} />
    
    id:{params.id}</>
  )
}

export default HotelDetails