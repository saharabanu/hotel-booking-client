"use client";
import Form from "antd/es/form/Form";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Searchbar = () => {
  const router = useRouter();
  // const [selectedCategory, setSelectedCategory] = useState("flights");
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  // };
  const { register, handleSubmit } = useForm();

  const onSubmit =  (data) => {
    // Redirect to the home page
    console.log(data)
    router.push("/services");
  };

  return (
    <>
     
        <section id="theme_search_form" className="">
          <div className="theme_search_form_area form-area">
            
          
          <form onSubmit={handleSubmit(onSubmit)}>
                

                  <div className="form-desc ">
                   
                      <div className=" form-desc-div1">
                        <div className="flight_Search_boxed">
                          <p>Destination</p>
                          
                          <input {...register("title", { required: true })}  type="text" placeholder="Type your destination" />
                          <span>Where Are you going?</span>
                          <div className="plan_icon_posation">
                            <i className="fas fa-plane-departure"></i>
                          </div>
                        </div>
                      </div>

                      
                      <div className=" form-desc-div1 ">
                        <div className="form_search_date">
                          <div className="flight_Search_boxed date_flex_area">
                            <div className="Journey_date">
                              <p>Journey Start date</p>
                             
                              <input {...register("startDate", { required: true })} type="date"/>
                              <br />
                              <span>Thursday</span>
                            </div>
                            {/* <div className="Journey_date">
                            <p>Journey End date</p>
                            <input type="date"  required/>
                            <br />
                            <span>friday</span>
                          </div> */}
                          </div>
                        </div>
                      </div>
                      
                      <div className=" form-desc-div1">
                        <div className="flight_Search_boxed">
                          <p>Passenger, Class</p>
                          
                          <input {...register("people", { required: true })} type="number" placeholder="type number"/>
                          <span>0 Passenger</span>
                          
                        </div>
                      </div>
                     
                    
                  </div>
                
      
            <div className="top_form_search_button">
              <input className="btn btn_theme btn_md" type="submit" value="Search" />
            </div>

            </form>
          </div>
        </section>
      
    </>
  );
};

export default Searchbar;
