/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Form from "../form/Form";
import FormInput from "../form/FormInput";
import auth from "../firebase/firebase.auth";

const RegisterPage = () => {
  // const termsConditionsCheckbox = document.getElementById('termsConditions');
  // if (!termsConditionsCheckbox?.checked) {
  //   // Show an error message and prevent registration
  //   console.error('Please agree to the Terms and Conditions.');
  //   return;
  // }
  const router = useRouter();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // console.log(user)

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(data.email, data.password);
      Router.push("/");
    } catch (err) {
      if (err.message.includes("email is already in use")) {
        // Handle the case where the email is already registered
        // You can display an error message to the user
        console.error("Email is already registered.");
      } else {
        // Handle other errors
        console.error(err.message);
      }
    }
  };
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {user && <p style={{ color: "green" }}>User Registration successful!</p>}
      <section id="common_author_area" className="section_padding">
        <div className="container">
          <div className="login">
            <div className="common_author_boxed">
              <div className="common_author_heading">
                <h2>Register your account</h2>
              </div>
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
                    <FormInput name="password" type="password" size="large" label="User Password" />
                  </div>

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
                      Login
                    </button>
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
                      Already have an account? <a href="/login">Login now</a>
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
