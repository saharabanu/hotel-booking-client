"use client"

import { useState } from 'react';

import {  Layout, Menu } from 'antd';

 import { SidebarItems } from '../../../constants/SidebarItems';
import { getUserInfo, isLoggedIn, removeUserInfo } from '../../../services/auth.service';
import { useRouter } from 'next/navigation';
import { authKey } from '../../../constants/storage';

import Swal from 'sweetalert2';

import { FiLogOut } from "react-icons/fi";
const { Sider } = Layout;



const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    
    const router = useRouter();
  
   
    const logout = () => {
      Swal.fire({
        title: 'Are you sure ? You want to log out.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Confirm', 
        cancelButtonText: 'No , Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          // Log out the user
          removeUserInfo(authKey);
          router.push('/signin');
        }
      });
    };

    const {role}= getUserInfo() 
    
    
    
    
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed (value)} width={280}  style={{overflow:"auto", height:"100vh",
     top: 13, left: 0, bottom: 0,backgroundColor:"#F3F6FD" }}>

        
        <Menu style={{backgroundColor:"#F3F6FD", fontSize:"16px"}}
        defaultSelectedKeys={['1']} mode="inline" 
         items={SidebarItems(role)}
         />
          <button onClick={logout} className="dash-logout"><FiLogOut/> Log out</button>
      </Sider>
  )
}

export default Sidebar;






