'use client'

import { message } from 'antd';
import HotelBreadCrumb from '../../../../../../component/ui/HotelBreadCrumb';
import { useGetSingleServiceQuery, useUpdateServiceMutation } from '../../../../../../redux/api/serviceApi';
import FormInput from '../../../../../../component/form/FormInput';
import Form from '../../../../../../component/form/Form';


const ServiceEditPage = ({params}) => {
    const base = "admin";


    const {id}  = params;
    // console.log(id, 'params')
 const {data} = useGetSingleServiceQuery(id);
 const [updateService] = useUpdateServiceMutation()
// console.log(id)
 
  
 
 const defaultValues = {
  title: data?.title,
  address: data?.address,
  country: data?.country,
  category: data?.category,
  price: data?.price,
  availability: {
    availableRooms: data?.availableRooms,
    checkInTime: data?.checkInTime,
    checkOutTime: data?.checkOutTime
  },
  images: data?.images[0],
  images: data?.images[1],
  images: data?.images[2],
  images: data?.images[3],
  images: data?.images[4],
  images: data?.images[5],
  contact: data?.contact,
  description: data?.description[0],
  description: data?.description[1],
  reviews: data?.reviews[0],
  hotelsFacilities: data?.hotelsFacilities[0],
  hotelsFacilities: data?.hotelsFacilities[1],
  hotelsFacilities: data?.hotelsFacilities[2],
  hotelsFacilities: data?.hotelsFacilities[3],
  hotelsFacilities: data?.hotelsFacilities[4],
  roomFacilities: data?.roomFacilities[0],
  roomFacilities: data?.roomFacilities[1],
  roomFacilities: data?.roomFacilities[2],
  roomFacilities: data?.roomFacilities[3],
  ratings: {
    averageRating: data?.averageRating,
    totalReviews: data?.totalReviews
  }
    


 }
 
 
  
  const onSubmit = async (values) => {
    message.loading("Service is updating ............")
    try {
      // console.log(data);
       await updateService({id, body:values})
     
      message.success("Service updated successfully");
      
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
              label: "Service-Manage",
              link: `/${base}/service-manage`,
            },

            
          ]}
          style={{ paddingLeft: "20px " }}
        />
      </div>
        <h2>Only admin can update Service</h2>


        <Form  submitHandler={onSubmit} defaultValues={defaultValues}>
        <div className="form-group">
          <FormInput type="text" name="title" size="large" label="User Name" />
        </div>
        <br />
        <div className="form-group">
          <FormInput type="text" name="address" size="large" label="User Email" />
        </div>
        <br />
        <div className="form-group">
          <FormInput type="text" name="country" size="large" label="Role" />
        </div>
        <br />
        <div className="form-group">
          <FormInput type="text" name="category" size="large" label="User Password" />
        </div>
        <br />
        
        <div className="form-group">
          <FormInput type="number" name="price" size="large" label="User Phone Number" />
        </div>
        <br />
        <div className="form-group">
          <FormInput type="number" name="availability.availableRooms" size="large" label="User Phone Number" />
        </div>
        <br />
        <div className="form-group">
          <FormInput type="text" name="availability.checkInTime" size="large" label="User Phone Number" />
        </div>
        <br />
        <div className="form-group">
          <FormInput type="text" name="availability.checkOutTime"size="large" label="User Phone Number" />
        </div>
        <div className="form-group">
          <FormInput type="text" name="contact"size="large" label="User Phone Number" />
        </div>
        <div className="form-group">
          <FormInput type="text" name="description"size="large" label="User Phone Number" />
        </div>
        <br />
        <div className="common_form_submit">
                    <button type="primary"  htmlType='submit' className="btn btn_theme btn_md">Update</button>
                  </div>
      </Form>
    </>
  )
}

export default ServiceEditPage