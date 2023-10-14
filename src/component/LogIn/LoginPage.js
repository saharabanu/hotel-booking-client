/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useRouter } from 'next/navigation';
import Form from '../form/Form';
import FormInput from '../form/FormInput';
import auth from '../firebase/firebase.auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import Swal from 'sweetalert2'



const LoginPage = () => {
  const router = useRouter();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  

  

  const onSubmit = async(data) => {

   
    try {
      signInWithEmailAndPassword(data.email, data.password);
      if (user) {
        // Show a success message with Swal
        
        // Redirect to the home page
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text: 'Logged In Successfully!',
        });
        router.push('/');
        
      } else {
        // Show an error message with Swal
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Invalid email or password!',
        });
      }
      
     
    } catch (err) {
      console.error(err.message)
    }

  }
  return (
    <>



{loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
            {user && <p style={{ color: 'green' }}> 
  
  LoggedIn Successfully!,
  </p>}
 <section id="common_author_area" className="section_padding">
        <div className="container">
          <div className="login">
            <div className="common_author_boxed">
              <div className="common_author_heading">
                <h2>Login your account</h2>
              </div>
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
                    <ul>
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
                    </ul>
                    <p>
                      Don't have an account? <a href="/register">Register now</a>
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