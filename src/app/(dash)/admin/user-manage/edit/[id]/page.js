'use client'
import HotelBreadCrumb from "../../../../../../component/ui/HotelBreadCrumb";
import Form from "../../../../../../component/form/Form";
import FormInput from "../../../../../../component/form/FormInput";
import {  useGetSingleUserQuery, useUpdateUserMutation } from "../../../../../../redux/api/userApi";
import { message } from "antd";
import { useRouter } from "next/navigation";

const UserEditPage = ({params}) => {
  const router = useRouter();
  const base = "admin"; 

    const {id}  = params;
    // console.log(id, 'params')
 const {data} = useGetSingleUserQuery(id)
// console.log(data)
   const [updateUser] = useUpdateUserMutation();
  
 
 const defaultValues = {
  name: data?.name,
  email: data?.email,
  phonenumber: data?.phonenumber,
  password: data?.password,
  role: data?.role,
 }
 
 
  
  const onSubmit = async (values) => {
    message.loading("user is updating ............")
    try {
      // console.log(data);
       await updateUser({id, body:values})
     
      message.success("User updated successfully");
      router.push('/admin/user-manage')
      
    } catch (err) {
      message.error(err.message)
    }
  };






  return (
    <>
      <div className="container">
        <HotelBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: "User-Manage",
              link: `/${base}/user-manage`,
            },
          ]}
          style={{ paddingLeft: "20px " }}
        />
      </div>
      <h2>Only admin can update users</h2>

      <Form  submitHandler={onSubmit} defaultValues={defaultValues}>
        <div className="form-group">
          <FormInput name="name" type="name" size="large" label="User Name" />
        </div>
        <br />
        <div className="form-group">
          <FormInput name="email" type="email" size="large" label="User Email" />
        </div>
        <br />
        <div className="form-group">
          <FormInput name="role" type="text" size="large" label="Role" />
        </div>
        <br />
        <div className="form-group">
          <FormInput name="password" type="password" size="large" label="User Password" />
        </div>
        <br />
        
        <div className="form-group">
          <FormInput name="phonenumber" type="number" size="large" label="User Phone Number" />
        </div>
        <br />
        <div className="common_form_submit">
                    <button type="primary"  htmlType='submit' className="btn btn_theme btn_md">Update</button>
                  </div>
      </Form>
    </>
  );
};

export default UserEditPage;
