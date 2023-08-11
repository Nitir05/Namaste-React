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
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div>
      <div className="min-h-[800px] max-w-[800px] my-20 mx-auto mt-0">
        <div className="res-header-container mx-0 pt-4 mb-[18px]">
          <div className="res-name-address inline-block mr-4 w-[calc(100%-120px)]">
            <div>
              <p className="text-2xl font-bold text-[#282c3f]  mb-2 capitalize">
                {name}
              </p>
              <p className="text-[0.93rem] text-[#7e808c] h-[calc(0.93rem+2px)]  text-ellipsis mb-1 pb-1">
                {cuisines.join(", ")}
              </p>
            </div>
            <div className="flex items-center h-4">
              <p className="text-[#7e808c] text-[0.93rem]">{locality},</p>
              <p className="text-[#7e808c] text-[0.93rem]">1.0 km</p>
            </div>
          </div>
          <button className="border border-gray-300 shadow-sm rounded-md text-center p-2 max-w-[100px] float-right">
            <span className="res-ratings-container-starIcon flex">
              <span className="text-[#3d9b6d] pb-[10px] pr-2 border-b border-[#e9e9eb] font-bold mb-2 block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-[#3d9b6d] pb-[10px] border-b border-[#e9e9eb] font-bold mb-2 block">
                {avgRating}
              </span>
            </span>
            <span className="text-[11px] text-[#8b8d97] font-[ProximaNovaCondensedRegular,arial,Helvetica Neue,sans-serif]">
              {totalRatingsString}
            </span>
          </button>
          <ul></ul>
          <hr className="border border-b-[#d3d3d3] border-dashed mt-4 mb-[18px]" />
          <div className="mb-[18px]">
            <ul className="text-[#3e4152] text-[15px] font-bold">
              <li className="mr-6 inline-block">{sla.slaString}</li>
              <li className="inline-block">{costForTwoMessage}</li>
            </ul>
          </div>
          <hr className="border-[0.5px] border-b-[#d3d3d3]" />
        </div>
        <div>
          {itemCards.map((item) => (
            <Menu key={item.card.info.id} itemData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
