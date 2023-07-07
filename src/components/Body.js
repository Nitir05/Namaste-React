import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";

const Body = () => {
  const [restroList, setRestroList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json.data.cards[2].data.data.cards);
    setRestroList(json?.data?.cards[2]?.data?.data?.cards);
  };

  return restroList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = restroList.filter(
                (res) => res.data.avgRating > 4
              );
              setRestroList(filteredList);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
        <div className="res-container">
          {restroList.map((res) => (
            <RestaurentCard key={res.data.id} resData={res} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
