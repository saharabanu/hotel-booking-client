'use client'
import Beyond from "./Beyond"
import Destination from "./Destination"
import HotDeals from "./HotDeals"
import LatestTravelNews from "./LatestTravelNews"
import Offfer from "./Offfer"
import Partner from "./Partner"
import PromotionalTour from "./PromotionalTour"
import Reviews from "./Reviews"
import Searchbar from "./Searchbar"
import Subscribe from "./Subscribe"
import TopDesination from "./TopDesination"
import Banner from "./Banner"
import ScrollToTopButton from "../others/ScrollToTopButton"


const Home = () => {
  return (
    <>
    <Banner/>
  <Searchbar/>
 <Beyond/>
<TopDesination/>
<HotDeals/> 

 <Offfer/> 
 <PromotionalTour/>
<Destination/>
{/* <Images/> */}
<LatestTravelNews/> 
<Reviews/>
 <Partner/>
<Subscribe/>   
<ScrollToTopButton/>
    </>
  )
}

export default Home