/* eslint-disable @next/next/no-async-client-component */
"use client";
import HotelDetails from "./HotelDetails";
import { useGetServicesQuery } from "../../redux/api/serviceApi";
import { useState } from "react";
import { Button, Input } from "antd";
import { useDebounced } from "../../redux/hooks";
import {   RedoOutlined } from "@ant-design/icons";


const HotDeals = () => {

  const query = {};
  
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;}

  const { data, loading } = useGetServicesQuery({...query});
  // console.log(data)
  const services = data?.services;
  



  

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to filter services based on the selected category
  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  // Function to change the selected category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const resetFilters = () => {
    setSearchTerm("");
  };
  return (
    <>
      <section id="explore_area" className="section_padding_top">
        <div className="container">
          <div className="section_heading_center">
            <h2>Explore our hot deals</h2>
          </div>

          <div className="destination-nav1">
            <nav className="theme_nav_tab_item">
              <div className="nav nav-tabs">
                <button
                  type="button"
                  style={{
                    backgroundColor: selectedCategory === "All" ? "#8B3EEA" : "",
                    color: selectedCategory === "All" ? "#fff" : "",
                  }}
                  onClick={(e) => handleCategoryChange("All", e)}
                >
                  Hotels
                </button>
                {/* Add buttons for other categories */}
                <button
                  type="button"
                  style={{
                    backgroundColor: selectedCategory === "tours" ? "#8B3EEA" : "",
                    color: selectedCategory === "tours" ? "#fff" : "",
                  }}
                  onClick={(e) => handleCategoryChange("tours", e)}
                >
                  Tours
                </button>
                <button
                  type="button"
                  style={{
                    backgroundColor: selectedCategory === "space" ? "#8B3EEA" : "",
                    color: selectedCategory === "space" ? "#fff" : "",
                  }}
                  onClick={(e) => handleCategoryChange("space", e)}
                >
                  Space
                </button>
                <button
                  type="button"
                  style={{
                    backgroundColor: selectedCategory === "events" ? "#8B3EEA" : "",
                    color: selectedCategory === "events" ? "#fff" : "",
                  }}
                  onClick={(e) => handleCategoryChange("events", e)}
                >
                  Events
                </button>
              </div>
            </nav>
          </div>
          <div className="hotel-search" style={{textAlign:'center',margin:'10px 0'}}>
          <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        { (!!searchTerm) && (
            <Button style={{ marginLeft: "5px" }} type="primary" onClick={resetFilters}>
              <RedoOutlined />
            </Button>
          )}
          </div>

          <div className="promotional_tour-part">
            {filteredServices?.map((hotel) => (
              <HotelDetails key={hotel?._id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HotDeals;
