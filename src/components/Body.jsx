import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    const getRestaurantData = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const newResList =
          json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setResList(newResList);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    getRestaurantData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
