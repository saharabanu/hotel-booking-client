"use client"

import { useState } from 'react';

import {  Layout, Menu } from 'antd';
// import { USER_ROLE } from '@/constants/role';
 import { SidebarItems } from '../../../constants/SidebarItems';
import { getUserInfo, isLoggedIn, removeUserInfo } from '../../../services/auth.service';
import { useRouter } from 'next/navigation';
import { authKey } from '../../../constants/storage';
// import { getUserInfo } from '@/services/auth.service';

const { Sider } = Layout;



const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const userLoggedIn = isLoggedIn();
    const router = useRouter();
  
    const logout = () => {
      removeUserInfo(authKey);
      router.push("/signin");
    };

    const {role}= getUserInfo() 
    
    
    
    
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed (value)} width={280}  style={{overflow:"auto", height:"100vh",
    position:"sticky", top: 0, left: 0, bottom: 0,backgroundColor:"#000" }}>

        <div style={{color: 'white', fontSize:"2rem",textAlign:"center", 
      fontWeight:"bold", marginBottom: "1rem"}} >{role} </div>
        <Menu 
        theme="dark" 
        defaultSelectedKeys={['1']} mode="inline" 
         items={SidebarItems(role)}
         />
          <button onClick={logout} className="logout-btn">Log out</button>
      </Sider>
  )
}

export default Sidebar;






