'use client'
import Image from "next/image";
import logoImg  from '../../assets/images/logo.png';
import auth from "../firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
 

const UiHeader = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  if (error) {
   
    <div>
      <p>Error: {error?.message}</p>
    </div>
 
}
if (loading) {
  <p>Loading...</p>
}
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
              <li><a href="/">Categories</a></li>
              <li><a href="/">Pages</a></li>
              <li><a href="/">Dashboard</a></li>
              <li><a href="/">News</a></li>
              <li><a href="/">Contact</a></li>

            </ul>
          </menu>
          <div className="middle-nav-last-div">
         

         {!user?.email &&<a href="/login">Login</a>}
            
          
            {!! user?.email && <button onClick={logout}>Log out</button>}
            
              {user?.email &&  <p>{user?.email}</p>}
            

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