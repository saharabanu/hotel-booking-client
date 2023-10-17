'use client'
import {  message } from "antd";
import Form  from '../../../component/form/Form'
import FormInput  from '../../../component/form/FormInput'
import { useRouter } from "next/navigation";


const Edit = () => {
    const router = useRouter()
    // const onSubmit = async (values) => {
    //     message.loading("profile is updating ............")
    //     try {
    //       // console.log(data);
    //     //    await updateUser({id, body:values})
         
    //       message.success("User updated successfully");
    //       router.push('/profile')
          
    //     } catch (err) {
    //       message.error(err.message)
    //     }
    //   };
  
  const onSubmit = (data) => {
    message.success('Profile Updated')
    console.log(data)
    router.push('/profile')
  }

  const defaultValues = {
    name: 'kajol',
    email:'email@gmail.com',
    address:'Ukil para Naogaon',
    phonenumber:"2452366"
  }
    return (
    <>
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
    <FormInput name="address" type="text" size="large" label="User Phone Number" />
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

export default Edit