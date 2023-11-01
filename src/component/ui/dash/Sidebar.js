"use client"

import { useState } from 'react';

import {  Layout, Menu } from 'antd';
// import { USER_ROLE } from '@/constants/role';
 import { SidebarItems } from '../../../constants/SidebarItems';
import { getUserInfo, isLoggedIn, removeUserInfo } from '../../../services/auth.service';
import { useRouter } from 'next/navigation';
import { authKey } from '../../../constants/storage';
// import { getUserInfo } from '@/services/auth.service';
import Swal from 'sweetalert2';


const { Sider } = Layout;



const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    
    const router = useRouter();
  
    // const logout = () => {
    //   removeUserInfo(authKey);
    //   router.push("/signin");
    // };
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
    position:"sticky", top: 0, left: 0, bottom: 0,backgroundColor:"#F3F6FD" }}>

        
        <Menu style={{backgroundColor:"#F3F6FD"}}
        defaultSelectedKeys={['1']} mode="inline" 
         items={SidebarItems(role)}
         />
          <button onClick={logout} className="btn btn_md btn_theme">Log out</button>
      </Sider>
  )
}

export default Sidebar;






