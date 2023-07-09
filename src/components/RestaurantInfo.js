import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    locality,
    city,
    avgRating,
    totalRatingsString,
    sla,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;
  return (
    <div className="restaurant-container">
      <div className="restaurantInfo">
        <div className="res-name">
          <h4>{name}</h4>
          <p>{cuisines.join(", ")}</p>
          <p>
            {locality}, {city}
          </p>
        </div>
        <div className="ratings">
          <span>{avgRating}</span>
          <div className="total-rating">
            <span>{totalRatingsString}</span>
          </div>
        </div>
      </div>
      <div className="res-sla">
        <div className="timings">
          <h3>{sla.slaString}</h3>
          <h3>{costForTwoMessage}</h3>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
