import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";

const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
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
            <Link key={res.data.id} to={"/restaurants/" + res.data.id}>
              <RestaurentCard resData={res} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
