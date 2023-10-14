import HotelBreadCrumb from '../../../component/ui/HotelBreadCrumb';

const AllTopDestinationPage = () => {
  return (
    <>
<HotelBreadCrumb items={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Top-Destination",
            link: "/top-destinations",
          },
        ]} />

        <h1>This is all Top destination found page</h1>
        <p>19 founds here</p>
    </>
  )
}

export default AllTopDestinationPage   