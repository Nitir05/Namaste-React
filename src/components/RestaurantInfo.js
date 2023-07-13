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
      <div className="">
        <div className="res-header-container">
          <div className="res-name-address inline-block mr-4 w-[calc(100%-120px)]">
            <div>
              <p className="text-2xl font-bold text-[#282c3f]  mb-2 capitalize">
                {name}
              </p>
              <p className="text-[0.93rem] text-[#7e808c] h-[calc(0.93rem+2px)] overflow-hidden text-ellipsis mb-1 whitespace-nowrap">
                {cuisines.join(", ")}
              </p>
            </div>
            <div className="flex items-center h-4">
              <p className="text-[#7e808c] text-[0.93rem]">{locality},</p>
              <p className="text-[#7e808c] text-[0.93rem]">1.0 km</p>
            </div>
          </div>
          <button className="border border-gray-300 shadow-sm rounded-md text-center p-2 max-w-[100px] float-right">
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
        {/* <div className="menu-items">
          {itemCards.map((item) => (
            <Menu key={item.card.info.id} itemData={item} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default RestaurantInfo;
