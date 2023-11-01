/* eslint-disable react/no-children-prop */
import MainDashboard from '../../component/forSEO/MainDashboard'
export const metadata = {
  title: "Dashboard",
  
};

const DashBoardLayout = ({children}) => {
  return (
    <>
<MainDashboard children={children}/>

    </>
  )
}

export default DashBoardLayout