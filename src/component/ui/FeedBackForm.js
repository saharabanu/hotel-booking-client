"use client";

// components/Feedback.js
import { Input, Rate,  message } from "antd";

import Form from "../form/Form";
import FormInput from "../form/FormInput";
import { useState } from "react";

const FeedBackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: 0,
        comments: '',
      });
    
      const clearForm = () => {
        setFormData({
          name: '',
          email: '',
          rating: 0,
          comments: '',
        });
      };

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    message.success("Thank you for your feedback!");
    clearForm()
  };

  return (
    <div className="login" style={{ padding: " 60px 0" }}>
      <Form submitHandler={onSubmit}>
        <div className="form-group">
          <FormInput name="name" type="name" size="large" label=" Name" placeholder='Your Name'/>
        </div>
        <br />
        <div className="form-group">
          <FormInput name="email" type="email" size="large" label=" Email" placeholder='Your Email'/>
        </div>
        <br />
        <div className="form-group">
        <label >Rate: </label>
          <Rate name="rating" style={{color:'#8B3EEA', }}/>
        </div>
        <br />
        <label >Comments</label>
        <div className="form-group">
          <Input.TextArea name="comments" placeholder="Write Your Comment Here"/>
        </div>
       <br />
       <br />
        <div className="common_form_submit">
          <button type="primary" htmlType="submit" className="btn btn_theme btn_md">
            Submit
          </button>
          
          <button className="btn btn_theme btn_md"   onClick={clearForm} style={{marginLeft:'5px'}}>
          Clear Form
        </button>
        
        </div>
        
        
      </Form>
      
    </div>
  );
};
export default FeedBackForm;





// import { useState } from 'react';
// import { Form, Input, Rate, Button, message } from 'antd';

// export default function Feedback() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     rating: 0,
//     comments: '',
//   });

//   const clearForm = () => {
//     setFormData({
//       name: '',
//       email: '',
//       rating: 0,
//       comments: '',
//     });
//   };

//   const onSubmit = (data) => {
//     console.log(data); // Handle form submission here
//     message.success('Thank you for your feedback!');
//     clearForm();
//   };

//   return (
//     <Form layout="vertical" onFinish={onSubmit}>
//       <Form.Item label="Name" name="name">
//         <Input
//           name="name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//       </Form.Item>
//       <Form.Item label="Email" name="email">
//         <Input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />
//       </Form.Item>
//       <Form.Item label="Rating" name="rating">
//         <Rate
//           name="rating"
//           value={formData.rating}
//           onChange={(value) => setFormData({ ...formData, rating: value })}
//         />
//       </Form.Item>
//       <Form.Item label="Comments or Suggestions" name="comments">
//         <Input.TextArea
//           name="comments"
//           value={formData.comments}
//           onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
//         />
//       </Form.Item>
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//       <Button type="default" onClick={clearForm}>
//         Clear Form
//       </Button>
//     </Form>
//   );
// }
