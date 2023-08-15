import { useState, useEffect } from "react";
import { API_URL } from "./constants";

const useBackendData = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const listOfRestros = json?.data?.cards.filter(
      (c) => c.card?.card?.id === "restaurant_grid_listing"
    );
    setRestroList(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    // Update filteredRestro whenever restroList changes
    setFilteredRestro(restroList);
  }, [restroList]);

  return [restroList, filteredRestro];
};

export default useBackendData;
