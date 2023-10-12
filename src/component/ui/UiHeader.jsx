'use client'
import Image from "next/image";
import logoImg  from '../../assets/images/logo.png';
import { FacebookOutlined, SearchOutlined } from '@ant-design/icons';
 

const UiHeader = () => {
  return (
    <>
      <header>
    {/* <!--  navbar  --> */}

    {/* <!-- top navbar section  start--> */}

    <div className="full-nav-main ">
      <div className="top-nav container">
        <div className="top-nav-left">
          <ul className="topbar-list">
            <li className="top-nav-icons">
              <a href="#"><FacebookOutlined /></a>
              <a href="#"><i className="fab fa-twitter-square"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </li>
            <li><a href="#"><span>+880 1752 810246</span></a></li>
            <li><a href="#"><span>saharabanungn@gmail.com</span></a></li>
          </ul>
        </div>
        {/* <!-- right part --> */}
        <div className="top-nav-right">
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign up</a></li>
            <li>
              <a href="#">English <i className="fa-solid fa-chevron-down"></i></a>
            </li>
            <li>
              <a href="#">USD <i className="fa-solid fa-chevron-down"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <hr/>

      {/* <!-- top navbar section end --> */}

      {/* <!-- middle navbar section  start--> */}
      <div className="middle-nav-main ">
        <div className="middle-nav container">
          <div>
            <a href="#"><Image src={logoImg} width={100} height={50}  alt="logo"/></a>
          </div>
          <menu className="menu" id="navbarList">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact</a></li>

            </ul>
          </menu>
          <div className="middle-nav-last-div">
          <SearchOutlined />

            <a href="#">Become a partner</a>

          </div>
          <i className="fa-solid fa-bars toggle-icon" id="navbarToggle"></i>
        </div>



      </div>

      {/* <!-- middle navbar section  end-->
      <!-- hero section  start--> */}
      <div className="hero">
        <h1>Explore the world together</h1>
        <h6>Find awesome flights, hotel, tour, car and packages</h6>
      </div>

      {/* <!-- hero section  end--> */}

    </div>
  </header>
    </>
  )
}

export default UiHeader