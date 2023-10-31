
'use client'
import {  message } from "antd";

import { useRouter } from "next/navigation";
import Form from "../../../../component/form/Form";
import FormInput from "../../../../component/form/FormInput";
import { useGetSingleUserQuery, useUpdateUserMutation } from "../../../../redux/api/userApi";
import HotelBreadCrumb from "../../../../component/ui/HotelBreadCrumb";


const EditPage = ({params}) => {
  const {id} = params;
    const router = useRouter();
    const {data} = useGetSingleUserQuery(id);

    const [updateUser] = useUpdateUserMutation();
    const onSubmit = async (values) => {
        message.loading("profile is updating ............")
        try {
          // console.log(data);
            await updateUser({id, body:values})
         
          message.success("User updated successfully");
          router.push('/profile')
          
        } catch (err) {
          message.error(err.message)
        }
      };
  
  

  const defaultValues = {
    name: data?.name,
    email:data?.email,
    // address:data?.ad,
    phonenumber:data?.phonenumber
  }
    return (
    <>

<HotelBreadCrumb  items={[
          {
            label: 'Home',
            link: '/',
          },
          {
            label: 'Profile',
            link: '/profile',
            
          },
          
        ]} style={{paddingLeft:"20px "}}/>
<h2>You can Update your profile info</h2>

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
    <FormInput name="phonenumber" type="number" size="large" label="User Phone Number" />
  </div>
  <br />
  <div className="common_form_submit">
              <button type="primary"  htmlType='submit' className="btn btn_theme btn_md">Update</button>
            </div>
</Form>

    </>
  )
}

export default EditPage