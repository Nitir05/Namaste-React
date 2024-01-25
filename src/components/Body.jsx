import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredResList, setFilteredResList] = useState([]);
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getRestaurantData = async () => {
      try {
        const data = await fetch(API_URL);
        const json = await data.json();
        const newResList =
          json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setResList(newResList);
        setFilteredResList(newResList);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    getRestaurantData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return filteredResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-and-filter">
        <input
          type="search"
          name="search"
          id="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (searchText) {
              setFilteredResList(
                resList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            setFilteredResList(resList.filter((res) => res.info.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          type="reset"
          onClick={() => {
            setFilteredResList(resList);
          }}
        >
          Reset Filter
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
