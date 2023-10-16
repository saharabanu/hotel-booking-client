/* eslint-disable @next/next/no-async-client-component */
"use client";
import HotelDetails from "./HotelDetails";
import { useGetServicesQuery } from "../../redux/api/serviceApi";
import { useState } from "react";
// export const getData = async () => {
//   const res = await fetch("http://localhost:8000/hotels", {
//     cache: "force-cache",
//   });
//   const data = await res.json();
//   // console.log(data)

//   return data;
// };

const HotDeals = () => {
  const { data, loading } = useGetServicesQuery();
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

          <div className="promotional_tour-part">
            {filteredServices?.map((hotel) => (
              <HotelDetails key={hotel?.title} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HotDeals;
