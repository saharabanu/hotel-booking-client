import HotelDetailsById from "../../../../component/forSEO/HotelDetailsById";

export const metadata = {
  title: "Hotel Details",
};
const DetailsPage = ({ params }) => {
  const id = params?.id;

  return (
    <>
      <HotelDetailsById id={id} />
    </>
  );
};

export default DetailsPage;
