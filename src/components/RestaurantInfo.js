import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Menu from "./Menu";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantInfo(resId);

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

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(itemCards);

  return (
    <div>
      <div className="res-body">
        <div className="res-header-container">
          <div className="res-name-address">
            <div>
              <p className="res-name-address-name">{name}</p>
              <p className="res-name-address-cuisines">{cuisines.join(", ")}</p>
            </div>
            <div className="res-name-address-areaWrapper">
              <p className="res-name-address-areaWrapper-area">{locality},</p>
              <p>1.0 km</p>
            </div>
          </div>
          <button className="res-ratings-container">
            <span className="res-ratings-container-starIcon">
              <span>4.0</span>
            </span>
            <span>500+ ratings</span>
          </button>
          <hr className="res-header-seperator" />
          <span className="estimated-time">{sla.slaString}</span>
          <span className="cost">{costForTwoMessage}</span>
          <hr className="res-header-seperator-solid" />
        </div>
        <div className="menu-items">
          {itemCards.map((item) => (
            <Menu key={item.card.info.id} itemData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
