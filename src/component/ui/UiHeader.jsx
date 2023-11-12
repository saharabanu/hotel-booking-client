/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import logoImg from "../../assets/images/logo.png";
import { getUserInfo, isLoggedIn, removeUserInfo } from "../../services/auth.service";
import { useRouter } from "next/navigation";
import { authKey } from "../../constants/storage";
import { useGetSingleUserQuery } from "../../redux/api/userApi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

const UiHeader = () => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const { id, email } = getUserInfo();
  const { data } = useGetSingleUserQuery(id);
  const [isMobile, setIsMobile] = useState(false)

  // console.log(data)

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/signin");
  };
  return (
    <>
      <header>
        <div className="full-nav-main ">
          <div className="middle-nav container">
            <div>
              <a href="/">
                <Image src={logoImg} width={100} height={50} alt="logo" />
              </a>
            </div>
            <div className="main-menu">
              <menu className={isMobile ? "menu-mobile" : "menu"} onClick={() => setIsMobile(false)}>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Give Feedback</a>
                  </li>
                  {userLoggedIn && (
                    <li>
                      <a href="/profile">Profile</a>
                    </li>
                  )}
                  
                </ul>
              </menu>

              <div style={{display:"flex", alignItems:"center"}}>
                {userLoggedIn && (
                  <span style={{ fontSize: "20px", color: "#fff", paddingRight: "10px" }}>
                    {email}{" "}
                  </span>
                )}

                {userLoggedIn && (
                  <button onClick={logout} className="logout-btn">
                    Log out
                  </button>
                )}
                {!userLoggedIn && (
                  <a href="/signin" className="nav-login">
                    Login
                  </a>
                )}

                <button className="close-btn" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <RxCross1 /> : <RxHamburgerMenu />}
                  </button>
              </div>
            </div>
            
          </div>
        </div>
      </header>
    </>
  );
};

export default UiHeader;
