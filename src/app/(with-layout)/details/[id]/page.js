import HotelDetailsById from '../../../../component/forSEO/HotelDetailsById'
import { useGetSingleServiceQuery } from '../../../../redux/api/serviceApi';


export const metadata = {
  title: "Hotel Details",
  
};
const DetailsPage = ({params}) => {
  const id = params?.id;

  
  return (
    <>
<HotelDetailsById id={id}/>
    </>
  )
}

export default DetailsPage