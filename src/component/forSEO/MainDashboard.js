'use client'
import {Layout, Row, Spin} from 'antd';
import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react'
import Sidebar from '../../component/ui/dash/Sidebar'
import { getUserInfo, isLoggedIn } from '../../services/auth.service';

import UiHeader from "../ui/UiHeader";
import UiFooter from '../ui/UiFooter';
import Subscribe from '../ui/Subscribe';
import CommonBanner from '../ui/CommonBanner';



const MainDashboard = ({children}) => {
  const loggedIn = isLoggedIn();
  const {role} = getUserInfo();
  

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
 };

 let bannerLinks = [];
 if (role === 'admin') {
  bannerLinks = [
    { text: 'Admin Dashboard' }
  ];
} else if (role === 'user') {
  bannerLinks = [
    { text: 'Customer Dashboard' }
  ];
}

const title = role === 'admin' ? 'Admin Dashboard' : 'Customer Dashboard';
 
  
  return (
    <>
    <UiHeader/>
    <CommonBanner title={title} links={bannerLinks}/>
    <div className="dash-main-layout">
      <div className="das-sidebar">
         <Sidebar/>
      </div>
      <div className="dash-content" style={{margin: '20px 0'}}>
      {/* <Notification/> */}
           {children}
      </div>
    </div>
    <Subscribe/>
<UiFooter/>
    </>
  )
}

export default MainDashboard