import { useState } from "react";
import Menu from "./Menu";

const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  setShowItems,
}) => {
  const { title } = data.card.card;
  const itemCards = data?.card?.card?.itemCards;

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="w-full flex justify-between mt-2 mb-4 shadow-sm border-b-gray-400 border-y-1 cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {title}({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>
        {itemCards.map(
          (item) =>
            showItems && <Menu key={item.card.info.id} itemData={item} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
