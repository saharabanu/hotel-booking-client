'use client'
import Image from "next/image";
import logoImg  from '../../assets/images/logo.png';
import { isLoggedIn, removeUserInfo } from "../../services/auth.service";
import { useRouter } from "next/navigation";
import { authKey } from "../../constants/storage";




const UiHeader = () => {
 
  const userLoggedIn = isLoggedIn();
  const router = useRouter();

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/signin");
  };
  return (
    <>
      <header>
    {/* <!--  navbar  --> */}

    {/* <!-- top navbar section  start--> */}

    <div className="full-nav-main ">
      
      {/* <!-- middle navbar section  start--> */}
      <div className="middle-nav-main ">
        <div className="middle-nav container">
          <div>
            <a href="/"><Image src={logoImg} width={100} height={50}  alt="logo"/></a>
          </div>
          <menu className="menu" id="navbarList">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Give Feedback</a></li>
              {userLoggedIn && <li><a href="/profile">Profile</a></li>}

            </ul>
            
          </menu>
          <div className="middle-nav-last-div">
         

        
            
          
            { userLoggedIn &&  <button onClick={logout} className="logout-btn">Log out</button> }
            {
              !userLoggedIn &&  <a href="/signin">Login</a>
            }
            

          </div>
          <i className="fa-solid fa-bars toggle-icon" id="navbarToggle"></i>
        </div>



      </div>

      

    </div>
  </header>
    </>
  )
}

export default UiHeader