'use client'
import {Layout, Row, Spin} from 'antd';
import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react'
import Sidebar from '../../component/ui/dash/Sidebar'
import { isLoggedIn } from '../../services/auth.service';

const DashboardLayout = ({children}) => {
  const loggedIn = isLoggedIn();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

 useEffect(()=>{
 if(!loggedIn){
 router.push("/login")
 }
 setLoading(true)
 },[router])

 if(!loading){
  return <Row justify='center' align='middle' style={{margin:'100px 0'}}>
  <Spin tip="Loading" size="large">
   <div className="content" />
 </Spin>
</Row>
 }
 
  
  return (
    <>
<Layout hasSider>
         
      <Sidebar />
      
      {/* <Contents> */}
      {children}
      {/* </Contents> */}
      
      </Layout>

    </>
  )
}

export default DashboardLayout