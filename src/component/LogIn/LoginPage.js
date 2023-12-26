/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useRouter } from 'next/navigation';
import Form from '../form/Form';
import FormInput from '../form/FormInput';


import Swal from 'sweetalert2'

import { storeUserInfo } from '../../services/auth.service';
import { useUserLoginMutation } from '../../redux/api/authApi';
import { message } from 'antd';
import Heading from '../ui/reUsable/Heading';
import toast from 'react-hot-toast';




const LoginPage = () => {
  const [userLogin] = useUserLoginMutation()
  const router = useRouter();
  

  const onSubmit = async (data) => {
    try {
      
       const res =await userLogin({...data}).unwrap();
      //  console.log(res)
     
      // Check if the user is authenticated
      // if (res?.accessToken) {
       
      //   Swal.fire({
      //     icon: 'success',
      //     title: 'Good job!',
      //     text: 'Logged In Successfully!',
      //   });
  
      //   // Redirect to the home page
      //   router.push('/');
      // }
      // else{
      //   message.error("OOOPs!! Your email or password doesn't match")
      // }

      if (res?.accessToken) {
        // User login successful
        storeUserInfo({ accessToken: res?.accessToken });

        toast.success("Logged In Successfully");
        router.push("/");
      } else if (res?.message == "User not found here!") {
        // User not found or other error from the server
        toast.error("User not found or other error. Please check your credentials.");
      } else {
        // User not found or other error
        toast.error("OOOPs!! Your email or password doesn't match");
      }
      

      // storeUserInfo({ accessToken: res?.accessToken });
    } catch (err) {
      toast.error(err.message);
    }
  };
// console.log(storeUserInfo())

  return (
    <>




 <section id="common_author_area" className="section_padding">
        <div className="container">
          <div className="login">
            <div className="common_author_boxed">
              <Heading title="Please LogIn"/>
              <div className="common_author_form">
                <Form submitHandler={onSubmit} id="main_author_form">
                  <div className="form-group">
                  <FormInput name = 'email' type='email' size="large" label="User Email"/>
                  </div>
                  <br />
                  <div className="form-group">
                  <FormInput name = 'password' type='password' size="large" label="User Password"/>
                  </div>
                 
                 
                
                 <br />
                  <div className="common_form_submit">
                    <button type="primary"  htmlType='submit' className="btn btn_theme btn_md">Login</button>
                  </div>
                  <div className="have_acount_area other_author_option">
                    <div className="line_or">
                      <span>or</span>
                    </div>
                    
                    <p>
                      Don't have an account? <a href="/signup" style={{fontWeight:"bold", }}>Register now</a>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default LoginPage