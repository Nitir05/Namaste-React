import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Offers from "./Offers";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [courouselList, setCourouselList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setRestroList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestro(json?.data?.cards[2]?.data?.data?.cards);
    setCourouselList(json?.data?.cards[0]?.data.data?.cards);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks Like you are offline!! Please check your internet connection!!
      </h1>
    );
  return restroList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="py-5 bg-[#171a29] contain mx-auto">
        <div className="ml-[10px] flex">
          {courouselList.map((item) => (
            <Offers key={item.data.bannerId} offerData={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap ml-6 justify-center">
        {filteredRestro.map((res) => (
          <Link key={res.data.id} to={"/restaurants/" + res.data.id}>
            <RestaurentCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
