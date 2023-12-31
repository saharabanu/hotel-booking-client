/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRouter } from "next/navigation";
import Form from "../form/Form";
import FormInput from "../form/FormInput";
import {useUserSignupMutation} from '../../redux/api/authApi';
import Swal from 'sweetalert2'
import { storeUserInfo } from "../../services/auth.service";
import Heading from '../ui/reUsable/Heading'
import toast from "react-hot-toast";


const RegisterPage = () => {
  const [userSignup] = useUserSignupMutation()
 
  const router = useRouter();

  

  const onSubmit = async (data) => {
    try {

      const res = await userSignup({ ...data }).unwrap();
      
      
      if (res?.accessToken){
        // console.log(res, ' from res');
        storeUserInfo({ accessToken: res?.accessToken })
        Swal.fire({
              icon: 'success',
               title: 'Hurrah!',
              text: 'User Registered Successfully!',
             });
        router.push("/")
      }
      else{
        toast.error("Email already exists. Please use a different email.");
      }
      
    //  console.log(data)
    //   const res = await userSignup({...data}).unwrap();
    //   console.log(res)
      
    //   if(res?.accessToken){
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Hurrah!',
    //       text: 'User Registered Successfully!',
    //     });
    //     router.push('/')
         
    //   }
    //   else{
    //     alert("User does Not registered")
    //   }
    //   storeUserInfo({ accessToken: res?.accessToken });
    }
    catch(err) {
      toast.error(err.message)
    }
    
  };
  return (
    <>
     
      <section id="common_author_area" className="section_padding">
        <div className="container">
          <div className="login">
            <div className="common_author_boxed">
            <Heading title="Please SignUp"/>
              <div className="common_author_form">
                <Form submitHandler={onSubmit} id="main_author_form">
                  <div className="form-group">
                    <FormInput name="name" type="name" size="large" label="User Name" />
                  </div>
                  <br />
                  <div className="form-group">
                    <FormInput name="email" type="email" size="large" label="User Email" />
                  </div>
                  <br />
                  <div className="form-group">
                    <FormInput name="phonenumber" type="number" size="large" label="User phone number" />
                  </div>
                  <br />
                  <div className="form-group">
                    <FormInput name="password" type="password" size="large" label="User Password" />
                  </div>
<br />
                  {/* Terms and Conditions Checkbox */}
                  <div className="form-group">
                    <input type="checkbox" id="termsConditions" name="termsConditions" required />
                    <label htmlFor="termsConditions">
                      I agree to the{" "}
                      <a href="/terms" target="_blank">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <br /> 
                  {/* Privacy Policy Link */}
                  <div className="form-group">
                    <input type="checkbox" id="termsConditions" name="termsConditions" required />
                    <label htmlFor="termsConditions">
                      <a href="/privacy" target="_blank">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <br />
                  <div className="common_form_submit">
                    <button type="primary" htmlType="submit" className="btn btn_theme btn_md">
                      Sign Up
                    </button>
                  </div>
                  <div className="have_acount_area other_author_option">
                    <div className="line_or">
                      <span>or</span>
                    </div>
                    {/* <ul>
                      <li>
                        <a href="#!">
                          <img src="assets/img/icon/google.png" alt="icon" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <img src="assets/img/icon/facebook.png" alt="icon" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <img src="assets/img/icon/twitter.png" alt="icon" />
                        </a>
                      </li>
                    </ul> */}
                    <p>
                      Already have an account? <a href="/signin" style={{fontWeight:"bold", }}>Login now</a>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
