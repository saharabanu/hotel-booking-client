'use client'
import {Layout, Row, Spin} from 'antd';
import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react'
import Sidebar from '../../component/ui/dash/Sidebar'
import { isLoggedIn } from '../../services/auth.service';
import Notification from './admin/notification/page';



const DashboardLayout = ({children}) => {
  const loggedIn = isLoggedIn();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

 useEffect(()=>{
 if(!loggedIn){
 router.push("/signin")
 }
 setLoading(true)
 },[router,loggedIn])

 if(!loading){
  return <Row justify='center' align='middle' style={{margin:'100px 0'}}>
  <Spin tip="Loading" size="large">
   <div className="content" />
 </Spin>
</Row>
 }
 
  
  return (
    <>
    <div className="dash-main-layout">
      <div className="das-sidebar">
         <Sidebar/>
      </div>
      <div className="dash-content">
      {/* <Notification/> */}
           {children}
      </div>
    </div>

    </>
  )
}

export default DashboardLayout