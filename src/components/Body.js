import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";

const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json.data.cards[2].data.data.cards);
    setRestroList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestro(json?.data?.cards[2]?.data?.data?.cards);
  };
  return restroList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const filteredList = restroList.filter((res) => {
                  return res.data.name.toLowerCase().includes(searchText);
                });
                setFilteredRestro(filteredList);
              }}
            >
              Search
            </button>
            <button
              onClick={() => {
                setFilteredRestro(restroList);
              }}
            >
              Clear Filters
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList1 = restroList.filter(
                (res) => res.data.avgRating > 4
              );
              setFilteredRestro(filteredList1);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
        <div className="res-container">
          {filteredRestro.map((res) => (
            <RestaurentCard key={res.data.id} resData={res} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
